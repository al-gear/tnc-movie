import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainContext from "./context/context";
import axios from "./api/axios";
import { Home, Aside, Navbar } from './components/index';
import requests from './api/requests';

function App() {
    const [movies, setMovies] = useState([])
    const [category, setCategory] = useState(requests.fetchTrending);
    const [active, setActive] = useState("trend");
    const [isLoading, setIsLoading] = useState(false)
    const [search,setSearch]=useState("")
    
   useEffect(()=>{
        if(search.length > 0){
           setMovies(movies.filter((movie)=>(
               (movie.title || movie.name)?.toLocaleLowerCase().includes(search.toLocaleLowerCase())
           )))
        }else{
            fetchData(`${category}`)
        }
   },[search])
    

    async function fetchData(fetchUrl) {
        setIsLoading(true)
        const { data } = await axios.get(fetchUrl);
        setMovies(data.results)
        setIsLoading(false)
        
    }
    const data = {
        movies, setMovies, fetchData, category, setCategory,
        active, setActive, isLoading,search,setSearch
    }

    return (
        <Router>
            <MainContext.Provider value={data}>
                <div className="container">
                <Navbar />
                <div className="content">
                    <div className="left-content">
                        <Aside />
                    </div>
                    <div className="right-content">
                    <Switch>
                            <Route path="/" exact component={Home} /> 
                    </Switch>
                    </div>
                </div>
                </div>
            </MainContext.Provider>

        </Router>
    )
}

export default App
