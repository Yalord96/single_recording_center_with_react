import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import Header from "./component/Header/Header";
import Recall from "./component/Recall/Recall";
import Promo from "./component/Promo/Promo";
import Clinics from "./component/Clinics/Clinics";
import Article from "./component/Article/Article";
import Footer from "./component/Footer/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Recall />
    <Promo />
    <Clinics />
    <Article />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);