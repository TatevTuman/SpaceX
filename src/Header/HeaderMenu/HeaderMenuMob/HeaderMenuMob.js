import React, {Component} from 'react';
import Home from "../Home";
import Technology from "../Technology";
import FlightSchedule from "../FlightSchedule";
import Warranty from "../Warranty";
import AboutCompany from "../AboutCompany";
import Contacts from "../Contacts";
// import Home from "../Home";
// import Technology from "../Technology";
// import FlightSchedule from "../FlightSchedule";
// import Warranty from "../Warranty";
// import AboutCompany from "../AboutCompany";
// import Contacts from "../Contacts";



class HeaderMenuMob extends Component {
    render() {
        return (

            <div className="wrapper">
                <input type="checkbox" id="check-menu"></input>
                    <label htmlFor="check-menu"></label>
                    <div className="burger-line first"></div>
                    <div className="burger-line second"></div>
                    <div className="burger-line third"></div>
                    <div className="burger-line fourth"></div>
                    <nav className="main-menu">
                        <Home/>
                        <Technology/>
                        <FlightSchedule/>
                        <Warranty/>
                        <AboutCompany/>
                        <Contacts/>
                        {/*<a href="#">Пункт 1</a>*/}
                        {/*<a href="#">Пункт 2</a>*/}
                        {/*<a href="#">Пункт 3</a>*/}
                        {/*<a href="#">Пункт 4</a>*/}
                        {/*<a href="#">Пункт 5</a>*/}
                    </nav>
            </div>

        )


    }
}


export default HeaderMenuMob;