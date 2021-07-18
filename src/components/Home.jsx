import React, { useContext, useEffect } from 'react'
import MainContext from '../context/context';
import Movies from "./Movies"
import ClipLoader from "react-spinners/ClipLoader";


const Home = () => {

    const { movies, fetchData, category, isLoading } = useContext(MainContext)
    const Url = `${category}`;

    useEffect(() => {
        fetchData(Url)
    }, [category])
    
    return (
        <div className="home-container">
            {!isLoading ? (
                movies?.map((item) => (
                    <div className="home-movies" key={item.id}>
                        <Movies item={item} />
                    </div>
                ))
            ) : (
                <div className="home-loader">
                    <ClipLoader color={"#164"} size={89} />
                </div>

            )}
        </div>
    )
}

export default Home
