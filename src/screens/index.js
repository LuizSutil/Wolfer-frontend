import {useState} from 'react'
import CadastroMP from './CadastroMP'
import CadastroPF from './CadastroPF'
import StockMP from './StockMP'
import StockPF from './StockPF'
import ReqPF from './ReqPF'
import Add_Pf_Mt from './Add_Pf_Mt'

import {
    Container,
    Navbar,
    NavItem,


} from './styles.js'

import wolfer from './wolfer.png'

function App() {


    const [pagina,setPagina] = useState(0)

    const onAdd = (key) => {
        setPagina(key)
    }

    
    return (
        <div>
            <Navbar>
                <img src={wolfer} alt='wolferLogo'></img>
                <NavItem onClick={() => onAdd(0)} 
                         style={{backgroundColor: (pagina === 0) ? "white" : '#01939A', 
                         color: (pagina === 0) ? '#01939A' : "white"}}>
                         Cadastro Materia Prima</NavItem>
                <NavItem onClick={() => onAdd(1)} 
                         style={{backgroundColor: (pagina === 1) ? "white" : '#01939A',
                         color: (pagina === 1) ? '#01939A' : "white"}}>
                         Cadastro Produto Final</NavItem>
                <NavItem onClick={() => onAdd(2)} 
                         style={{backgroundColor: (pagina === 2) ? "white" : '#01939A',
                         color: (pagina === 2) ? '#01939A' : "white"}}>
                         Estoque Materia Prima</NavItem>
                <NavItem onClick={() => onAdd(3)} 
                         style={{backgroundColor: (pagina === 3) ? "white" : '#01939A',
                         color: (pagina === 3) ? '#01939A' : "white"}}>
                         Estoque Produto Final</NavItem>
                <NavItem onClick={() => onAdd(4)} 
                         style={{backgroundColor: (pagina === 4) ? "white" : '#01939A',
                         color: (pagina === 4) ? '#01939A' : "white"}}>
                         Requisição Produto Final</NavItem>
                <NavItem onClick={() => onAdd(5)} 
                         style={{backgroundColor: (pagina === 5) ? "white" : '#01939A' ,
                         color: (pagina === 5) ? '#01939A' : "white"}}>
                        Add Materia prima à PF</NavItem>    
            </Navbar>

            <Container>
                {(pagina === 0) ? <CadastroMP/> : null}
                {(pagina === 1) ? <CadastroPF/> : null}
                {(pagina === 2) ? <StockMP/> : null}
                {(pagina === 3) ? <StockPF/> : null}
                {(pagina === 4) ? <ReqPF/> : null}
                {(pagina === 5) ? <Add_Pf_Mt/> : null}
            </Container>
        </div>
    );
  }
  
  export default App;


