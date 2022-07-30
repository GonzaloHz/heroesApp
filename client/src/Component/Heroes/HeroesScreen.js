import { useMemo } from "react"
import { useParams, useNavigate } from "react-router-dom"
import getHeroById from "../../Selectors/getHeroById"

export default function HeroesScreen(){
    const idHero = useParams()
    const identifier = idHero.heroeid.slice(0,2)

    const Hero = useMemo(()=>getHeroById(idHero.heroeid), [idHero.heroeid])
    //const Hero = getHeroById(idHero.heroeid)

    const Navigate = useNavigate();
    const handleReturn=()=>{
        if(identifier==="dc"){
            Navigate("/dc")
        }
        else{
        Navigate("/")
        }
    }
     
    if(!Hero){
        return <Navigate to="/"/>
    }
    return(<div className="row mt-5">
        <div className="col-4 animate__animated animate__fadeInLeft">
            <img src={require(`../../../public/assets/heroes/${Hero.id}.jpg`)} className='img-thumbnail' alt={Hero.superhero}/>
        </div>    
        <div className="col-8 animate__animated animate__fadeInRight">
            <h3 className="">{Hero.superhero}</h3>
            <ul className="list-group">
                <li className="list-group-item">Alter Ego: {Hero.alter_ego}</li>
                <li className="list-group-item">Publisher: {Hero.publisher}</li>
                <li className="list-group-item">First Appearance: {Hero.first_appearance}</li>
            </ul>
            <h5 style={{marginTop:"5%"}}>Characters</h5>
            <p>{Hero.characters}</p>
        <button type="button" className="btn btn-primary" onClick={handleReturn}>Return</button>
        </div>    
    </div>)
}