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
                // Get Directors only
                const directors = credits.crew.filter(
                    member => member.job === "Director"
                );

                setstate({
                    ...movie,
                    actors:credits.cast,
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
