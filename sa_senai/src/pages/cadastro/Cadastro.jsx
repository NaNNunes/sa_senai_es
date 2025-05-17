// estilo
import styles from "./cadastro.module.css";

// react-componentes
import Container  from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel  from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from "react-bootstrap/Alert";

import { useForm } from 'react-hook-form';
import { useState } from "react";


const Cadastro = () => {

    const [endereco, setEndereco] = useState({city:'', street:'', neighborhood:'', state:''});

    // consulta cep assim que é perdido o foco do campo cep
    const handleZipCodeBlur = async (e) =>{
        const zipCode = e.target.value;
        console.log(zipCode);

        try{
            const response =  await fetch(`https://brasilapi.com.br/api/cep/v2/${zipCode}`)
            console.log(response.ok)
            if(response.ok){
                const data = await response.json();
                console.log("Endereço localizado", data);
                setEndereco({
                    city: data.city,
                    street: data.street,
                    neighborhood: data.neighborhood,
                    state: data.state
                });   
            }
        }
        catch(erro){
            console.log("Endereço não localizado: ", erro.message);
        }
    }

    const {
        register,
        handleSubmit,
        formState:{errors},
        reset,
        watch
    } = useForm();

    const onSubmit = (data) =>{
        console.log(data);

    }
    const onError = (error) =>{
        console.log("Erro: ", error);
    }

    const [alertClass, setAlertClass] = useState("mb-5 d-none");
    const [alertMsg, setAlertMsg] = useState("");

  return (
    <div>
        <Container className='my-3'>
            <Card className='text-center shadow'>
                <Card.Header className={styles.cardheader}>
                    <Card.Title className={styles.cardtitulo}>
                        Cadastre-se
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit(onSubmit, onError)}>

                        <Row>
                            <Col>
                                <Card className={styles.topico}>
                                    <Card.Header className={styles.cardsubtituloheader}>
                                        <Card.Subtitle className={styles.cardsubtitulo}>
                                            Dados Pessoais
                                        </Card.Subtitle>
                                        <Card.Text className={styles.carddescricao}>
                                            Para saber quem você é
                                        </Card.Text>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col sm={12} md={4}>
                                                <FloatingLabel
                                                    controlId='userNameInput'
                                                    label="Nome"
                                                    className='mt-3 mb-4'
                                                >
                                                    <Form.Control
                                                        type='text'
                                                        placeholder=''
                                                        {
                                                            ...register("nome",{
                                                                required: "Nome é necessário",
                                                                minLength:{
                                                                    value:3,
                                                                    message:"Informe um nome válido"
                                                                },
                                                                pattern:{
                                                                    value:/^[A-Za-z]+$/,
                                                                    message:"Insira apenas letras"
                                                                }
                                                            })
                                                        }
                                                    />
                                                    {
                                                        errors.nome &&
                                                         <div 
                                                            className=" 
                                                                w-75 mx-5 mt-2 
                                                                position-absolute 
                                                                bg-danger text-light rounded
                                                            ">
                                                            {(errors.nome.message)}
                                                        </div>
                                                    }
                                                </FloatingLabel>
                                            </Col>

                                            <Col sm={12} md={5}>
                                                <FloatingLabel
                                                    controlId='userSurnameInput'
                                                    label="Sobrenome"
                                                    className='mt-3 mb-4'
                                                >
                                                    <Form.Control
                                                        type='text'
                                                        placeholder=''
                                                        {
                                                            ...register("sobrenome",{
                                                                required: "Sobrenome é necessário",
                                                                minLength:{
                                                                    value:5,
                                                                    message:"Informe um sobrenome válido"
                                                                },
                                                                pattern:{
                                                                    value:/^[A-Za-z]+$/,
                                                                    message:"Insira apenas letras"
                                                                }
                                                            })
                                                        }
                                                    />
                                                    {
                                                        errors.sobrenome &&
                                                         <div 
                                                            className=" 
                                                                w-75 mx-5 mt-2 
                                                                position-absolute 
                                                                bg-danger text-light rounded
                                                            ">
                                                            {(errors.sobrenome.message)}
                                                        </div>
                                                    }
                                                </FloatingLabel>
                                            </Col>

                                            <Col md={3}>
                                                <FloatingLabel
                                                    controlId='userCpfInput'
                                                    label="CPF"
                                                    className='mt-3 mb-4'
                                                >
                                                    <Form.Control
                                                        type='text'
                                                        placeholder=''
                                                        {
                                                            ...register("cpf",{
                                                                required: "CPF é necessário",
                                                                minLength:{
                                                                    value:11,
                                                                    message:"CPF possui 11 digitos"
                                                                },
                                                                maxLength:{
                                                                    value:11,
                                                                    message:"CPF possui 11 digitos"
                                                                },
                                                                pattern:{
                                                                    value:/^[0-9]+$/,
                                                                    message:"Insira apenas números"
                                                                }
                                                            })
                                                        }
                                                    />
                                                    {
                                                        errors.cpf &&
                                                            <div 
                                                                className=" 
                                                                    w-75 mx-5 mt-2 
                                                                    position-absolute 
                                                                    bg-danger text-light rounded
                                                                    "
                                                            >
                                                                {(errors.cpf.message)}
                                                            </div>
                                                    }
                                                </FloatingLabel>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                            
                        <Row> 
                            <Col sm={12} md={6}>
                                <Card className={styles.topico}>
                                    <Card.Header className={styles.cardsubtituloheader}>
                                        <Card.Subtitle className={styles.cardsubtitulo}>
                                            Contato
                                        </Card.Subtitle>
                                        <Card.Text className={styles.carddescricao}>
                                            Fique por dentro das boas novas
                                        </Card.Text>
                                    </Card.Header>
                                    <Card.Body>
                                        <FloatingLabel
                                            controlId='userNumPhoneInput'
                                            label="Celular"
                                            className='mt-3 mb-5'
                                        >
                                            <Form.Control
                                                type='text'
                                                placeholder=''
                                                {
                                                    ...register("celular",{
                                                        required: "Celular é necessário",
                                                        minLength:{
                                                            value:11,
                                                            message:"Número de celular inválido"
                                                        },
                                                        maxLength:{
                                                            value:11,
                                                            message:"Número de celular inválido"
                                                        },
                                                        pattern:{
                                                            value:/^[0-9]+$/,
                                                            message:"Apenas números"
                                                        }
                                                    })
                                                }
                                            />
                                            {
                                                errors.celular &&
                                                    <div 
                                                        className=" 
                                                            w-75 mx-5 mt-2 
                                                            position-absolute 
                                                            bg-danger text-light rounded
                                                        "
                                                    >
                                                        {(errors.celular.message)}
                                                    </div>
                                            }
                                        </FloatingLabel>
                                        <FloatingLabel
                                            controlId='userEmailInput'
                                            label="E-mail"
                                            className='mt-3 mb-4'
                                        >
                                            <Form.Control
                                                type='text'
                                                placeholder=''
                                                {
                                                    ...register("email",{
                                                        required: "O email é obrigatório",
                                                        pattern: {
                                                            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                                            message: "Email inválido",
                                                        },
                                                        validate: (value) => value.includes("@") || "Email inválido",
                                                    })
                                                }
                                            />
                                            {
                                                errors.email &&
                                                    <div 
                                                        className=" 
                                                            w-75 mx-5 mt-2 
                                                            position-absolute 
                                                            bg-danger text-light rounded
                                                        "
                                                    >
                                                        {(errors.email.message)}
                                                    </div>
                                            }
                                        </FloatingLabel>
                                    </Card.Body>
                                </Card>
                                 <Card className={styles.topico}>
                                    <Card.Header className={styles.cardsubtituloheader}>
                                        <Card.Subtitle className={styles.cardsubtitulo}>
                                            Credêncial de Acesso
                                        </Card.Subtitle>
                                        <Card.Text className={styles.carddescricao}>
                                            Evite compartilhar com terceiros
                                        </Card.Text>
                                    </Card.Header>
                                    <Card.Body>
                                        <FloatingLabel
                                            controlId='userSenhaInput'
                                            label="Senha"
                                            className='mt-3 mb-5'
                                        >
                                            <Form.Control
                                                type='password'
                                                placeholder=''
                                                {
                                                    ...register("senha", {
                                                        required: "A senha é obrigatória",
                                                        minLength: {
                                                            value: 8,
                                                            message: "A senha deve ter pelo menos 8 caracteres",
                                                        },
                                                        maxLength: {
                                                            value: 20,
                                                            message: "A senha deve ter menos de 20 caracteres",
                                                        },
                                                        pattern: {
                                                            value:
                                                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                                            message:
                                                            "Ao menos 1 carctere maiúsculo, minúsculo, especial e número",
                                                        }
                                                    })
                                                }
                                            />
                                            {
                                                errors.senha &&
                                                    <div 
                                                        className=" 
                                                            w-100 mt-2 
                                                            position-absolute 
                                                            bg-danger text-light rounded
                                                        ">
                                                        {(errors.senha.message)}
                                                    </div>
                                            }
                                        </FloatingLabel>
                                        <FloatingLabel
                                            controlId='userConfirmarInput'
                                            label="Confirmar senha"
                                            className='mt-3 mb-4'
                                        >
                                            <Form.Control
                                                type='password'
                                                placeholder=''
                                                {
                                                    ...register("confirmarSenha", {
                                                        required: "A confirmação de senha é obrigatória",
                                                        validate: (value) =>
                                                            value === watch("senha") || "As senhas não coincidem",
                                                        })
                                                }
                                            />
                                            {
                                                errors.confirmarSenha &&
                                                    <div 
                                                        className=" 
                                                            w-75 mx-5 mt-2 
                                                            position-absolute 
                                                            bg-danger text-light rounded
                                                            "
                                                        >
                                                            {(errors.confirmarSenha.message)}
                                                    </div>
                                            }
                                        </FloatingLabel>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className={styles.topico}>
                                    <Card.Header className={styles.cardsubtituloheader}>
                                        <Card.Subtitle className={styles.cardsubtitulo}>
                                            Endereço
                                        </Card.Subtitle>
                                        <Card.Text className={styles.carddescricao}>
                                            Iremos te informar sobre novidades próximas a você
                                        </Card.Text>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col>
                                                <FloatingLabel
                                                    controlId='userCEPInput'
                                                    label="CEP"
                                                    className='mt-3 mb-4'
                                                >
                                                    <Form.Control
                                                        type='text'
                                                        placeholder=''
                                                        onBlur={handleZipCodeBlur}
                                                    />
                                                    {
                                                        errors.cep &&
                                                            <div 
                                                                className=" 
                                                                    w-75 mx-5 mt-2 
                                                                    position-absolute 
                                                                    bg-danger text-light rounded
                                                                    "
                                                                >
                                                                    {(errors.cep.message)}
                                                            </div>
                                                    }
                                                </FloatingLabel>
                                            </Col>
                                            <Col xs={4} md={5}>
                                                <FloatingLabel
                                                    controlId='userUfInput'
                                                    label="Estado"
                                                    className='mt-3 mb-4'
                                                >
                                                    <Form.Control
                                                        disabled
                                                        type='text'
                                                        placeholder=''
                                                        value={endereco.state}
                                                    />
                                                </FloatingLabel>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <FloatingLabel
                                                    controlId='userLogradouroInput'
                                                    label="Logradouro"
                                                    className='mt-3 mb-4'
                                                >
                                                    <Form.Control
                                                        disabled
                                                        type='text'
                                                        placeholder=''
                                                        value={endereco.street}
                                                    />
                                                </FloatingLabel>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <FloatingLabel
                                                    controlId='userBairroInput'
                                                    label="Bairro"
                                                    className='mt-3 mb-4'
                                                >
                                                    <Form.Control
                                                        disabled
                                                        type='text'
                                                        placeholder=''
                                                        value={endereco.neighborhood}
                                                    />
                                                </FloatingLabel>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <FloatingLabel
                                                    controlId='userCidadeInput'
                                                    label="Cidade"
                                                    className='mt-3 mb-4'
                                                >
                                                    <Form.Control
                                                        disabled
                                                        type='text'
                                                        placeholder=''
                                                        value={endereco.city}
                                                    />
                                                </FloatingLabel>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <Row>
                                    <Col md={12} className='m-auto'>
                                        <Button
                                        as='input'
                                        value="Finalizar"
                                        type='submit'
                                        className='w-100 p-3'
                                        size='lg'
                                        style={
                                            {
                                                background:'linear-gradient(to right, #FC5707 50%, #F2AB13)',
                                                border:'none'
                                            }
                                        }
                                    />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}

export default Cadastro