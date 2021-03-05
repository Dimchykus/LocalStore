import {Button, Card, Icon, Image} from "semantic-ui-react";

const RemoveItem = props => {
    props.Add(props.id)
    props.removeFromCard(props.id)
}
//() => props.removeFromCard(props.id)
const Basket = (props) => {

    const {title, price} = props;

    return (
        <Card>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='usd'/>
                    {price}
                </a>
            </Card.Content>
            <Button color="red" onClick={() => RemoveItem(props)}>
                Cancle
            </Button>
        </Card>
    )
}
export default Basket;