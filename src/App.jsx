import './App.css'
import Header from './components/Header/Header'
import Post from './components/Post/Post'
import Sugestões from './components/Sugestões/Sugestões'

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Post
          nome="José dos Campos"
          imagemPerfil="/images/perfil3.jpg"
          postTime="2d"
          descrição="Bom dia! Que dia lindo!"
          postImg="/images/post1.jpg"
          likes="35"
          sharings="25"
          comments="3"
        />
        <div className='sugestões_container_com_texto'>
          <p>Sugestões para você</p>
          <div className="sugestões_container">
          
            <Sugestões
              imagemPerfil="/images/perfil2.jpg"
              nome="Heitor Bezerra"
              bio="Seguindo você"
            />
            <Sugestões
              imagemPerfil="/images/perfil3.jpg"
              nome="Joaquim Perreira"
              bio="Segue Maria das Couves"
            />
            <Sugestões
              imagemPerfil="/images/perfil4.jpg"
              nome="Manuel Gomes"
              bio="Seguindo você"
            />
            <Sugestões
              imagemPerfil="/images/perfil5.jpg"
              nome="Luiz Guistavo"
              bio="2 amigos em comum"
            />
            <Sugestões
              imagemPerfil="/images/perfil6.jpg"
              nome="Manuela Silveira"
              bio="Segue Pedro Sampaio"
            />
          </div>
        </div>
        <Post
          nome="Pedro Gustavo"
          imagemPerfil="/images/perfil4.jpg"
          postTime="4d"
          descrição="Que dia horrível!"
          postImg="/images/post2.jpeg"
          likes="2"
          sharings="0"
          comments="20"
        />
        <Post
          nome="Samantha Rocha"
          imagemPerfil="/images/perfil6.jpg"
          postTime="6d"
          descrição="Vai um café?"
          postImg="/images/post3.jpg"
          likes="40"
          sharings="32"
          comments="54"
        />
      </main>
    </>
  )
}
