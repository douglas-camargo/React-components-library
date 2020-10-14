import React from 'react';
import './styles/styles.scss';
import Card from "./componentes/Card/Card.jsx"
// import Galeria from "./componentes/Galeria/Galeria.jsx"
import productList from "./componentes/productList.json"


const App = () =>

<>


<div className="ed-grid m-grid-4">  

{/* array para imprimir Card*/}
{
productList.map(c => <Card title={c.title} id={c.id } rutaImg={c.rutaImg} medida={c.medida} cantidad={c.cantidad} alt={c.alt} cat={c.cat} ficha={process.env.PUBLIC_URL + c.ficha} precio={c.precio}  descript={c.descript} formato={c.formato}/>)
}
</div>


</>


export default App;
