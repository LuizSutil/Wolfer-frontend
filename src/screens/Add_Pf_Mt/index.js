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
    DivButton

} from './styles.js'
import { Container } from '../CadastroMP/styles.js'



const ReqPF = () => {

    const [pfs, setPfs] = useState([])
    const [mps, setMps] = useState([])
    const [mpAdd, setMpAdd] = useState()
    const [pfAdd, setPfAdd] = useState()


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
        setMpAdd(mp)
    }

    const postPf_Mp = (pfAdd, mpAdd) => {
        console.log(mpAdd, pfAdd)

        axios.post('http://localhost:8080/pf/add/mp',
        {pf: `${pfAdd}`,
         mp: `${mpAdd}`  })
        .then(res => {})
    }
    
    

    return (
        <Container>
        <Form>
         <Title>
          <h1>Wolfer</h1>
           <h2>Ordem de Serviço</h2>

           <Head>
            <div>Produto Final</div>
            <div>Matéria Prima</div>
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

         </Title>

        </Form>
        </Container>
    )
}

export default ReqPF