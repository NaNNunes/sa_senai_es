import { useEffect, useState } from "react";

// Importa o hook de usar um contexto
import { useContext } from "react";
// Importa o contexto de usuário
import { AuthContext } from "../context/UserContext.jsx";

const url = import.meta.env.VITE_API_URL;

// Cria o hook para fazer login, enviandos os dados de usuario e senha pra api
// e verificando se o usuario existe na lista de usuarios
export function useVerificaLogin() {
  // importa a funcao de login do contexto
  const { login } = useContext(AuthContext);

  // state para armazenar a lista de usuarios
  const [users, setUsuarios] = useState([]);

  // use effect pra puxar os dados da api, assim que o componente é montado
  useEffect(() => {
    // Função pra buscar os dados da API
    async function fetchData() {
      try {
        const request = await fetch(`${url}/users`);
        const response = await request.json();
        setUsuarios(response);
        // console.log("users: ", response);
      } catch (erro) {
        console.log(erro.message);
      }
    }
    fetchData();
  }, []);

  // funcao pra verificar se o usuário existe na lista que puxou da api
  const verificaLogin = (data) => {
    // Verifica se há um usuário com aquele email passado em data na lista que puxou da api
    const userToFind = users.find((user) => {
      return user.email === data.email;
    });

    // Se o usuário existe, verifica se a senha está correta
    if (userToFind != undefined && userToFind.senha == data.senha) {
      login(userToFind);
      console.log("Usuário logado:", userToFind.nome);
      return "Login efetuado com sucesso";
    } 
    // Caso não exista ou a senha esteja errada, retorna uma mensagem de erro
    else {
      return "Usuário ou senha inválidos";
    }
  };
  // Retorna a função de verificar login 
  return { verificaLogin };
}


export function useListaCursos(){
    const [cursos, setCursos] = useState([]);

    useEffect(() =>{
        async function fetchData() {
            try{
                const request = await fetch(`${url}/cursos`);
                const response = await request.json();
                console.log("Cursos disponíveis: ", response)
                setCursos(response);
            }
            catch(error){
                console.log(error.message)
            }
        }
        fetchData();
    }, [])

    return cursos;
}

export function useBuscaCursoPorId(id){
    const buscaCursoPorId = async(idCurso) => {
        const request = await fetch(`${url}/cursos/${idCurso}`);
        const response = request.json();
        console.log("Curso encontrado: ", response);
        return response;
    }
    return {buscaCursoPorId};
}

export function useCadastrarUser(){
    const cadastrarUser = async(data) => {
        const request = await fetch(`${url}/users`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        });
        const response = await request.json();
        console.log("User cadastrado: ", response);
        return response;
    }
    return {cadastrarUser};
}

export function useVerificadorCpf(cpfStr = "00000000000"){
    const verificadorCpf = (cpfStr) => {// verifica se todos os digitos são repetidos | obs: da pra fazer um laço e comparar
        if (
            (cpfStr == "00000000000") || (cpfStr == "11111111111") || (cpfStr == "22222222222") || 
            (cpfStr == "33333333333") || (cpfStr == "44444444444") || (cpfStr == "55555555555") || 
            (cpfStr == "66666666666") || (cpfStr == "77777777777") || (cpfStr == "88888888888") ||
            (cpfStr == "99999999999") 
        ) {
            alert("cpf não válido: ", cpfStr);
            return false;
        }

        let cpfDigitos = [];
        let verificador = [];
        // aux
        let multiplicador = 0;
        let somaProdutos = 0;
        let resto_somaProd = 0;
        // passando digitos
        for (let i = 0; i < cpfStr.length; i++) {
            (!(isNaN(cpfStr[i]))) && cpfDigitos.push(cpfStr[i]);
        }

        // verificador
        for (let i = 0; i < 2; i++) {
            somaProdutos = 0;
            multiplicador = 10+i; // posicao do verificador no cpf

            for(let c = 0; c < 9+i ; c++){
                somaProdutos += (cpfDigitos[c] * multiplicador--);
            }
            resto_somaProd = somaProdutos % 11;
            verificador[i] = ((resto_somaProd == 0) || (resto_somaProd == 1) ? 0 : (11 - resto_somaProd));
        }
        console.log((verificador[0] == cpfDigitos[cpfDigitos.length-2]) && (verificador[1] == cpfDigitos[cpfDigitos.length-1]));
        return ((verificador[0] == cpfStr[cpfStr.length - 2]) && (verificador[1] == cpfStr[cpfStr.length - 1]));
    }
    return {verificadorCpf};
}