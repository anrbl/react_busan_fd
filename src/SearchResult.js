import { Link, useSearchParams } from "react-router-dom";


const SearchResult = ({ food }) => {
    const [search, setSearch] = useSearchParams();
    const r = search.get("q") || "";
    const searchResult = food.filter(it => it.ADDR1.includes(r) || it.RPRSNTV_MENU.includes(r) || it.TITLE.includes(r))

    return (
        <>
            <div className="SearchResult">
                <div className="inner">
                    <ul className="SearchList">
                        {searchResult.map((it) => {
                            return (
                                <li key={it.UC_SEQ}>
                                    <Link to={`/item/${it.TITLE}`}>
                                        <figure className="img_case">
                                            <img src={it.MAIN_IMG_THUMB} alt="" />
                                        </figure>
                                    </Link>
                                    <span>{it.GUGUN_NM}</span>
                                    <strong>{it.TITLE}</strong>
                                    <p>{it.RPRSNTV_MENU}</p>
                                    <button>
                                        <Link to={`/item/${it.TITLE}`}>
                                            {" "}
                                            자세히보기
                                        </Link>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SearchResult;