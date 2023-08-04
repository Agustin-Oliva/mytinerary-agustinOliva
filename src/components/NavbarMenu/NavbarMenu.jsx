import  './NavbarMenu.css'
import ButtonDropdown from '../ButtonDropdown/ButtonDropdown'
import MenuExpand from '../MenuExpand/MenuExpand'
import HeroComponent from '../HeroComponent/HeroComponent'
function NavbarMenu(){
     return(
        <>
        <header>
            <nav className='container-nav'>
                <div className='nav-logo'>
                    <a href="#">MyTinerary</a>
                </div>
           
                <ButtonDropdown />
                {/* <MenuExpand /> */}
            
            </nav>
            <HeroComponent />
        </header>
       
        </>
     )
}
export default NavbarMenu

