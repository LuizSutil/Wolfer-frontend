import {useState} from 'react'
import CadastroMP from './CadastroMP'
import CadastroPF from './CadastroPF'
import StockMP from './StockMP'
import StockPF from './StockPF'
import ReqPF from './ReqPF'
import Add_Pf_Mt from './Add_Pf_Mt'


import {
    Div,
    Container,
    Navbar,
    NavItem
} from './styles.js'

import wolfer from './wolfer.png'
import Lista_pedidos from './lista_pedidos/index';

function App() {


    const [pagina,setPagina] = useState(0)

    const onAdd = (key) => {
        setPagina(key)
    }

    
    return (
        <Div>
            <Navbar>
                <img src={wolfer} alt='wolferLogo'></img>
                <NavItem onClick={() => onAdd(0)}>
                         Cadastro Materia Prima</NavItem>
                <NavItem onClick={() => onAdd(1)}>
                         Cadastro Produto Final</NavItem>
                <NavItem onClick={() => onAdd(2)}>
                         Estoque Materia Prima</NavItem>
                <NavItem onClick={() => onAdd(3)}>
                         Estoque Produto Final</NavItem>
                <NavItem onClick={() => onAdd(4)}>
                         Requisição Produto Final</NavItem>
                <NavItem onClick={() => onAdd(5)}>
                        Add Materia prima à PF</NavItem>    
                <NavItem onClick={() => onAdd(6)}>
                        Lista de pedidos</NavItem>
            </Navbar>

            <Container>
                {(pagina === 0) ? <CadastroMP/> : null}
                {(pagina === 1) ? <CadastroPF/> : null}
                {(pagina === 2) ? <StockMP/> : null}
                {(pagina === 3) ? <StockPF/> : null}
                {(pagina === 4) ? <ReqPF/> : null}
                {(pagina === 5) ? <Add_Pf_Mt/> : null}
                {(pagina === 6) ? <Lista_pedidos/> : null}
            </Container>
        </Div>
    );
  }
  
  export default App;


