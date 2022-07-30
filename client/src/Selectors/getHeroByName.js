import { heroes } from '../data/data';

function getHeroByName( name="" ) {

    if(name===""){
        return [];
    }

    return heroes.filter(H=>H.superhero.toLowerCase().includes(name.toLowerCase()));
}

export default getHeroByName;