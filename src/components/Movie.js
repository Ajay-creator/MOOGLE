import React from 'react';
import { useParams } from 'react-router-dom';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// components
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';


// hook
import { useMovieFetch} from '../hooks/useMovieFetch';

// Image 
import NoImage from "../images/no_image.jpg";


const Movie = () => {
    const {movieId} = useParams();
    const {state : movie, error, loading } = useMovieFetch(movieId);
    if(loading) return <Spinner/>
    if(error) return <div>Oops! Something went wrong.</div>

    return (
        <>  
            <BreadCrumb movieTitle = {movie.original_title}/>
            <MovieInfo movie={movie} />
            <MovieInfoBar 
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />
            <Grid header='Cast'>
            {movie.actors.map(actor => {
                return (
                    <Actor
                    key = {actor.credit_id}
                    name = {actor.name}
                    character = {actor.character}
                    imageUrl={
                        actor.profile_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                        : NoImage
                    }
                    />);
            })}
            </Grid>
           
        </>
    );
} 

export default Movie;
