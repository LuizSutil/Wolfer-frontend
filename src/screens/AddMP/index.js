import './styles.css'

const AddMP = () => {
    return (
        <div>
            <h1>Wolfer</h1>
            <form className='form'> 
                <h2 style={{color:'grey'}}>Cadastro MP</h2>
                <label>Codigo</label>
                <input className='input' ></input>

                <label>NCM</label>
                <input className='input'></input>

                <label>CPOF</label>
                <input className='input'    ></input>

                <label>SCT</label>
                <input className='input'></input>

                <label>Descricao</label>
                <input className='input'></input>

                <label>Unidade de medida</label>
                <input className='input'></input>

                <label>Tipo</label>
                <input className='input'></input>

                <label>Valor de compra</label>
                <input className='input'></input>
                
                <label>Valor de venda</label>
                <input className='input'></input>

                <label>Quantidade</label>
                <input className='input'></input>

                <button className='button' >Cadastrar</button>

            </form>
        </div>
    );
  }
  
  export default AddMP;