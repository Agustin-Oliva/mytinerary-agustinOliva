import './MenuExpand.css'


function MenuExpand(){

    return (
        <>
        <div className='nav-expand'>
            <ul className='expand-list'>
                <li className='expand-item'><a href="#">Home</a></li>
                <li className='expand-item'><a href="#">Cities</a></li>
                <li className='expand-item'><a className='expand-login' href="#">Login</a></li>
            </ul>
                <a href="#"><img className='expand-img' src="../../../public/user-200.png" alt="Login" /></a>
        </div>
        </>
    )
}
export default MenuExpand