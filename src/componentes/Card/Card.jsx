import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from "react-router-dom"
// import MainMenu from "../MainMenu/MainMenu.jsx"
import { addToCart, deleteFromCart } from '../../Redux/actionCreators';
import {connect} from 'react-redux'



const Card = ({id ,title, precio, formato, medida, cantidad, 
  rutaImg, alt, cat, ficha, descript, logo, addCourseToCart, cart, deleteCourseFromCart}) => 

<article className=" card animacion">
<div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h2 className="t5 s-mb-2 s-center">
        {title}
    </h2>
  <div className="img-container alinearImagen s-ratio-4-3 s-radius-tr s-radius-tl">
    <img src={rutaImg} alt={alt} />
  </div>

    <div className="center s-mb-4 s-main-center alineacionDeAltura">
      <div className="card__teacher s-cross-center ">
        <span className="small">{descript}</span>
      </div>
    </div>
    <div className=" s-mb-4 s-main-center">
      <a class="button dark-color tiny" href="#">Consultar</a>
      </div>
      <div className=" center card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <img src="./images/iconoPDF.png" className="tamañoiconopdf img-container s-mr-1"/>
        <a href={ficha} className="s-mr-1 s-mb-2 s-center colorficha" download>Ficha</a>
      </div> 
    <div className="center s-bg-grey s-pxy-2 s-radius-br s-radius-bl ">
    { 
        cart.find(a => a === id) 
        ?<button className="button--ghost-alert button--tiny" 
        onClick={() => deleteCourseFromCart(id)}>
          Remover del carrito
        </button>
        :
        <button className="button--ghost-alert button--tiny" href="#"
          onClick={() => addCourseToCart(id)}
        >
          {`$ ${precio} USD`}     
        </button>
      }
    </div>
  </div>
</article>


Card.propTypes = {
    tittle: PropTypes.string,
    precio: PropTypes.string,
    rutaImg: PropTypes.string,
    descript: PropTypes.string
}

Card.defaultProps = {
    tittle: "no se encuentra el titulo",
    precio: "--",
    rutaImg: "imagen no encontrada",
    descript: ""
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  addCourseToCart(id) {
    dispatch(addToCart(id))
  },
  deleteCourseFromCart(id) {
    dispatch(deleteFromCart(id))
  }

})
export default connect(mapStateToProps, mapDispatchToProps)(Card)