import {Flex, Image, Typography} from "antd";
import {Highlight} from "react-instantsearch";

const Hit = ({hit}) => (
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

export default Hit;