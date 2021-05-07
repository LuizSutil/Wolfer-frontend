import {useState} from 'react'
import CadastroMP from './CadastroMP'
import CadastroPF from './CadastroPF'
import StockMP from './StockMP'
import StockPF from './StockPF'
import ReqPF from './ReqPF'
import './styles.css'

function App() {


    const [pagina,setPagina] = useState(1)

    const onAdd = (key) => {
        setPagina(key)
    }

    
    return (
        <div>
            <div className='navbar'>
                <div onClick={() => onAdd(0)} style={{backgroundColor: (pagina === 0) ? "grey" : 'rgb(18, 19, 19)'}} className='navItem'>Cadastro Materia Prima</div>
                <div onClick={() => onAdd(1)} style={{backgroundColor: (pagina === 1) ? "grey" : 'rgb(18, 19, 19)'}} className='navItem'>Cadastro Produto Final</div>
                <div onClick={() => onAdd(2)} style={{backgroundColor: (pagina === 2) ? "grey" : 'rgb(18, 19, 19)'}} className='navItem'>Estoque Materia Prima</div>
                <div onClick={() => onAdd(3)} style={{backgroundColor: (pagina === 3) ? "grey" : 'rgb(18, 19, 19)'}} className='navItem'>Estoque Produto Final</div>
                <div onClick={() => onAdd(4)} style={{backgroundColor: (pagina === 4) ? "grey" : 'rgb(18, 19, 19)'}}className='navItem'>Requisição Produto Final</div>
                <div onClick={() => onAdd(5)} style={{backgroundColor: (pagina === 5) ? "grey" : 'rgb(18, 19, 19)'}}className='navItem'>Adicionar Materia prima à PF</div>    
            </div>

            <div className='container'>
                {(pagina === 0) ? <CadastroMP/> : null}
                {(pagina === 1) ? <CadastroPF/> : null}
                {(pagina === 2) ? <StockMP/> : null}
                {(pagina === 3) ? <StockPF/> : null}
                {(pagina === 4) ? <ReqPF/> : null}
                {(pagina === 5) ? <CadastroMP/> : null}
            </div>
        </div>
    );
  }
  
  export default App;


