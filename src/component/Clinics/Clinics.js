import React from "react";
import "./Clinics.scss";
import Carepoint from "./carepoint.png";


export default class Clinics extends React.Component{
    render() {
        return <section className="clinic-tab" id="tabs">
            <nav>
                <ul className="main__nav">
                    <li className="main__nav_li"><a className="main__nav_link" href="#tabs-1" id="link-target">МРТ</a>
                    </li>
                    <li className="main__nav_li"><a className="main__nav_link" href="#tabs-2">КТ</a></li>
                    <li className="main__nav_li"><a className="main__nav_link" href="#tabs-3">РЕНТГЕН
                        <span className="rentgen-full">ИССЛЕДОВАНИЯ</span></a></li>
                </ul>
            </nav>
            <div className="clinic">
                <div id="tabs-1">
                    <div className="clinic__list">
                        <section className="clinic__card border-1" itemType="http://schema.org/Organization">
                            <div className="clinic__card_head" role="banner">
                                <img className="clinic__card_logo" src={Carepoint} alt="CarePoint"
                                     aria-label="логотип клиники" />
                                    <div className="clinic__card_title">
                                        <h5 itemProp="name" className="clinic__card_name"
                                            aria-label="Название клиники">Название
                                            клиники</h5>
                                        <p itemProp="streetAddress" className="clinic__card_adrress"
                                           aria-labelledby="address">
                                            Ленинский
                                            проспект,
                                            д. 160, Ленинский проспект</p>
                                    </div>
                            </div>
                            <p itemProp="description" className="clinic__card_info" role="contentinfo">Что такое текст
                                «рыба» знают
                                все,
                                кто
                                работает с версткой журналов,
                                дизайном и разработкой сайтов. Этот текст служит для демонстрации того,
                                как контент впоследствии будет выглядеть на готовой странице, чтобы
                                увидеть, правильно ли размещаются абзацы, отступы, хорошо ли...</p>
                                <div className="clinic__card_footer">
                                <span className="clinic__card_number" aria-label="позвонить">Наш номер: <a
                                    itemProp="telephone" href="tel: +380560996665">+3856 0 99 66 65</a></span>
                                    <button id="random_color" className="clinic__card_button">Заказать звонок</button>
                                </div>
                        </section>
                    </div>
                    <div className="clinic__list">
                        <section className="clinic__card border-2" itemType="http://schema.org/Organization">
                            <div className="clinic__card_head" role="banner">
                                <img className="clinic__card_logo" src={Carepoint} alt="CarePoint"
                                     aria-label="логотип клиники" />
                                    <div className="clinic__card_title">
                                        <h5 itemProp="name" className="clinic__card_name"
                                            aria-label="Название клиники">Название
                                            клиники</h5>
                                        <p itemProp="streetAddress" className="clinic__card_adrress"
                                           aria-labelledby="address">
                                            Ленинский
                                            проспект,
                                            д. 160, Ленинский проспект</p>
                                    </div>
                            </div>
                            <p itemProp="description" className="clinic__card_info" role="contentinfo">Что такое текст
                                «рыба» знают
                                все,
                                кто
                                работает с версткой журналов,
                                дизайном и разработкой сайтов. Этот текст служит для демонстрации того,
                                как контент впоследствии будет выглядеть на готовой странице, чтобы
                                увидеть, правильно ли размещаются абзацы, отступы, хорошо ли...</p>
                                <div className="clinic__card_footer">
                                <span className="clinic__card_number" aria-label="позвонить">Наш номер: <a
                                    itemProp="telephone" href="tel: +380560996665">+3856 0 99 66 65</a></span>
                                    <button id="random_color1" className="clinic__card_button">Заказать звонок</button>
                                </div>
                        </section>
                    </div>
                    <div className="clinic__list">
                        <section className="clinic__card border-3" itemType="http://schema.org/Organization">
                            <div className="clinic__card_head" role="banner">
                                <img className="clinic__card_logo" src={Carepoint} alt="CarePoint"
                                     aria-label="логотип клиники" />
                                    <div className="clinic__card_title">
                                        <h5 itemProp="name" className="clinic__card_name"
                                            aria-label="Название клиники">Название
                                            клиники</h5>
                                        <p itemProp="streetAddress" className="clinic__card_adrress"
                                           aria-labelledby="address">
                                            Ленинский
                                            проспект,
                                            д. 160, Ленинский проспект</p>
                                    </div>
                            </div>
                            <p itemProp="description" className="clinic__card_info" role="contentinfo">Что такое текст
                                «рыба» знают
                                все,
                                кто
                                работает с версткой журналов,
                                дизайном и разработкой сайтов. Этот текст служит для демонстрации того,
                                как контент впоследствии будет выглядеть на готовой странице, чтобы
                                увидеть, правильно ли размещаются абзацы, отступы, хорошо ли...</p>
                                <div className="clinic__card_footer">
                                <span className="clinic__card_number" aria-label="позвонить">Наш номер: <a
                                    itemProp="telephone" href="tel: +380560996665">+3856 0 99 66 65</a></span>
                                    <button id="random_color2" className="clinic__card_button">Заказать звонок</button>
                                </div>
                        </section>
                    </div>
                    <div className="clinic__list">
                        <section className="clinic__card border-4" itemType="http://schema.org/Organization">
                            <div className="clinic__card_head" role="banner">
                                <img className="clinic__card_logo" src={Carepoint} alt="CarePoint"
                                     aria-label="логотип клиники" />
                                    <div className="clinic__card_title">
                                        <h5 itemProp="name" className="clinic__card_name"
                                            aria-label="Название клиники">Название
                                            клиники</h5>
                                        <p itemProp="streetAddress" className="clinic__card_adrress"
                                           aria-labelledby="address">
                                            Ленинский
                                            проспект,
                                            д. 160, Ленинский проспект</p>
                                    </div>
                            </div>
                            <p itemProp="description" className="clinic__card_info" role="contentinfo">Что такое текст
                                «рыба» знают
                                все,
                                кто
                                работает с версткой журналов,
                                дизайном и разработкой сайтов. Этот текст служит для демонстрации того,
                                как контент впоследствии будет выглядеть на готовой странице, чтобы
                                увидеть, правильно ли размещаются абзацы, отступы, хорошо ли...</p>
                                <div className="clinic__card_footer">
                                <span className="clinic__card_number" aria-label="позвонить">Наш номер: <a
                                    itemProp="telephone" href="tel: +380560996665">+3856 0 99 66 65</a></span>
                                    <button id="random_color3" className="clinic__card_button">Заказать звонок</button>
                                </div>
                        </section>
                    </div>
                    <div className="clinic__list">
                        <section className="clinic__card border-5" itemType="http://schema.org/Organization">
                            <div className="clinic__card_head" role="banner">
                                <img className="clinic__card_logo" src={Carepoint} alt="CarePoint"
                                     aria-label="логотип клиники" />
                                    <div className="clinic__card_title">
                                        <h5 itemProp="name" className="clinic__card_name"
                                            aria-label="Название клиники">Название
                                            клиники</h5>
                                        <p itemProp="streetAddress" className="clinic__card_adrress"
                                           aria-labelledby="address">
                                            Ленинский
                                            проспект,
                                            д. 160, Ленинский проспект</p>
                                    </div>
                            </div>
                            <p itemProp="description" className="clinic__card_info" role="contentinfo">Что такое текст
                                «рыба» знают
                                все,
                                кто
                                работает с версткой журналов,
                                дизайном и разработкой сайтов. Этот текст служит для демонстрации того,
                                как контент впоследствии будет выглядеть на готовой странице, чтобы
                                увидеть, правильно ли размещаются абзацы, отступы, хорошо ли...</p>
                                <div className="clinic__card_footer">
                                <span className="clinic__card_number" aria-label="позвонить">Наш номер: <a
                                    itemProp="telephone" href="tel: +380560996665">+3856 0 99 66 65</a></span>
                                    <button id="random_color4" className="clinic__card_button">Заказать звонок</button>
                                </div>
                        </section>
                    </div>
                    <div className="clinic__list">
                        <section className="clinic__card border-6" itemType="http://schema.org/Organization">
                            <div className="clinic__card_head" role="banner">
                                <img className="clinic__card_logo" src={Carepoint} alt="CarePoint"
                                     aria-label="логотип клиники" />
                                    <div className="clinic__card_title">
                                        <h5 itemProp="name" className="clinic__card_name"
                                            aria-label="Название клиники">Название
                                            клиники</h5>
                                        <p itemProp="streetAddress" className="clinic__card_adrress"
                                           aria-labelledby="address">
                                            Ленинский
                                            проспект,
                                            д. 160, Ленинский проспект</p>
                                    </div>
                            </div>
                            <p itemProp="description" className="clinic__card_info" role="contentinfo">Что такое текст
                                «рыба» знают
                                все,
                                кто
                                работает с версткой журналов,
                                дизайном и разработкой сайтов. Этот текст служит для демонстрации того,
                                как контент впоследствии будет выглядеть на готовой странице, чтобы
                                увидеть, правильно ли размещаются абзацы, отступы, хорошо ли...</p>
                                <div className="clinic__card_footer">
                                <span className="clinic__card_number" aria-label="позвонить">Наш номер: <a
                                    itemProp="telephone" href="tel: +380560996665">+3856 0 99 66 65</a></span>
                                    <button id="random_color5" className="clinic__card_button">Заказать звонок</button>
                                </div>
                        </section>
                    </div>
                </div>

            </div>
            <button className="clinic-tab__all-clinic">Все кабинеты</button>
        </section>
    }

}