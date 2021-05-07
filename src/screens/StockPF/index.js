import {useEffect, useState} from 'react'
import axios from 'axios'
import './styles.css'


const StockPF = () => {

    const [pfs, setPfs] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3000/pf/catalogue/all')
        .then(res => {
            setPfs(res.data)
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

            {pfs.map((pf)=> {
                return(
                    <div className='MP'>
                    <div className='Data'>{pf.codigo}</div>
                    <div className='Data'>{pf.ncm}</div>
                    <div className='Data'>{pf.cfop}</div>
                    <div className='Data'>{pf.sct}</div>
                    <div className='Data'>{pf.descricao}</div>
                    <div className='Data'>{pf.tipo}</div>
                    <div className='Data'>{pf.valor_compra}</div>
                    <div className='Data'>{pf.valor_venda}</div>
                    <div className='Data'>{pf.quantidade}</div>
                    </div>
                )

            })}
            
            
        </div>
    )
}

export default StockPF