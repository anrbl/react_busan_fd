import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ food }) => {
    const navigate = useNavigate();

    const [input, setInput] = useState("키워드, 지역구를 입력해 알맞는 가게를 찾아보세요.");
    const [Search, setSearch] = useState("");

    const serchHandle = (e) => {
        e.preventDefault();
        setSearch(input);
        navigate(`/search/?q=${input}`)
    }
    const inputHandle = (e) => {
        const { value } = e.target;
        setInput(value);
    }

    return (
        <form onSubmit={serchHandle}>
            <input type="text" onChange={inputHandle} placeholder={input} />
            <button>
                검색하기
            </button>
        </form>
    )
}

export default Search;