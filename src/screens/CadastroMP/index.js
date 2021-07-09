import {useState} from 'react'
import axios from 'axios'

import {
    Form,
    Input,
    Button,
    Container,
    Column,
    Row,
    Label
} from './styles'

const AddMP = () => {

    const [codigo, setCodigo] = useState()
    const [ncm, setNcm] = useState()
    const [cfop, setCfop] = useState()
    const [sct, setSct] = useState()
    const [descricao, setDescricao] = useState()
    const [unid, setUnid] = useState()
    const [tipo, setTipo] = useState()
    const [valorCompra, setValorCompra] = useState()
    const [valorVenda, setvalorVenda] = useState()
    const [quantidade, setQuantidade] = useState()


    const onSubmit = () => {
        axios.post('http://localhost:8080/mp/create', {
            codigo:`${codigo}`,
            ncm: `${ncm}`,
            cfop: `${cfop}`,
            sct: `${sct}`,
            descricao: `${descricao}`,
            unid_medida: `${unid}`,
            tipo: `${tipo}`,
            valor_compra: valorCompra, //integer or decimal
            valor_venda: valorVenda,
            quantidade: quantidade
        })
        
        
    }

    return (
        <Container>
            <Form> 
                <h1 style={{color:'white', fontWeight:'bold'}}>Wolfer</h1>
                <h2 style={{color:'white', fontWeight:'bold'}}>Cadastro Materia Prima</h2>
            <Row>
            <Column>
                <Label>Codigo</Label>
                <Input minLength={4} maxLength={4} onChange={(e)=>{setCodigo(e.target.value)}} placeholder=' ex: 1111'></Input>

                <Label>NCM</Label>
                <Input  minLength={8} maxLength={8} onChange={(e)=>{setNcm(e.target.value)}} placeholder=' ex: 2222 3333'></Input>

                <Label>CPOF</Label>
                <Input  minLength={4} maxLength={4} onChange={(e)=>{setCfop(e.target.value)}} placeholder=' ex: 4444'></Input>

                <Label>SCT</Label>
                <Input  minLength={3} maxLength={3} onChange={(e)=>{setSct(e.target.value)}} placeholder=' ex: 555'></Input>
           
                <Label>Descricao</Label>
                <Input onChange={(e)=>{setDescricao(e.target.value)}} placeholder=' ex: ???? mudar ???'></Input>
            </Column>

            <Column>

                <Label>Unidade de medida</Label>
                <Input  onChange={(e)=>{setUnid(e.target.value)}} placeholder=' ex: un'></Input>

                <Label>Tipo</Label>
                <Input  onChange={(e)=>{setTipo(e.target.value)}} placeholder=' ex: Parafuso'></Input>
            
                <Label>Valor de compra</Label>
                <Input  onChange={(e)=>{setValorCompra(e.target.value)}} placeholder=' ex: 10.55'></Input>
                
                <Label>Valor de venda</Label>
                <Input onChange={(e)=>{setvalorVenda(e.target.value)}} placeholder=' ex: 10.55'></Input>

                <Label>Quantidade</Label>
                <Input  onChange={(e)=>{setQuantidade(e.target.value)}} placeholder=' ex: 20'></Input>

                
              </Column>
              
             </Row>
             <Button className='button' onClick={onSubmit}>Cadastrar</Button>
            </Form>
        </Container>
    );
  }
  
  export default AddMP;