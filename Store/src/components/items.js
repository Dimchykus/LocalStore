import {Button, Card, Icon, Image, Butt} from 'semantic-ui-react'

const Items = (props) => {

    const {title, price, addedCount, count, image, description} = props;

    return (


        <Card>
            <Image src={image} wrapped ui={false}/>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Description>
                    {description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='usd'/>
                    {price}
                </a>
            </Card.Content>
            <Button onClick={() => props.AddToCard(props)}>
                Buy
            </Button>
        </Card>


    )
}

export default Items;
