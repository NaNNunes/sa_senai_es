import { useEffect, useState } from "react";
import axios from "axios";

const url = import.meta.env.VITE_API_URL;

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