import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

function Tag() {

    const [tag, setTag] = useState('')
    const { gif, loading, fetchData } = useGif(tag)

    function inputFieldChangeHandler(event) {
        event.target.name = event.target.value
        setTag(event.target.value)

    }

    function clickHandler() {
        fetchData(tag)
    }


    return (<div className="w-1/2 h-[700px] bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] overflow-hidden">
        <h1 className="text-3xl uppercase underline font-bold">Random {tag}  Gif</h1>
        {
            loading ? (<Spinner />) : (<img src={gif} width='450' />)
        }
        <input
            type="text"
            value={tag}
            name="tag"
            onChange={inputFieldChangeHandler}
            placeholder="Search For Custom Gifs Here" className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
        />
        <button
            onClick={clickHandler}
            className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold">
            generate
        </button>
    </div>
    )
}

export default Tag;