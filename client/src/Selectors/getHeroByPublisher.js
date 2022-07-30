import { heroes } from "../data/data";

export default function getHeroByPublisher(publisher){
    const validPublisher = [ "DC Comics", "Marvel Comics"]

    if(!validPublisher.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`)
    }

    return heroes.filter(H=>H.publisher=== publisher)
}