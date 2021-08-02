import axios from 'axios'
import {useState} from 'react'

import {
    Form,
    Input,
    Button,
    Container,
    Column,
    Row,
    Label
} from './styles.js'

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
        axios.post('http://localhost:8080/pf/create', {
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
        <Container>
            <Form> 
            <h1 style={{color:'white', fontWeight:'bold'}}>Wolfer</h1>
            <h2 style={{color:'white', fontWeight:'bold'}}>Cadastro produto final</h2>

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

                <Label>Tipo</Label>
                <Input  onChange={(e)=>{setTipo(e.target.value)}} placeholder=' ex: Esteira'></Input>

                <Label>Valor de compra</Label>
                <Input  onChange={(e)=>{setValorCompra(e.target.value)}} placeholder=' R$ 15.25'></Input>

                <Label>Valor de venda</Label>
                <Input onChange={(e)=>{setvalorVenda(e.target.value)}} placeholder=' R$ 50.32'></Input>

                <Label>Quantidade</Label>
                <Input  onChange={(e)=>{setQuantidade(e.target.value)}} placeholder=' ex: 32'></Input>
                </Column>

            </Row>

            <Row>
                <Button  onClick={onSubmit}>Cadastrar</Button>
            </Row>

            </Form>

        </Container>
    );
  }
  
  export default AddPF;