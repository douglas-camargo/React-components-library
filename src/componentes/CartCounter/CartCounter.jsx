import React from 'react'
import {connect} from 'react-redux'

const CartCounter = ({cartLength}) => 
    <li>
        <button className="link s-column s-cross-center button tiny ghost s-mr-4"> {`Carrito: ${cartLength.length}`} </button>
    </li>

const mapStateToProps = state => (
    {
        cartLength: state.cart
    }
)

const mapDispatchToProps = () =>{

}


export default connect(mapStateToProps, mapDispatchToProps)(CartCounter)