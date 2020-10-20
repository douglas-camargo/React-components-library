import React from 'react';
import './styles/styles.scss';
// import Card from "./componentes/Card/Card.jsx"
import Galeria from "./componentes/Galeria/Galeria.jsx"
import MainMenu from './componentes/MainMenu/MainMenu';
import { Provider } from 'react-redux';
import store from './Redux/store'

const App = () =>

<>
<Provider store={store}>
 <MainMenu />
 <Galeria /> 
</Provider>
</>


export default App;