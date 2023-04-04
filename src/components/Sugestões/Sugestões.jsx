import './Sugestões.css'

export default function Sugestões(props) {
  const imagemPerfil = props.imagemPerfil
  const nome = props.nome
  const bio = props.bio

  return (
      <div className="perfil_container">
        <img className='img' src={imagemPerfil}></img>
        <p className="nome">{nome}</p>
        <p className="bio">{bio}</p>
        <button className='btn_seguir'>Seguir</button>
      </div>
  )
}
