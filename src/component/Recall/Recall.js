import React from "react";
import "./Recall.scss";

export default class Recall extends React.Component {
    render() {
       return <section className="recall-section">
            <div className="container" role="banner" aria-label="баннер">
                <div className="recall">
                    <div className="recall__main">
                        <p className="recall__main_text">
                            Всю необходимую информацию о том, как и в каком центре<br className="recall__main_br"/>
                            сделать МРТ, КТ и рентген исследования, сравнить интересующие<br
                            className="recall__main_br"/>
                            Вас клиники, цены на диагностику и порядок прохождения<br className="recall__main_br"/>
                            процедур, а также записаться на исследование можно по<br className="recall__main_br"/>
                            телефону <span className="recall__main_span">8 (812) 385-77-56</span>
                        </p>

                        <form action="" className="recall__form" aria-label="форма обратного звонка">
                            <label htmlFor="recall__phone" className="recall__form_title">Оставьте свой номер, а мы<br
                                className="recall__form_br"/> Вам
                                перезвоним</label>
                            <div className="recall__form_input">
                                <input id="recall__phone" className="recall__form_phone" type="tel" maxLength="13"
                                       autoComplete="none" placeholder="+380" pattern="\+380\d{9}" required/>
                                <button className="recall__form_button" type="submit"
                                        aria-label="Кнопка передачи номера на обратный звонок">Отправить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    }
}