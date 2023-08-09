import ButtonDropdown from '../../components/ButtonDropdown/ButtonDropdown'
import MenuExpand from '../../components/MenuExpand/MenuExpand'
import HeroComponent from '../../components/HeroComponent/HeroComponent'
import Footer from '../../components/Footer/Footer'
import Carousel from '../../components/Carousel/Carousel'
import './LayoutMain.css'


const LayoutMain = (props) =>{ 
    return (
        <>
         <header className='header'>
            <nav className='container-nav'>
                <div className='nav-logo'>
                    <a href="#">MyTinerary</a>
                </div>
                <MenuExpand/>
                <ButtonDropdown/>
            </nav>
        <section className='Hero-section'>
            <HeroComponent/>
        </section>
        </header>

        <main className='main'>
            <Carousel/>
        </main>

        <Footer/>

        </>
    )
}

export default LayoutMain