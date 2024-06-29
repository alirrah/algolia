import {Highlight} from "react-instantsearch";
import "./Hit.css";
import {Card, Flex, Image, Typography} from "antd";
import {Link} from "react-router-dom";

const Hit = ({hit}) => {
    return (
        <Link to={hit.objectID}>
            <Card className='hit-card'>
                <Flex vertical='false' justify='space-between' gap='middle' className='hit-container'>
                    <Flex align='center' justify='center'>
                        <Image src={hit.Image} alt='' classname='hit-image'/>
                    </Flex>

                    <Flex vertical='false'>
                        <Typography.Title level={3} ellipsis>
                            <Highlight attribute="Title" hit={hit}/>
                        </Typography.Title>

                        <Typography.Text type="secondary">Author: {hit.Author}</Typography.Text>
                        <Typography.Text type="secondary">Publish Year: {hit.Year}</Typography.Text>
                        <Typography.Text type="secondary">Publisher: {hit.Publisher}</Typography.Text>
                    </Flex>
                </Flex>
            </Card>
        </Link>
    );
}

export default Hit;
