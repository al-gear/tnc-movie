import React, { useContext } from 'react'
import MainContext from '../context/context';
import requests from "../api/requests";

const req = {
    trend: requests.fetchTrending,
    toprated: requests.fetchTopRated,
    action: requests.fetchActionMovies,
    horror: requests.fetchHorrorMovies,
    comedy: requests.fetchComedyMovies,
    romance: requests.fetchRomanceMovies,
}

const Aside = () => {
    const { setCategory, setActive, active } = useContext(MainContext);




    return (

        <aside className="aside">
            <h3>Categories</h3>
            <div className="toolbar" />
            <ul>
                <li className={active === "trend" ? "active" : ""} onClick={() => [setCategory(req.trend), setActive("trend")]}>Trend</li>
                <li className={active === "toprated" ? "active" : ""} onClick={() => [setCategory(req.toprated), setActive("toprated")]}>Top Rated</li>
                <li className={active === "action" ? "active" : ""} onClick={() => [setCategory(req.action), setActive("action")]}>Action</li>
                <li className={active === "horror" ? "active" : ""} onClick={() => [setCategory(req.horror), setActive("horror")]}>Horror</li>
                <li className={active === "comedy" ? "active" : ""} onClick={() => [setCategory(req.comedy), setActive("comedy")]}>Comedy</li>
                <li className={active === "romance" ? "active" : ""} onClick={() => [setCategory(req.romance), setActive("romance")]}>Romance</li>
            </ul>

        </aside>


    )
}

export default Aside
