import { Link } from "react-router-dom"

const AllList = ({ food }) => {
    console.log(food)
    return (
        <section className="AllList sec">
            <div className="inner">
                <ul className="list">
                    {
                        food.map(it => {
                            return (
                                <li key={it.UC_SEQ}>
                                    <Link to={`item/${it.MAIN_TITLE}`}>
                                        <strong>{it.MAIN_TITLE}</strong>
                                        <div className="img_box">
                                            <img src={it.MAIN_IMG_NORMAL} alt={it.MAIN_TITLE} />
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </section>
    )
}

export default AllList;