import "./header.css"
import { Link } from "react-router-dom"
import carrinho from "../../assets/shopping_cart.svg"
import cat from "../../assets/cat.svg"

function Header(){
  return(
     <>
     <div className="header">
      <div>
        <Link to="/">
          <img src={cat} alt="Ilustração vetorizada de um rosto de gato" />
        </Link>
        
        <Link to="/carrinho">
          <img className="carrinho-icon" src={carrinho} alt="Carrinho" />
        </Link>
        </div>
     </div>
     </>
  )
}

export default Header