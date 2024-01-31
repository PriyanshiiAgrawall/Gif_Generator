import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

function Tag() {
    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState(true)
    const [tag, setTag] = useState('cat')
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`

    async function fetchData() {
        setLoading(true)
        const { data } = await axios.get(url)
        const imageUrl = data.data.images.downsized_large.url
        console.log(imageUrl);
        setGif(imageUrl)
        setLoading(false)
    }
    useEffect(() => {
        fetchData()
    }, [])
    function inputFieldChangeHandler(event) {
        event.target.name = event.target.value
        setTag(event.target.value)

    }
    function clickHandler() {
        fetchData()
    }
    return (<div>
        <h1>Random {tag}  Gif</h1>
        {
            loading ? (<Spinner />) : (<img src={gif} width='450' />)
        }
        <input type="text" value={tag} name="tag" onChange={inputFieldChangeHandler} />
        <button onClick={clickHandler}>generatee</button>
    </div>)
}

export default Tag;