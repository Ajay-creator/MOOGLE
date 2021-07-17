import React from 'react';

// Components
import Thumb from '../Thumb';

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

// Image
import NoImage from '../../images/no_image.jpg';

// styles
import { Wrapper, Content, Text } from './MovieInfo.styles';


const MovieInfo = ({movie}) => (

        <Wrapper backdrop = {movie.backdrop_path}>
            <Content >
            <div className="glass"></div>
                <Thumb
                    image = {movie.poster_path ? 
                        `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : NoImage
                    }
                    clickable = {false}/>
                <Text>
                    <h1>{movie.title}</h1>
                    <h2>PLOT</h2>
                    <p>{movie.overview}</p>

                    <div className="directors-rating">
                        <div className="rating">
                            <h3>RATING</h3>
                            <div className="score">{movie.vote_average}</div>
                        </div>
                        <div className="director">
                            <h3>DIRECTOR{movie.directors > 1 ? 'S' : ''}</h3>
                            {movie.directors.map(director => (
                                <p key={director.credit_id}>{director.name}</p>
                            ))}
                        </div>
                    </div>
                </Text>
            </Content>
        </Wrapper>
)

export default MovieInfo;