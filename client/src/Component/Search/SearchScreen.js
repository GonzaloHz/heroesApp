import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeroCard from '../Heroes/HeroCard';
import queryString from "query-string"
import getHeroByName from '../../Selectors/getHeroByName';

function SearchScreen() {
    const Navigate = useNavigate();


    const [ boolean, setBoolean ] = useState(false)
    
    const location = useLocation()
    const { q="" } = queryString.parse(location.search)
    const allHeroes = getHeroByName(q); 


    const [ input, setInput ] = useState({
        superhero:""
    });

    const handleBoolean =()=>{
        setBoolean(false)
    }
    const handleSearch =(e)=>{
        e.preventDefault();
        Navigate(`?q=${ input.superhero }`)
        setBoolean(true)
    }
    const handleChange =(e)=>{
        const newState ={
            ...input,
            [e.target.name]:e.target.value    
        }
        setInput(newState)
    }


    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>
            <div className='row'>
                <div className={allHeroes.length!==0?'col-5': 'col-15'}>
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={e=>handleSearch(e)}>
                        <input
                        onChange={e=>handleChange(e)}
                        type="text"
                        name='superhero'
                        placeholder="Find Your Hero"
                        className="form-control"
                        autoComplete='off'
                        />
                        <button
                        type="submit"
                        className="btn btn-outline-primary"
                        >Search</button>
                    </form>
                </div>
                
                {boolean && allHeroes.length===0 && 
                <span className='alert alert-danger'>
                    Write a valid name 
                    <button className='btn btn-outline-dark' onClick={handleBoolean}>x</button>
                </span>}
                {allHeroes.length!==0 && <div className='col-7 animate__animated animate__fadeIn'>
                    <h4>Results</h4>
                    <div>
                    {allHeroes && allHeroes.map(H=>{
                        return(
                        <HeroCard
                        key={H.id}
                        id={H.id}
                        superhero={H.superhero} 
                        publisher={H.publisher}
                        alter_ego={H.alter_ego}
                        first_appearance={H.first_appearance}
                        characters={H.characters}
                        />)
                        })}
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default SearchScreen;