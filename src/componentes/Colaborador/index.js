import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo, corDeFundo}) =>{
    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h4>{cargo}</h4>
            </div>
        </div>
    )
}

export default Colaborador