import "./BtnCarouselResponsive.css"


function BtnCarouselResponsive(prop){
    
    const back = ()=>{
        prop.func()
    }

    const next = ()=>{
        prop.funcDos()
    }

    return (
        <div>
        <button className="btn-responsive btn-left" onClick={back}>{'<'}</button>
        <button className="btn-responsive btn-right" onClick={next}>{'>'}</button>
        </div>  
    )
}
export default BtnCarouselResponsive