import { heroes } from "../data/data";

export default function getHeroById(id){

    return heroes.find(H=>H.id === id)
}