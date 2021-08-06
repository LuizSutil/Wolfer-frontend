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
    ValorFinal,
    Form2,
    Input
} from './styles.js'



const ReqPF = () => {

    const [pfs, setPfs] = useState([])
    const [mps, setMps] = useState([])
    const [adds, setAdds] = useState([])
    const [valores, setValores] = useState([])
    const [valorFinal, setValorFinal] = useState()
    const [idPf, setIdPf] = useState()
    const [descricao, setDescricao] = useState()




    useEffect(() => {
        axios.get('http://localhost:8080/pf/catalogue/all')
        .then(res => {
            setPfs(res.data)
        })
    },[])

    const listAdds = (adds) => {
        var x = []

        adds.forEach(element => {
            x.push(element.codigo)
        });
        return x

    }

    const getMps = (pf) => {
        setIdPf(pf)
        axios.post('http://localhost:8080/pf/catalogue/mp',
        {pf:`${pf}`})
        .then(res => {
            setMps(res.data)
            setAdds([])
        }).catch(err=>console.log(err))
    }

    const onSelected = async (mp) => {
        const newAdd = adds.filter((add) => add.id !== mp.id)
        setAdds(newAdd)
        setAdds(adds => [...adds, mp])
    }
    
    const remMP = (mp) => {
        const newAdd = adds.filter((add) => add.id !== mp.id) 
        setAdds(newAdd)
    }

    const createOrder = () => {
        
        console.log('New Add: ', adds)
        console.log('Descrição: ', descricao)
        console.log('Produto final: ', idPf)

        axios.post('http://localhost:8080/rc/create',
        {codigo: `${2223}`,
        pf: `${idPf}`,
        mp: JSON.stringify(listAdds(adds)),
        descricao: `${descricao}`,
        tipo: 'teste',
        valor_compra: `${x}`,
        valor_venda: `${x + 500}`,
        quantidade: `${1}`
        }).then(res => {})

    }

    /*mandar newAdd e o produto final selecionado 
      rc/create  */
    var x = 0;
    return (
        <Container>
            <button onClick={() => listAdds(adds)}>teste</button>
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
                 <TableName onClick={() => {getMps(pf.codigo)}}>
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
            <Head>Matéria Prima</Head>

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

                     
                    <TableName onClick={() => {onSelected(mp); setValores(valores => [...valores, mp.valor_compra])}}>
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
            <Table>
            <Head>Adicionados</Head>
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

                 {adds.map((add) => {
                 x = Number(x + Number(add.valor_compra));
                 return(
                 <TableName onClick={()=> {remMP(add)}}>
                    <Items>
                        {add.codigo}
                     </Items>
                    <Items>
                        {add.descricao}
                        </Items>
                    <Items>
                        {add.valor_compra}
                     </Items>
                 </TableName>

                 )})}
                 
                
            </Table>

                
            </Body>


            <Form2>
                
                <div>{descricao}</div>
                <Input onChange={(e) => {setDescricao(e.target.value)} }></Input>       
                
                <ValorFinal>

                    <h3>valor final: {x}</h3>
                    
                    <Button type={'button'} onClick={() => {createOrder(idPf, adds, descricao, x )}}>Adicionar Ordem</Button>
                    
                </ValorFinal>

            </Form2>
            
            <Form2>
            </Form2>
        </Form>

        </Container>
    )
}

export default ReqPF