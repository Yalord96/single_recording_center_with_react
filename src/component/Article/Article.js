import React from "react";
import "./Article.scss";
import Lastarticle from "./last_article.png";
import Arrowleft from "./arrow_left.png";
import Arrowright from "./arrow_right.png";

export default class Article extends React.Component{
    render() {
        return <section className="articles">
            <div className="container articles__block">
                <div className="article">
                    <div className="slider">
                        <div className="item">
                            <h3 className="article__title">Последние статьи</h3>
                            <ul>
                                <li>
                                    <figure className="article__content">
                                        <p><img className="article__photo" src={Lastarticle}
                                                alt="картинка статьи" />
                                        </p>
                                        <figcaption className="article__text">
                                            <p className="article__section">
                                                Что такое текст «рыба» знают все, кто работает с<br
                                                className="article__section_br" />
                                                версткой журналов, дизайном и разработкой сайтов.<br
                                                className="article__section_br" />
                                                Этот текст служит для демонстрации того, как<br
                                                className="article__section_br" />
                                                контент впоследствии будет выглядеть на готовой<br
                                                className="article__section_br" />
                                                странице, чтобы увидеть, правильно ли<br
                                                className="article__section_br" />
                                                размещаются абзацы, отступы, хорошо ли смотрятся<br
                                                className="article__section_br" />
                                                шрифты. Такие рыбные тексты, как правило, не несут<br
                                                className="article__section_br" />
                                                никакой смысловой нагрузки.<br className="article__section_br" />
                                            </p>
                                            <p>
                                                На моменте создания макета у дизайнера нет<br
                                                className="article__section_br" />
                                                готовых текстов, поэтому генерируется некий<br
                                                className="article__section_br" />
                                                демонстрационный текст. Некоторые студии<br
                                                className="article__section_br" />
                                                предпочитают писать такой текст самостоятельно, но<br
                                                className="article__section_br" />
                                                чаще используются готовые тексты, созданные<br
                                                className="article__section_br" />
                                                программой – генератором текста. Более того, у<br
                                                className="article__section_br" />
                                                такого текста есть один неоспоримый плюс –<br
                                                className="article__section_br" />
                                            </p>
                                        </figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </div>


                        {/*<div className="item">*/}
                        {/*    <h3 className="article__title">Последние статьи слайд 2</h3>*/}
                        {/*    <ul>*/}
                        {/*        <li>*/}
                        {/*            <figure className="article__content">*/}
                        {/*                <p><img className="article__photo" src={Lastarticle}*/}
                        {/*                        alt="картинка статьи" />*/}
                        {/*                </p>*/}
                        {/*                <figcaption className="article__text article__text_slide2">*/}
                        {/*                    <p className="article__section">*/}
                        {/*                        Что такое текст «рыба» знают все, кто работает с<br*/}
                        {/*                        className="article__section_br" />*/}
                        {/*                        версткой журналов, дизайном и разработкой сайтов.<br*/}
                        {/*                        className="article__section_br" />*/}
                        {/*                        Этот текст служит для демонстрации того, как<br*/}
                        {/*                        className="article__section_br" />*/}
                        {/*                        контент впоследствии будет выглядеть на готовой<br*/}
                        {/*                        className="article__section_br" />*/}
                        {/*                        странице, чтобы увидеть, правильно ли<br*/}
                        {/*                        className="article__section_br" />*/}
                        {/*                        размещаются абзацы, отступы, хорошо ли смотрятся<br*/}
                        {/*                        className="article__section_br" />*/}
                        {/*                        шрифты. Такие рыбные тексты, как правило, не несут<br*/}
                        {/*                        className="article__section_br" />*/}
                        {/*                        никакой смысловой нагрузки.<br className="article__section_br" />*/}
                        {/*                    </p>*/}
                        {/*                    <p>*/}
                        {/*                        На моменте создания макета у дизайнера нет<br*/}
                        {/*                        className="article__section_br" />*/}
                        {/*                        готовых текстов, поэтому генерируется некий<br*/}
                        {/*                        className="article__section_br" />*/}
                        {/*                        демонстрационный текст. Некоторые студии<br*/}
                        {/*                        className="article__section_br" />*/}
                        {/*                        предпочитают писать такой текст самостоятельно, но<br*/}
                        {/*                        className="article__section_br" />*/}
                        {/*                        чаще используются готовые тексты, созданные<br*/}
                        {/*                        className="article__section_br" />*/}
                        {/*                        программой – генератором текста. Более того, у<br*/}
                        {/*                        className="article__section_br" />*/}
                        {/*                        такого текста есть один неоспоримый плюс –<br*/}
                        {/*                        className="article__section_br" />*/}
                        {/*                    </p>*/}
                        {/*                </figcaption>*/}
                        {/*            </figure>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                    </div>

                    <div className="article__buttons">
                        <div className="article__arrows">
                            <button id="prev" className="article__arrows_arrow"><img src={Arrowleft}
                                                                                     alt="arrow_left" /></button>
                            <button id="next" className="article__arrows_arrow"><img src={Arrowright}
                                                                                     alt="arrow_right" /></button>
                        </div>
                        <button className="article__read-more">Читать подробнее</button>
                    </div>

                </div>
                <div className="article">

                    <h3 className="article__title">Отзывы о нас</h3>
                    <ul>
                        <li className="article__text">
                            <p className="article__section">
                                Что такое текст «рыба» знают все, кто работает с<br className="article__section_br" />
                                версткой журналов, дизайном и разработкой сайтов.<br className="article__section_br" />
                                Этот текст служит для демонстрации того, как<br className="article__section_br" />
                                контент впоследствии будет выглядеть на готовой<br className="article__section_br" />
                                странице, чтобы увидеть, правильно ли<br className="article__section_br" />
                                размещаются абзацы, отступы, хорошо ли смотрятся<br className="article__section_br" />
                                шрифты. Такие рыбные тексты, как правило, не несут<br className="article__section_br" />
                                никакой смысловой нагрузки.<br className="article__section_br" />
                            </p>
                            <p>
                                На моменте создания макета у дизайнера нет<br className="article__section_br" />
                                готовых текстов, поэтому генерируется некий<br className="article__section_br" />
                                демонстрационный текст. Некоторые студии<br className="article__section_br" />
                                предпочитают писать такой текст самостоятельно, но<br className="article__section_br" />
                                чаще используются готовые тексты, созданные<br className="article__section_br" />
                                программой – генератором текста. Более того, у<br className="article__section_br" />
                                такого текста есть один неоспоримый плюс –<br className="article__section_br" />
                            </p>
                        </li>
                    </ul>
                    <form className="article__arrows article__reviews">
                        <button className="article__arrows_arrow"><img src={Arrowleft}
                                                                       alt="arrow_left" /></button>
                        <button className="article__arrows_arrow"><img src={Arrowright}
                                                                       alt="arrow_right" /></button>
                    </form>

                </div>
            </div>
        </section>
    }

}