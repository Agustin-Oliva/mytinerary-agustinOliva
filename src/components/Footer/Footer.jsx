import "./Footer.css"

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
                <a className="link-home" href="#">Volver al Inicio</a>
            </div>
            
        </footer>
        </>
    )
}

export default Footer