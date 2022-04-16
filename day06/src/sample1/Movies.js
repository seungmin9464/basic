import { useState } from 'react';
import data from '../assets/api/movie.json'
import './style.css'

import MovieList from "./MovieList";
import MovieView from "./MovieView";
import Modal from './Modal';

const Movies = () => {

    const [movie, setMovie] = useState(data[0])
    const [isOpen, setIsOpen] = useState(false)

    const onOver = (id) => {
        setMovie(data.find(item => item.rank === id))
    }

    const onOpen = () => {
        setIsOpen( true )
    }

    return (
        <div className='gallery'>
            <MovieView movie={movie} onOpen={onOpen}/>
            <MovieList data={data} onOver={onOver}/>
            {
                isOpen && <Modal movie={movie} setIsOpen={setIsOpen}/>
            }
        </div>
    );
};

export default Movies;