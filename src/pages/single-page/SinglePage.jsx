import {useParams} from 'react-router-dom';
import algoliasearch from 'algoliasearch/lite';
import {InstantSearch, Hits, Configure} from 'react-instantsearch';
import Hit from "./components/hit/Hit.jsx";

const SinglePage = () => {
    let {id} = useParams();
    const searchClient = algoliasearch('Y72RW5ULWO', '058449f0fa41333d0369ceb384dfcc13');

    return (
        <InstantSearch searchClient={searchClient} indexName="books">
            <Configure filters={`objectID:${id}`}/>
            <Hits hitComponent={Hit} className='single-page'/>
        </InstantSearch>
    );
}

export default SinglePage;
