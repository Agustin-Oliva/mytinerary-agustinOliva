import "./Footer.css"
import {link as Anchor} from "react-router-dom"

function Footer(){
    return (
        <>
        <footer className="footer">
            <div>
            <a href="#"><img className="img-logo" src="../../public/instagram.png" alt="" /></a>
            <a href="#"><img className="img-logo" src="../../public/whatsapp.png" alt="" /></a>
            </div>
            <div>
                <p>Todos los derechos Reservados 2023 - Agustin Oliva</p>
            </div>
            <div>
                <Anchor className="link-home" to={'/'}>Volver al Inicio</Anchor>
            </div>
            
        </footer>
        </>
    )
}

export default Footer