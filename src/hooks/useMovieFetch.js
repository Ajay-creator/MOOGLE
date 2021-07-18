import { useState, useEffect } from "react";
import API from "../API";
import { isPersistedState } from "../helpers";

export const useMovieFetch = (movieId) => {
    const [state, setstate] = useState({});
    const [error,setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = async () => {
            try{
                setLoading(true);
                setError(false);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                console.log(movie);
                console.log(credits);
                // Get Directors only
                const directors = credits.crew.filter(
                    member => member.job === "Director"
                );

                // Cast with only profile_path available
                const actors = credits.cast.filter(
                    actor => actor.profile_path !==null
                );

                setstate({
                    ...movie,
                    actors,
                    directors,
                })
                setLoading(false);
            }catch(error){
                setError(true);
            };
        };

        const sessionState = isPersistedState(movieId);
        if(sessionState){
            setstate(sessionState);
            setLoading(false);
            return;
        };

        fetchMovie();
    },[movieId]);

    // Write to session storage

    useEffect(() => {
        sessionStorage.setItem(movieId,JSON.stringify(state));
    },[movieId,state]);

    return { state, error, loading };
}
