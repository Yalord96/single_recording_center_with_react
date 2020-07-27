import React from "react";
import "./Footer.scss"
import Logo from "../Header/logo.png";
import Envelope from "./Img/envelope.png";
import Metka from "./Img/icon_metka.png";
import Phone from "./Img/icon_phone.png";


export default class Footer extends React.Component{
//     let test = document.querySelectorAll(".clinic__card_button");
//     const setBg = () => {
//         let randomColor = Math.floor(Math.random() * 16777215).toString(16);
//         return "#" + randomColor;
//     };
//
//     for (let i = 0; i < test.length; i++) {
//     test[i].addEventListener("click", function () {
//         this.style.backgroundColor = setBg();
//     });
// }
    render() {
        return <footer>
            <div class="footer-brand">
                <div class="footer">
                    <figure class="brand" role="banner">
                        <img class="brand__img" src={Logo} alt="логотип Единый центр записи"/>
                        <figcaption class="brand__name">Единый <br/> центр записи</figcaption>
                    </figure>
                    <form action="" class="call-back">
                        <label aria-label="Заказать звонок:" for="call-back__input" class="call-back__lable">Заказать
                            звонок:</label>
                        <input aria-label="Поле для номера обратной связи" id="call-back__input"
                               class="call-back__input"
                               type="tel" maxlength="13" autocomplete="none" placeholder="+380" pattern="\+380\d{9}"
                               required />
                        <button aria-label="Отправить" type="submit" class="call-back__button">Отправить</button>
                    </form>
                </div>
            </div>
            <section class="footer-content">
                <div class="footer-content__block">
                    <div class="footer-content__column" role="navigation">
                        <h6 class="footer-content__title">Get in touch</h6>
                        <ul>
                            <li class="list__item">
                                <img class="list__item-mail" src={Envelope} alt="envelope"/>
                                <div class="list__item-text">
                                    <a class="list__item-text_link"
                                       href="mailto:free@psdfreebies.com"><span>free@psdfreebies.com</span></a>
                                    <a class="list__item-text_link"
                                       href="mailto:free@psdfreebies.com"><span>free@psdfreebies.com</span></a>
                                </div>

                            </li>
                            <li class="list__item">
                                <img class="list__item_phone" src={Phone} alt="phone"/>
                                <div class="list__item-text">
                                    <a class="list__item-text_link" href="tel: +1234567890">
                                        <p>+123 456 7890</p>
                                    </a>
                                    <a class="list__item-text_link" href="tel: +1234567890">
                                        <p>+123 456 7890</p>
                                    </a>
                                </div>
                            </li>
                            <li class="list__item">
                                <img class="list__item-map" src={Metka} alt="Map"/>
                                <div class="list__item-text">
                                    <a class="list__item-text_link" href="https://goo.gl/maps/6xWAfdGvjfwsLS92A">
                                        <p>123, Main
                                            Road, New City,</p>
                                    </a>
                                    <a class="list__item-text_link" href="https://goo.gl/maps/6xWAfdGvjfwsLS92A">
                                        <p>My Country
                                            123456</p>
                                    </a>
                                </div>
                            </li>
                            <li class="list__item">
                                <div>
                                    <ul class="footer__socials">
                                        <li><a href="#" class="socials"></a></li>
                                        <li><a href="#" class="socials socials_google"></a></li>
                                        <li><a href="#" class="socials socials_vk"></a></li>
                                        <li><a href="#" class="socials socials_youtube"></a></li>
                                        <li><a href="#" class="socials socials_ln"></a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-content__column" role="navigation">
                        <h6 class="footer-content__title">Quick Links</h6>
                        <ul class="footer-links">
                            <li class="footer-links__item"><a class="footer-links__arrow" href="#">About us</a></li>
                            <li class="footer-links__item"><a class="footer-links__arrow" href="#">Blog</a></li>
                            <li class="footer-links__item"><a class="footer-links__arrow" href="#">Contract us</a></li>
                            <li class="footer-links__item"><a class="footer-links__arrow" href="#">Faq</a></li>
                            <li class="footer-links__item"><a class="footer-links__arrow" href="#">Insurance</a></li>
                            <li class="footer-links__item"><a class="footer-links__arrow" href="#">Cotact us</a></li>
                        </ul>
                    </div>
                    <div class="footer-content__column" role="navigation">
                        <h6 class="footer-content__title">Our Services</h6>
                        <ul class="footer-links">
                            <li class="footer-links__item"><a class="footer-links__arrow" href="#">Work Injuries</a>
                            </li>
                            <li class="footer-links__item"><a class="footer-links__arrow" href="#">Sport Injuries</a>
                            </li>
                            <li class="footer-links__item"><a class="footer-links__arrow" href="#">Cold Laser
                                Therapy</a>
                            </li>
                            <li class="footer-links__item"><a class="footer-links__arrow" href="#">Massage Therapy</a>
                            </li>
                            <li class="footer-links__item"><a class="footer-links__arrow" href="#">Physiotherapy</a>
                            </li>
                            <li class="footer-links__item"><a class="footer-links__arrow" href="#">Chiropratic
                                Therapy</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-content__column" role="navigation">
                        <form class="footer-form" role="textbox">
                            <h6 class="footer-content__title" for="footer-form">Enquiry Form</h6>
                            <p><input aria-label="Поле для ввода имени" class="footer-form__input footer-form__name"
                                      type="text" placeholder="Name" required /></p>
                            <p><input aria-label="Поле для ввода телефона" class="footer-form__input" type="tel"
                                      placeholder="Phone" required /></p>
                            <p><textarea aria-label="Поле для сообщения"
                                         class="footer-form__input footer-form__textarea"
                                         rows="5" cols="25" name="text" placeholder="Message"></textarea></p>
                            <p><input class="footer-form__button" type="submit" value="SUBMIT" /></p>
                        </form>
                    </div>
                </div>
            </section>
            <div class="footer-info">
                <p>Copyright © 2017.</p>
            </div>
    </footer>
    }

    }