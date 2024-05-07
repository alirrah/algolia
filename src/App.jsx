import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Pagination, Configure } from 'react-instantsearch';
import Hit from "./Hit.jsx";
import "./App.css";

const searchClient = algoliasearch('TBPK8EXV5W', '813919433f4e7a9c9f09b1d55890ab36');

function App() {
    return (
        <InstantSearch searchClient={searchClient} indexName="books">
            <Configure hitsPerPage={20} />
            <SearchBox />
            <Hits hitComponent={Hit} />
            <Pagination />
        </InstantSearch>
    );
}

export default App;