import { Link } from "react-router-dom";

const Header = ({ gu }) => {
    return (
        <header className="Header">
            <h1>
                <Link to='/'>부산의 <b>맛집</b>을 찾아서</Link>
            </h1>
            <nav className="Gnb">
                <ul>
                    {
                        gu.map(it => {
                            return (
                                <li key={it}>
                                    <Link to={`/${it}`} className="Nav_list">{it}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;