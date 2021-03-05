import {Button, Card, Icon, Image} from "semantic-ui-react";

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
            <Button color="red" onClick={() => props.removeFromCard(props.id)}>
                Cancle
            </Button>
        </Card>
    )
}
export default Basket;