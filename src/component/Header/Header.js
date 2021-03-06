import React from "react";
import "./Header.scss";
import Logo from "./logo.png";
import ArrowDown from "./arrow-down.png";
import Phone from "../Phone/Phone";


export default class Header extends React.Component{
    render() {
        return <header aria-label="шапка сайта" className="header-content">
                     <div className="header">
                         <div className="header__brand" aria-label="логотип сайта">
                             <figure className="brand">
                                 <img className="brand__img" src={Logo} alt="логотип Единый центр записи"/>
                                 <figcaption className="brand__name">Единый <br/> центр записи</figcaption>
                             </figure>
                             {/*<a className="brand__phone" aria-label="номер телефона" href="tel: 803005000"><img className="brand__phone_logo"*/}
                             {/*    src={Phone} /><span className="brand__phone_number">80300 5000</span></a>*/}
                             <Phone number={800300500} second={1}/>
                         </div>
                         <div className="menu" role="navigation" aria-label="меню навигации">
                             <nav>
                                 <ul className="menu__items" role="list">
                                     <li role="listitem" className="menu__items_listitem"><a
                                         className="menu__items_links menu__items_main"
                                         href="">Главная</a></li>
                                     <li role="listitem" className="menu__items_listitem menu__items_services"><a
                                         className="menu__items_links" href="">Услуги <img src={ArrowDown}
                                                                                           alt="стрелка вниз"/></a>
                                         <ul className="services__items">
                                             <li role="listitem"><a href="">МРТ</a></li>
                                             <li role="listitem"><a href="">КТ</a>
                                             </li>
                                             <li role="listitem"><a href="">Рентген</a>
                                             </li>
                                         </ul>
                                     </li>
                                     <li className="menu__items_listitem" role="listitem"><a className="menu__items_links" href="">Клиники
                                         и
                                         кабинеты</a></li>
                                     <li className="menu__items_listitem" role="listitem"><a className="menu__items_links" href="">О
                                         нас</a>
                                     </li>
                                     <li className="menu__items_listitem" role="listitem"><a className="menu__items_links"
                                                                                             href="">Статьи</a>
                                     </li>
                                     <li className="menu__items_listitem" role="listitem"><a className="menu__items_links"
                                                                                             href="">FAQ</a>
                                     </li>
                                     <li className="menu__items_listitem" role="listitem"><a className="menu__items_links"
                                                                                             href="">Контакты</a>
                                     </li>
                                 </ul>
                            </nav>
                        </div>
                   </div>
                </header>
    }

}