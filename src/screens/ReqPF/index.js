import {useEffect, useState} from 'react'
import axios from 'axios'


import{
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
    ValorFinal
} from './styles.js'



const ReqPF = () => {

    const [pfs, setPfs] = useState([])
    const [mps, setMps] = useState([])
    const [adds, setAdds] = useState([])
    const [valores, setValores] = useState([])
    const [valorFinal, setValorFinal] = useState()




    useEffect(() => {
        axios.get('http://localhost:3000/pf/catalogue/all')
        .then(res => {
            setPfs(res.data)
        })
    },[])

    const getMps = (pf) => {
        axios.post('http://localhost:3000/pf/catalogue/mp',
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
    var x = 0;
    return (
        <Form>
         <Title>
          <h1>Wolfer</h1>
           <h2>Ordem de Serviço</h2>

           <Head>
            <div>Produto Final</div>
            <div>Matéria Prima</div>
            <div>Adicionados</div>
           </Head>

           <Body>
            <Table>
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
           <ValorFinal>
                 <h3>valor final: {x}</h3>
                 
                 <Button onClick={() => {console.log(valores)}}>Adicionar Ordem</Button>
                
                 </ValorFinal>
         </Title>

        </Form>
    )
}

export default ReqPF