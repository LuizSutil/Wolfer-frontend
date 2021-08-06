import axios from 'axios';
import React, { useEffect, useState } from 'react'


import { 
    
    Container,
    Body,
    Pedidos,
    Dados,
    Form,
    Label,
    TableHeading,
    TableName,
    Items,
    Data,
    Descricao,
    TitleProduct

} from './styles';


const Lista_pedidos = () => {


    const [pedidos, setPedidos] = useState([])
    const [mps, setMps] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:8080/rc/catalogue/all')
        .then(res => {
            setPedidos(res.data)
            console.log(pedidos)
        })
    },[])

    
    
    return (
        <Container>
            <Body>
                <Form>
                    {pedidos.map((pedido) => {
                        


                        return(
                            
                            <Pedidos>

                                <Data>
                                    
                                    <TitleProduct>teste</TitleProduct>
                                    
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
                                    {pedido.matp.map((mp) => {
                                        return(

                                    <TableName >
                                        <Items>
                                            {mp.codigo}
                                        </Items>
                                        <Items>
                                            {mp.descricao}
                                        </Items>
                                        <Items>
                                            {mp.valor_venda} 
                                        </Items>
                                    </TableName>

                                    )})}
                                </Data>

                                
                                <Dados>
                                    <Descricao>Descrição: {pedido.descricao}</Descricao>
                                </Dados>

                                
                            </Pedidos>

                        )})}

                     
                </Form>  
                           
            </Body>
        </Container>
    )
}

export default Lista_pedidos