import {useEffect, useState} from 'react'
import axios from 'axios'
import './styles.css'


const ReqPF = () => {

    const [pfs, setPfs] = useState([])
    const [mps, setMps] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/pf/catalogue/all')
        .then(res => {
            setPfs(res.data)
        })
    },[])
    
    const getMps = (pf) => {
        axios.post('http://localhost:3000/pf/catalogue/mp',
        {pf:"1233"})
        .then(res => {
            setMps(res.data)
        }).catch(err=>console.log(err))
    }
    
    return (
        <div className='Tabela'>

            <h1>Requisições Produtos</h1>
            <div className="rowe">
            <div>
            {pfs.map((pf)=> {
                return(
                    <div onClick={()=>{getMps(pf.codigo)}} className='Data'>{pf.codigo}</div>    
                )

            })}
            </div>

            <div>
            {mps.map((mp)=> {
                return(
                    <div className='Data'>{mp.tipo}</div>    
                )

            })}
            </div>
            </div>
        </div>
    )
}

export default ReqPF