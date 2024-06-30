import {useParams} from 'react-router-dom';
import algoliasearch from 'algoliasearch/lite';
import {InstantSearch, Hits, Configure} from 'react-instantsearch';
import Hit from "./components/hit/Hit.jsx";

const SinglePage = () => {
    let {id} = useParams();
    const searchClient = algoliasearch('TBPK8EXV5W', '813919433f4e7a9c9f09b1d55890ab36');

    return (
        <InstantSearch searchClient={searchClient} indexName="books">
            <Configure filters={`objectID:${id}`}/>
            <Hits hitComponent={Hit} className='single-page'/>
        </InstantSearch>
    );
}

export default SinglePage;
