import algoliasearch from 'algoliasearch/lite';
import {InstantSearch, SearchBox, Hits, Pagination, Configure, RefinementList, RangeInput} from 'react-instantsearch';
import Hit from "./components/hit/Hit.jsx";
import {Collapse, Flex, Typography} from "antd";

function SearchPage() {
    const searchClient = algoliasearch('TBPK8EXV5W', '813919433f4e7a9c9f09b1d55890ab36');

    return (
        <InstantSearch searchClient={searchClient} indexName="books">
            <Configure hitsPerPage={20}/>

            <SearchBox className='search-box'/>

            <div className='filter-box'>
                <Collapse items={[
                    {
                        key: 1,
                        label: 'filter',
                        children: (
                            <Flex gap='middle' wrap='wrap'>
                                <Flex vertical='false' gap='small' className='same-size'>
                                    <Typography.Text>Author</Typography.Text>

                                    <RefinementList attribute="Author" showMore/>
                                </Flex>

                                <Flex vertical='false' gap='small' className='same-size'>
                                    <Typography.Text>Year</Typography.Text>

                                    <RangeInput attribute="Year"/>
                                </Flex>
                            </Flex>
                        )
                    }
                ]}/>
            </div>

            <Hits hitComponent={Hit}/>

            <Pagination/>
        </InstantSearch>
    );
}

export default SearchPage;