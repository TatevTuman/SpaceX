import React, {Component} from 'react';
import Benefits from "./Benefits";
import s from "./Body.module.css"


class Body extends Component {
    render() {
        return (<div className={s.bodyStyle}>

            <div className={s.bodyContent}>
                <div className={s.boxOne}>
                    <div className={s.buttonCSS}>
                        <div className={s.mobVertion}>
                            <div className={s.textMobTreval5}>
                                <div className={s.treval}>ПУТЕШЕСТВИЕ</div>
                                <div className={s.redPlanet}>на красную планету</div>
                            </div>
                            <div className={s.mobButton5}>
                                <button className={s.border_gradient_purple}>Начать путешествие</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.boxTwo}>
                    <div className={s.benefitsCSS}>
                        <div><Benefits/></div>
                    </div>
                </div>

            </div>


                <div className={s.bodyMob}>
                    <div className={s.textTrevalMob}>
                        <div className={s.trevalMob}>ПУТЕШЕСТВИЕ</div>
                        <div className={s.redPlanetMob}>на красную планету</div>
                    </div>

                    <div><button className={s.border_gradient_purpleMob}>Начать путешествие</button></div>
                    <div className={s.BenefitsMob}><Benefits/></div>

                </div>

        </div>


        );
    }
}


export default Body;

// <div className="on-light">
//     <button className="border-gradient border-gradient-purple">
//         I have a gradient
//     </button>
// </div>
//
//
// button {
//     background: none;
//     text-decoration: inherit;
//     font-family: system-ui;
//     font-size: 1rem;
//     padding: 1rem 2rem;
// }
//
// .border-gradient {
//     border: 10px solid;
//     border-image-slice: 1;
//     border-width: 5px;
// }
// .border-gradient-purple {
//     border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
// }