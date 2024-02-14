
import notfound from "../../assets/404.webp"
import { Link } from "react-router-dom"
import "./style.css"

function NotFound(){
  return(
    <div className="container-notfound">
      <div>
        <img src={notfound} alt="Ilustração do erro 404, representando que a página não foi encontrada" />
        <p>Desculpe pelo transtorno, mas esta página não foi encontrada. <br/>Tente novamente ou navegue para outra seção.</p>
        <Link to="/"><button>Voltar</button></Link>
      </div>
    </div>
  )
}

export default NotFound