import React, { useMemo } from 'react';
import getHeroByPublisher from '../../Selectors/getHeroByPublisher';
import HeroCard from './HeroCard';

function HeroeList({publisher}) {

    const heroes = useMemo(()=>getHeroByPublisher(publisher), [publisher])
    // const heroes =  getHeroByPublisher(publisher)

    return (
        <div className='card-columns animate__animated animate__fadeIn'>
            {heroes && heroes.map(H=>{
                return(
                <HeroCard 
                key={H.id} 
                superhero={H.superhero} 
                publisher={H.publisher} 
                first_appearance={H.first_appearance}
                characters={H.characters}
                alter_ego={H.alter_ego}
                id={H.id}
                />)
            })}
        </div>
    );
}

export default HeroeList;