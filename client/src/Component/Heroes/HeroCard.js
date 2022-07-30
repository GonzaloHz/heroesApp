import React from 'react';
import { Link } from 'react-router-dom';

function HeroCard({
    id,
    superhero, 
    publisher, 
    alter_ego,
    first_appearance,
    characters
}) {
    return (
        <div className='card ms-3' style={{maxWidth: 540}}>
            <div className='row no-gutters'>
                <div className='col-md-4'>
                    <img src={require(`../../../public/assets/heroes/${id}.jpg`)} className='img-fluid rounded-start' alt={superhero}/>
                </div>
                <div className='col-md-8'>
                    <h5 className="card-title" style={{paddingLeft: "2vw", paddingTop:"auto"}}>{superhero}</h5>
                    {alter_ego !== characters && <p className="card-subtitle mb-2 text-muted" style={{paddingLeft: "2vw"}}>{alter_ego}</p>}
                    <p className="card-text" style={{paddingLeft: "2vw"}}>{characters}</p>
                    <div className="card-body" style={{paddingLeft: "2vw"}}>
                    {publisher} - {first_appearance}
                    </div>
                    <Link className='nav-link' style={{paddingLeft: "2vw"}} to={`/heroe/${id}`}>
                        Más...
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeroCard;