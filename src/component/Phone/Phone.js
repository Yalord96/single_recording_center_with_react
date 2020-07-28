import React from "react";
import "./Phone.scss";
import Phonelogo from "./phone-square.png";

export default class Phone extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newNumber: props.number,
        }
    }
    componentDidMount() {

        setInterval(() => this.ageP(), 1000);
    }

    // componentWillUnmount() {
    //     clearInterval(this.timerID);
    // }

    ageP(){
        const {newNumber} = this.state;
        const {second} = this.props;
        this.setState({

            newNumber: newNumber + second
        })
    }

    render() {
        const {newNumber} = this.state;
        return <a className="brand__phone" aria-label="номер телефона" href="tel: 803005000"><img
            className="brand__phone_logo"
            src={Phonelogo}/><span className="brand__phone_number">0{newNumber}</span></a>
    }

}