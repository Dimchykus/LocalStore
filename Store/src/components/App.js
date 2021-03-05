import React from "react"
import Items from "./items"
import Basket from "./basket"
import {connect} from "react-redux";
import {Add, Minus, setItems} from "./../actions/item"
import {AddToCard, removeFromCart} from "./../actions/basket"
import axios from "axios";
import {Container, Card} from "semantic-ui-react"

class App extends React.Component {

    componentWillMount() {
        const {setItems} = this.props;
        axios.get('/products.json').then(({data}) => {
            setItems(data);
        })
    }

    render() {
        const {products, cardProducts, totalPrice, addedItems} = this.props;
        const items = products.map(product => <Items {...product}  Minus={this.props.Minus}
                                                     AddToCard={this.props.AddToCard}/>);
        const cardItems = cardProducts.map(product => <Basket {...product}
                                                              removeFromCard={this.props.removeFromCard} Add={this.props.Add}/>);
        return (
            <Container>

               <div className="totalprice"></div>
                <Card.Group>
                    {items}
                </Card.Group>
                <h1>BASKET({addedItems}) , Total price: {totalPrice}</h1>
                <Card.Group>
                    {cardItems}
                </Card.Group>

            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.MyReducer.items,
        cardProducts: state.CardReducer.items,
        totalPrice: state.CardReducer.items.reduce((total, product) => total + product.price, 0),
        addedItems: state.CardReducer.items.length
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setItems: products => dispatch(setItems(products)),
        Add: products => dispatch(Add(products)),
        Minus: products => dispatch(Minus(products)),
        AddToCard: products => dispatch(AddToCard(products)),
        removeFromCard: products => dispatch(removeFromCart(products)),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
