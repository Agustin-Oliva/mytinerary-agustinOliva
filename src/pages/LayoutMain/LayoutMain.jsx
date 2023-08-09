import ButtonDropdown from '../../components/ButtonDropdown/ButtonDropdown'
import MenuExpand from '../../components/MenuExpand/MenuExpand'
import HeroComponent from '../../components/HeroComponent/HeroComponent'
import Footer from '../../components/Footer/Footer'
import './LayoutMain.css'
import { Outlet } from 'react-router-dom'
import { Link as Anchor } from 'react-router-dom'



const LayoutMain = () =>{ 
    return (
        <>
         <header className='header'>
            <nav className='container-nav'>
                <div className='nav-logo'>
                <Anchor to={'/'}>MyTinerary</Anchor>
                </div>
                <MenuExpand/>
            </nav>
        <section className='Hero-section'>
            <HeroComponent/>
        </section>
        </header>

        <main className='main'>
          <Outlet/>
        </main>

        <Footer/>

        </>
    )
}

export default LayoutMain