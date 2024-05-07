import {Highlight} from "react-instantsearch";
import "./Hit.css";

const Hit = ({ hit }) => {
    return (
        <article>
            <img src={hit.Image} alt={hit.Title}/>
            <div>
                <h1>
                    <Highlight attribute="Title" hit={hit} />
                </h1>
                <p>{hit.Author}</p>
                <p>{hit.Year}</p>
                <p>{hit.Publisher}</p>
            </div>
        </article>
    );
}

export default Hit;
