import React from "react";
import "./Promo.scss";
import BestTreatment from "./best_treatment.png";
import Emergency from "./emergency_help.png";
import Medical from "./medical_staff.png";
import Qualified from "./qualified_doctors.png";

export default class Promo extends React.Component{
    render() {
        return <section className="promo">
            <div className="container">

                <nav className="promo__menu">
                    <div className="promo__menu_best-treatment">
                        <figure className="promo__menu_avatar">
                            <p className="promo__menu_circle"><img src={BestTreatment}
                                                                   alt="VectorSmartObject"/></p>
                            <figcaption className="promo__menu_name">Best Treatment</figcaption>
                        </figure>
                        <p className="promo__menu_text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque
                            laudantium.</p>
                    </div>
                    <div className="promo__menu_emergency-help">
                        <figure className="promo__menu_avatar">
                            <p className="promo__menu_circle"><img src={Emergency}
                                                                   alt="VectorSmartObject"/></p>
                            <figcaption className="promo__menu_name">Emergency Help</figcaption>
                        </figure>
                        <p className="promo__menu_text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque
                            laudantium.</p>
                    </div>
                    <div className="promo__menu_medical-staff">
                        <figure className="promo__menu_avatar">
                            <p className="promo__menu_circle"><img src={Medical}
                                                                   alt="VectorSmartObject"/></p>
                            <figcaption className="promo__menu_name">Medical Staff</figcaption>
                        </figure>
                        <p className="promo__menu_text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque
                            laudantium.</p>
                    </div>
                    <div className="promo__menu_qualified-doctors">
                        <figure className="promo__menu_avatar">
                            <p className="promo__menu_circle"><img src={Qualified}
                                                                   alt="VectorSmartObject"/></p>
                            <figcaption className="promo__menu_name">Qualified Doctors</figcaption>
                        </figure>
                        <p className="promo__menu_text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque
                            laudantium.</p>
                    </div>
                </nav>
            </div>
        </section>
    }

}