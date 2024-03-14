import axios from "axios";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import SearchResult from "./SearchResult";
import { Link } from "react-router-dom";
export default function Searchbar() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState([])
    const submit = async () => {

    };

    const handleOnChange = (e) => {
        setInput(e.target.value);

    };

    const fetchData = async (e) => {
        try {
            const res = await axios.get(`http://localhost:8000/api/v1/videos?title=${e}`)
            const video = res.data.data
            const titles = video.map(e => ({ title: e.title, id: e._id }))
            console.log(titles)
            setResult(titles)
        } catch (error) {
            console.log(error.response)

        }
    }

    useEffect(() => {
        if (input !== "") {
            fetchData(input)
        }
    }, [input])
    return (
        <>
            <div className='flex flex-row text-white p-2'>
                <input
                    id='searchBar'
                    value={input}
                    onChange={handleOnChange}
                    type="text"
                    placeholder='Search'
                    className='h-10 w-72 p-2 rounded-l-xl focus:outline-none font-semibold bg-stone-700'
                />
                <Link to={`/search/${input}`}>
                    <IoSearchOutline
                        className="h-10 w-10 p-1.5 bg-stone-800 rounded-r-xl border-1 hover:bg-stone-500"
                       
                    />
                </Link>
            </div>
            <SearchResult result={result} />
        </>
    );
}
