
import { Container, Row, Col, ListGroup} from 'react-bootstrap'

const SetentaAnos = () => {
  return (
        <Container className='my-3 p-3 border-0 rounded-2 shadow'>
            <Row className='mb-4 mx-auto'>
                <Col>
                    <div style={{position:"relative", width:"100%", paddingBottom:"56.25%"}}>
                        <iframe
                            src="https://www.youtube.com/embed/8WaOdzMiVaY" 
                            title="SENAI ES 70 ANOS"
                            allow="accelerometer; autoplay; clipboard-write;
                            encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                            style={
                                {
                                    display:"flex",
                                    position:"absolute",
                                    width:"100%",
                                    height:"100%",
                                    border:"none",
                                    borderRadius:"10px",
                                    // boxShadow:"3px 4px 5px rgba(0,0,0, 0.3)"
                                }
                            }
                        />
                    </div>
                </Col>
            </Row>
            <Row>
                <Row className='m-auto'>
                    <Col style={{textAlign: "justify"}}>
                        <p>
                            Hoje, o Senai ES segue sua missão de qualificar profissionais para a indústria,
                            oferecendo cursos,
                            consultorias e serviços que atendem às demandas de um mercado em constante evolução.
                        </p>
                    </Col>
                </Row>
                <Row style={{textAlign: "justify"}} className='m-auto'>
                    <Col>
                        <ListGroup as="ul" variant='flush' className='rounded-1 shadow-sm'>
                            <ListGroup.Item action className={`text-dark`}>
                                <p>
                                    1930 - Em 1938 a Confederação Nacional da Indústria {"(CNI)"}
                                    é fundada a partir da fusão da Confederação Industrial do Brasil
                                    {"(CIB)"} com diversas representações sindicais patronais em todo o Brasil.
                                </p>
                            </ListGroup.Item>
                            <ListGroup.Item action className='text-dark'>
                                <p>
                                    1940 - Em 1942 o SENAI- Serviço Nacional de Aprendizagem Industrial é criado pela CNI,
                                    orientada pelo Decreto-Lei nº 4.048, de 22 de janeiro de 1942,
                                    assinado pelo presidente Getúlio Vargas.
                                </p>
                            </ListGroup.Item >
                            <ListGroup.Item action className='text-dark'>
                                <p>
                                    1950 - Por meio de uma parceria com a Companhia Vale do Rio Doce {"(CVRD)"},
                                    e por isso atendia basicamente às demandas geradas por esta indústria,
                                    em 1952 foi inaugurada a primeira unidade Senai Escola de Aprendizagem Pedro Nolasco,
                                    em Cariacica.
                                </p>
                            </ListGroup.Item>
                            <ListGroup.Item action className='text-dark'>
                                <p>
                                    1960 - A escola de Cariacica deu lugar ao Centro de Formação Profissional Jerônimo Monteiro em Vitória, no ano de 1964.
                                </p>
                            </ListGroup.Item>
                            <ListGroup.Item action className='text-dark'>
                                <p>
                                    1970 - Em 1970, com a chegada de grandes projetos, como CST
                                    {"(Companhia Siderúrgica de Tubarão)"},
                                    Samarco e Aracruz Celulose demandaram grande expansão do Senai para atender às demandas industriais.
                                    Com o propósito de sempre oferecer serviços inovadores e diferenciados para os alunos e indústrias,
                                    o Senai iniciava com unidades móveis com laboratórios transportáveis.
                                </p>
                            </ListGroup.Item>
                            <ListGroup.Item action className='text-dark'>
                                <p>
                                    1980 - Em 1980 o SENAI expande sua atuação para além da indústria extrativa e
                                    começa a oferecer soluções em diversos setores da indústria capixaba.
                                    Além da Grande Vitória e interior,
                                    o SENAI investe em unidades móveis como a frigorífica e a escola móvel de mecânica veicular.
                                    E posteriormente alcança todo o estado atendendo ás áreas industriais de:
                                    Alimentos e Bebidas, Automotiva, Automação, Construção Civil, Couro e Calçado, Gestão,
                                    Gráfica, Metalmecânica, Eletroeletrônica, Refrigeração e Climatização, Tecnologia da Informação,
                                    Madeira e Mobiliário, Meio Ambiente, Minerais não-metálicos, Petróleo e Gás, Polímeros,
                                    Segurança no Trabalho e Têxtil e Vestuário.
                                </p>
                            </ListGroup.Item>
                            <ListGroup.Item action className='text-dark'>
                                <p>
                                    2010 - No ano de 2010 o SENAI começa a oferecer consultorias em eficiência energética para as empresas.
                                    Em 2017 é criada a diretoria de Inovação, 
                                    Tecnologia e Produtividade, que oferece serviços nestas áreas para as empresas capixabas e em 
                                    2019 Inaugura o hub de inovação - Findeslab, uma iniciativa conjunta do SENAI e da FINDES.
                                </p>
                            </ListGroup.Item>
                            <ListGroup.Item action className='text-dark'>
                                <p>
                                    2020 - Em 2020 é inaugurado o novo espaço do Instituto Senai de Tecnologia, no SENAI Vitória. 
                                    No mesmo ano os cursos técnicos do SENAI passaram a contar com um novo formato: EaD com prática. 
                                    Na habilitação técnica, os cursos têm 80% da carga on-line e 20% presencial. 
                                </p>
                                <p>
                                    Além disso, também em 2020, o SENAI ganhou uma Academia de Segurança Cibernético.
                                    Os equipamentos e sistemas disponibilizados nas unidades do Senai formam um ambiente
                                    seguro para realização de competições cibernéticas, palestras, consultorias e cursos.
                                </p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}

export default SetentaAnos