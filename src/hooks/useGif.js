import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


function useGif(tag) {
    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState(true)
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
    const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`

    //function for api call this time we are using axios
    //isme output jo hoga usme data object ko dekho bass destructuring ki hai aor kuch nahi
    async function fetchData(tag) {
        setLoading(true)
        const { data } = await axios.get(tag ? (tagUrl) : (randomUrl))
        const imageUrl = data.data.images.downsized_large.url
        console.log(imageUrl);
        setGif(imageUrl)
        setLoading(false)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return { gif, loading, fetchData }
}
export default useGif