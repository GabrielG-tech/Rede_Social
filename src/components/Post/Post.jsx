import './Post.css'
import SaveIcon from '@mui/icons-material/TurnedInNotRounded';
import Like from '@mui/icons-material/ThumbUp';
import Reply from '@mui/icons-material/Reply';
import Comment from '@mui/icons-material/ModeComment';


export default function Post(props) {
  const nome = props.nome
  const imagemPerfil = props.imagemPerfil
  const postTime = props.postTime
  const descrição = props.descrição
  const postImg = props.postImg
  const likes = props.likes
  const sharings = props.sharings
  const comments = props.comments

  return (
    <div className="post">
      <div className="img_post_container">
        <div className="perfil_post">
          <img className="img_perfil_post" src={imagemPerfil} alt="Imagem de Perfil de post"></img>
          <div className="username_perfil_post">{nome}</div>
          <div className="post_time"> • {postTime}</div>
          <SaveIcon />
        </div>
        <p className="descrição_post">{descrição}</p>
        <img className="img_post" src={postImg} alt="Imagem de um post"></img>
      </div>

      <div className="feedback_post">
        <Like sx={{ fontSize: 16 }}/>
        <div className="likes">{likes}</div>
        <Reply sx={{ fontSize: 20 }}/>
        <div className="sharings">{sharings}</div>
        <Comment sx={{ fontSize: 16 }}/>
        <div className="comments">{comments}</div>
      </div>

      <div className="line_view"></div>

    </div>
  )
}
