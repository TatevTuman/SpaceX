import React, {Component} from "react";
import logo from '../Photo/logo.png'
import Home from "./HeaderMenu/Home";
import Technology from "./HeaderMenu/Technology";
import FlightSchedule from "./HeaderMenu/FlightSchedule";
import Warranty from "./HeaderMenu/Warranty";
import AboutCompany from "./HeaderMenu/AboutCompany";
import Contacts from "./HeaderMenu/Contacts";
import s from "./Header.module.css";
import HeaderMenuMob from "./HeaderMenu/HeaderMenuMob/HeaderMenuMob";

class Header extends Component {
    render() {
        return (<div className={s.header}>

            <div className={s.headerContent}>
                <div className={s.logo}><img src={logo} alt="logo"/></div>
                <div className={s.menu}>
                    <div><Home/></div>
                    <div><Technology/></div>
                    <div><FlightSchedule/></div>
                    <div><Warranty/></div>
                    <div><AboutCompany/></div>
                    <div><Contacts/></div>


                </div>
                <div className={s.MenuMob}> <HeaderMenuMob/></div>

            </div>


        </div>);


    }
}



export default Header;

