import {useEffect, useState} from 'react'
import axios from 'axios'


import {
    Title,
    Tabela,
    Dado,
    MP,
    Data,
    Form,
    Head
} from './styles.js'
const StockMP = () => {

    const [mps, setMps] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/pf/catalogue/all')
        .then(res => {
            setMps(res.data)
            console.log(mps)

        })
    },[])
    
    
    return (
        <Form>
        <Tabela>
            <Head>
            <h1>Wolfer</h1>
            <h2>Estoque materia prima</h2>
            </Head>
            <Title>
                <Dado>
                    <h5>Codigo</h5>
                 </Dado>
                <Dado>
                    <h5>NCM</h5>
                 </Dado>
                <Dado>
                    <h5>CFOP</h5>
                 </Dado>
                <Dado>
                    <h5>SCT</h5>
                 </Dado>
                <Dado>
                    <h5>Descrição</h5>
                 </Dado>
                <Dado>
                    <h5>Tipo</h5>
                 </Dado>
                <Dado>
                    <h5>Valor Compra</h5>
                 </Dado>
                <Dado>
                    <h5>Valor Venda</h5>
                 </Dado>
                <Dado>
                    <h5>Quantidade</h5>
                 </Dado>
            </Title>
        

            {mps.map((mp)=> {
                return(
                    <MP>
                    <Data>{mp.codigo}</Data>
                    <Data>{mp.ncm}</Data>
                    <Data>{mp.cfop}</Data>
                    <Data>{mp.sct}</Data>
                    <Data>{mp.descricao}</Data>
                    <Data>{mp.tipo}</Data>
                    <Data>{mp.valor_compra}</Data>
                    <Data>{mp.valor_venda}</Data>
                    <Data>{mp.quantidade}</Data>
                    
                    </MP>
                )

            })}
        </Tabela>
        </Form>
    )
}

export default StockMP