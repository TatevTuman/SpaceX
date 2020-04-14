import React, {Component} from 'react';
import s from './App.module.css';
import Header from "./Header/Header";
import Body from "./Body/Body";




class App extends Component {
    render() {
        return (
            <div className="App">
              <div className={s.main}>
                  <div className={s.box1}> <Header/>
                  </div>
                  <div className={s.box2}><Body/></div>

              </div>
            </div>
        );
    }
}


export default App;


