import "./Footer.css"
import {Link as Anchor} from "react-router-dom"

function Footer(){
    return (
        <>
        <footer className="footer">
            <div>
            <a href="#"><img className="img-logo" src="../../public/instagram.png" alt="" /></a>
            <a href="#"><img className="img-logo" src="../../public/whatsapp.png" alt="" /></a>
            </div>
            <div>
                <p>All rights reserved - Agustin Oliva</p>
            </div>
            <div>
                <Anchor className="link-home" to={'/'}>Back to Home</Anchor>
            </div>
            
        </footer>
        </>
    )
}

export default Footer