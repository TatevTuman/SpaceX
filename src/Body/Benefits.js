import React, {Component} from 'react';
import s from "./Benefits.module.css"

class Benefits extends Component {
    render() {
        return (
            <div>
                <div className={s.allButton}>

                    <div className={s.benefits}>

                        <div className={s.bloc1}>
                            <div>
                                <button className={s.buttonOne}>мы <div className={s.number}>1</div>на рынке</button>
                            </div>
                            <div>
                                <button className={s.buttonTwo}>канендарик за <div className={s.number}>2001</div>г.в
                                    подарок
                                </button>

                            </div>
                        </div>

                        <div className={s.bloc2}>
                            <div>

                                <button className={s.buttonTree}>гарантируем <div
                                    className={s.number}>50%</div>безопасность
                                </button>
                            </div>
                            <div>
                                <button className={s.buttonFour}>путешествие <div className={s.number}>567</div>дней
                                </button>
                            </div>
                        </div>


                    </div>
                </div>


                <div className={s.benefitsMob}>

                    <div className={s.blocButtonMob}>
                        <div className={s.bloc1Mob}>
                            <div className={s.trulalal}>
                                <div>
                                    <button className={s.buttonOneMob}>мы <div className={s.numberMob}>1</div>на рынке</button>
                                </div>
                                <div>
                                    <button className={s.buttonTwoMob}>канендарик за <div className={s.numberMob}>2001</div>г.в
                                        подарок
                                    </button>

                                </div>
                                <div>

                                    <button className={s.buttonTreeMob}>гарантируем <div
                                        className={s.numberMob}>50%</div>безопасность
                                    </button>
                                </div>
                                <div>
                                    <button className={s.buttonFourMob}>путешествие <div className={s.numberMob}>567</div>дней
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>


            </div>);
    }
}


export default Benefits;