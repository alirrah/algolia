import { useParams } from 'react-router-dom';
import algoliasearch from 'algoliasearch/lite';
import {InstantSearch, SearchBox, Hits, Pagination, Configure, Highlight} from 'react-instantsearch';
import {Flex, Image, Typography} from "antd";

const SinglePage = () => {
    let {id} = useParams();
    const searchClient = algoliasearch('TBPK8EXV5W', '813919433f4e7a9c9f09b1d55890ab36');

    return (
        <InstantSearch searchClient={searchClient} indexName="books">
            <Configure filters={`objectID:${id}`} />
            <Hits hitComponent={HitComponent} className='single-page'/>
        </InstantSearch>
    );
}

export default SinglePage;

const HitComponent = ({hit}) => (
    <Flex justify='center' gap='middle' wrap='wrap' className='hit-container'>
        <Flex align='center' justify='center'>
            <Image src={hit.Image} alt='' classname='hit-image'/>
        </Flex>

        <Flex vertical='false' className='text-box'>
            <Typography.Title level={3}>
                <Highlight attribute="Title" hit={hit}/>
            </Typography.Title>

            <Typography.Text type="secondary">Author: {hit.Author}</Typography.Text>
            <Typography.Text type="secondary">Publish Year: {hit.Year}</Typography.Text>
            <Typography.Text type="secondary">Publisher: {hit.Publisher}</Typography.Text>
        </Flex>
    </Flex>
);