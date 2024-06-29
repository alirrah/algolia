import algoliasearch from 'algoliasearch/lite';
import {InstantSearch, SearchBox, Hits, Pagination, Configure, RefinementList, RangeInput} from 'react-instantsearch';
import Hit from "./components/hit/Hit.jsx";
import "./SearchPage.css";

function SearchPage() {
    const searchClient = algoliasearch('TBPK8EXV5W', '813919433f4e7a9c9f09b1d55890ab36');

    return (
        <InstantSearch searchClient={searchClient} indexName="books">
            <Configure hitsPerPage={20} />
            <SearchBox className='search-box'/>
            {/*<RefinementList attribute="Publisher" showMore searchable />*/}
            {/*<RangeInput attribute="Year" />*/}
            <Hits hitComponent={Hit} />
            <Pagination />
        </InstantSearch>
    );
}

export default SearchPage;