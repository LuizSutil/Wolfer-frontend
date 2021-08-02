import {useEffect, useState} from 'react'
import axios from 'axios'


import{
    Container,
    Form,
    Title,
    Table,
    Body,
    Head,
    TableName,
    TableHeading,
    Label,  
    Items,
    Button,
    DivButton

} from './styles.js'




const ReqPF = () => {

    const [pfs, setPfs] = useState([])
    const [mps, setMps] = useState([])
    const [mpAdd, setMpAdd] = useState([])
    const [pfAdd, setPfAdd] = useState([])


    useEffect(() => {
        axios.get('http://localhost:8080/pf/catalogue/all')
        .then(res => {
            setPfs(res.data)
        })
    },[])

    useEffect(() => {
        axios.get('http://localhost:8080/mp/catalogue/all')
        .then(res => {
            setMps(res.data)
        })
    },[])
 
    const selectPf = (pf) => {
        console.log(pf)
        setPfAdd(pf)
    }

    const selectMp = (mp) => {
        console.log(mp)
        var temp = [...mpAdd]
        temp.push(mp)
        setMpAdd(temp)
        
    }

    const teste = () => {
        console.log('Array: ', mpAdd)
    }

    const postPf_Mp = (pfAdd, mpAdd) => {
        console.log('pf: ', mpAdd, 'mp: ', pfAdd)

        axios.post('http://localhost:8080/pf/add/mp',
        {pf: `${pfAdd}`,
        mp: JSON.stringify(mpAdd)  })
        .then(res => {})

    }
    
    

    return (
        <Container>
            <Form>
                <Title>
                    <h1>Wolfer</h1>
                    <h2>Ordem de Serviço</h2>
                </Title>
                <Body>
                    <Table>
                        <Head>Produto Final</Head>
                        <TableHeading>
                            <Label>
                                Código
                            </Label>
                            <Label>
                                Descrição
                            </Label>
                            <Label>
                                V.Venda 
                            </Label>
                        </TableHeading>    

                        {pfs.map((pf) => 
                        <TableName onClick={() => {selectPf(pf.codigo)}}>
                            <Items>
                                {pf.codigo}
                            </Items>
                            <Items>
                                {pf.descricao}
                            </Items>
                            <Items>
                            {pf.valor_venda} 
                            </Items>
                        </TableName>
                        )}

                    </Table>
                    <Table>
                        <Head>Materia Prima</Head>
                        <TableHeading>
                            <Label>
                                Código
                            </Label>
                            <Label>
                                Descrição
                            </Label>
                            <Label>
                                V.Compra 
                            </Label>
                        </TableHeading>   

                    {mps.map((mp) => 

                        
                        <TableName onClick={() => {selectMp(mp.codigo)}}>
                            <Items>
                                {mp.codigo}
                            </Items>
                            <Items>
                                {mp.descricao}
                            </Items>
                            <Items>
                                {mp.valor_compra} 
                            </Items>
                        </TableName>
                    )}
                    </Table>
                    
                </Body>

                
                

                <DivButton>
                    <h3>Adicionar: </h3>
                    
                    <Button onClick={() => {postPf_Mp(pfAdd, mpAdd)}}>Adicionar Itens</Button>
                    
                </DivButton>
            </Form>
        </Container>
    )
}

export default ReqPF