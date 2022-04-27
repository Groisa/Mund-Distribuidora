import "./index.css"
import ApenasLetra from "../../imagens/apenasLetra.png"
function Footer () {
    return (
      <>
        <footer className='footer text-center text-black py-2 mt-4'>
          <a  className="Href" href="https://www.instagram.com/jovem._dev/" target="_blank">
            <i class="bi bi-instagram"></i>
          </a>
          <img src={ApenasLetra} width='200px'/>
          <a  className="Href" href="https://www.linkedin.com/in/gabriel-eduardo-rosa-97500622a/" target="_blank">
            <i class="bi bi-linkedin"></i>
          </a>
        </footer>
      </>
    )
  }
export default Footer