import './styles.css'
import axios from 'axios'
import {useState} from 'react'

const AddPF = () => {

    const [codigo, setCodigo] = useState()
    const [ncm, setNcm] = useState()
    const [cfop, setCfop] = useState()
    const [sct, setSct] = useState()
    const [descricao, setDescricao] = useState()
    const [tipo, setTipo] = useState()
    const [valorCompra, setValorCompra] = useState()
    const [valorVenda, setvalorVenda] = useState()
    const [quantidade, setQuantidade] = useState()


    const onSubmit = () => {
        axios.post('http://localhost:3000/pf/create', {
            codigo:`${codigo}`,
            ncm: `${ncm}`,
            cfop: `${cfop}`,
            sct: `${sct}`,
            descricao: `${descricao}`,
            tipo: `${tipo}`,
            valor_compra: valorCompra, //integer or decimal
            valor_venda: valorVenda,
            quantidade: quantidade
        })
        
        
    }

    return (
        <div>
            <form className='form'> 
                <h2 style={{color:'grey'}}>Cadastro Materia Prima</h2>
                <label>Codigo</label>
                <input className='input' minLength={4} maxLength={4} onChange={(e)=>{setCodigo(e.target.value)}} ></input>

                <label>NCM</label>
                <input className='input' minLength={8} maxLength={8} onChange={(e)=>{setNcm(e.target.value)}}></input>

                <label>CPOF</label>
                <input className='input' minLength={4} maxLength={4} onChange={(e)=>{setCfop(e.target.value)}}></input>

                <label>SCT</label>
                <input className='input' minLength={3} maxLength={3} onChange={(e)=>{setSct(e.target.value)}}></input>

                <label>Descricao</label>
                <input className='input'onChange={(e)=>{setDescricao(e.target.value)}}></input>

                <label>Tipo</label>
                <input className='input' onChange={(e)=>{setTipo(e.target.value)}}></input>

                <label>Valor de compra</label>
                <input className='input' onChange={(e)=>{setValorCompra(e.target.value)}}></input>
                
                <label>Valor de venda</label>
                <input className='input'onChange={(e)=>{setvalorVenda(e.target.value)}}></input>

                <label>Quantidade</label>
                <input className='input' onChange={(e)=>{setQuantidade(e.target.value)}}></input>

                <button className='button' onClick={onSubmit}>Cadastrar</button>

            </form>
        </div>
    );
  }
  
  export default AddPF;