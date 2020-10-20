import React from 'react'
import productList from "../productList.json"
import Card from "../Card/Card.jsx"
import {reducirDescripcion} from '../../Funciones/Funciones'


 const Galeria = () => 

 <div className="ed-grid s-grid-1 m-grid-2 l-grid-4 ">  

 {/* array para imprimir Card*/}
 {
productList.map(c => 
   <Card 
	title={c.title} 
	id={c.id } 
	rutaImg={c.rutaImg} 
	medida={c.medida} 
	cantidad={c.cantidad} 
	alt={c.alt} cat={c.cat} 
	ficha={c.ficha} 
	precio={c.precio}  
	descript={reducirDescripcion(c.descript)} 
	formato={c.formato}/>)
 }
 </div>




 export default Galeria