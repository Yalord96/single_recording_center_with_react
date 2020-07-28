import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import Header from "./component/Header/Header";
import Recall from "./component/Recall/Recall";
import Promo from "./component/Promo/Promo";
import Clinics from "./component/Clinics/Clinics";
import Article from "./component/Article/Article";
import Footer from "./component/Footer/Footer";
import Phone from "./component/Phone/Phone";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Recall />
    <Promo />
    <Clinics />
    <Article />
    <Footer />
    <Phone />
  </React.StrictMode>,
  document.getElementById('root')
);