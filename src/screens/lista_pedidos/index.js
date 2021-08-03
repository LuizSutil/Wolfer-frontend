import React from 'react'


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
    return (
        <Container>
            <Body>
                <Form>
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
                            <TableName>
                                <Items>
                                    Código
                                </Items>
                                <Items>
                                    Descrição
                                </Items>
                                <Items>
                                    V.Venda 
                                </Items>
                            </TableName>
                        </Data>

                        
                        <Dados>
                            <Descricao>Descrição: </Descricao>
                        </Dados>

                        
                    </Pedidos>
                    <Pedidos>
                        <Dados>teste</Dados>
                        <Dados>teste</Dados>
                        <Dados>teste</Dados>
                        <Dados>teste</Dados>
                    </Pedidos>
                    <Pedidos>
                        <Dados>teste</Dados>
                        <Dados>teste</Dados>
                        <Dados>teste</Dados>
                        <Dados>teste</Dados>
                    </Pedidos>
                    <Pedidos>
                        <Dados>teste</Dados>
                        <Dados>teste</Dados>
                        <Dados>teste</Dados>
                        <Dados>teste</Dados>
                    </Pedidos>
                </Form>  
                           
            </Body>
        </Container>
    )
}

export default Lista_pedidos