import './MenuExpand.css'
import { Link as Anchor } from 'react-router-dom'

function MenuExpand(){

    return (
        <>
        <div className='nav-expand'>
            <ul className='expand-list'>
                <Anchor to={'/'} className='expand-item'>Home</Anchor>
                <Anchor to={'/Cities'} className='expand-item'>Cities</Anchor>
                <Anchor to={'#'} className='expand-item expand-login'>Login</Anchor>
            </ul>
                <a href="#"><img className='expand-img' src="../../../public/user-200.png" alt="Login" /></a>
        </div>
        </>
    )
}
export default MenuExpand