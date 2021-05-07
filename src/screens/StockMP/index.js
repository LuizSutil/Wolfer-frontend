import {useEffect, useState} from 'react'
import axios from 'axios'
import './styles.css'


const StockMP = () => {

    const [mps, setMps] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/mp/catalogue/all')
        .then(res => {
            setMps(res.data)
            console.log(mps)

        })
    },[])
    
    
    return (
        <div className='Tabela'>
            <h2>Materias Primas</h2>
            <div className='Title'>
                <div className='Dado'>
                    <h5>Codigo</h5>
                 </div>
                <div className='Dado'>
                    <h5>NCM</h5>
                 </div>
                <div className='Dado'>
                    <h5>CFOP</h5>
                 </div>
                <div className='Dado'>
                    <h5>SCT</h5>
                 </div>
                <div className='Dado'>
                    <h5>Descrição</h5>
                 </div>
                <div className='Dado'>
                    <h5>Tipo</h5>
                 </div>
                <div className='Dado'>
                    <h5>Valor Compra</h5>
                 </div>
                <div className='Dado'>
                    <h5>Valor Venda</h5>
                 </div>
                <div className='Dado'>
                    <h5>Quantidade</h5>
                 </div>
            </div>

            {mps.map((mp)=> {
                return(
                    <div className='MP'>
                    <div className='Data'>{mp.codigo}</div>
                    <div className='Data'>{mp.ncm}</div>
                    <div className='Data'>{mp.cfop}</div>
                    <div className='Data'>{mp.sct}</div>
                    <div className='Data'>{mp.descricao}</div>
                    <div className='Data'>{mp.tipo}</div>
                    <div className='Data'>{mp.valor_compra}</div>
                    <div className='Data'>{mp.valor_venda}</div>
                    <div className='Data'>{mp.quantidade}</div>
                    </div>
                )

            })}
            
            
        </div>
    )
}

export default StockMP