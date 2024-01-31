import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
function Random() {
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState(true)
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    //function for api call this time we are using axios
    //isme output jo hoga usme data object ko dekho bass destructuring ki hai aor kuch nahi
    async function fetchData() {
        setLoading(true)
        try {
            const { data } = await axios.get(url);
            const imageSource = data.data.images.downsized_large.url
            console.log(imageSource);
            setGif(imageSource)
        }
        catch (error) {
            console.log(error.message)
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchData();

    }, [])
    function clickHandler() {
        fetchData()
    }
    return (<div>
        <h1>Random Gif</h1>
        {loading ? (<Spinner />) : (<img src={gif} width='450' />)}

        <button onClick={clickHandler}>Generate</button>
    </div>)
}

export default Random;