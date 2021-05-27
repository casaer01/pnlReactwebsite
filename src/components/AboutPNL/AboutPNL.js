import React ,{ Component } from "react";
// import { Jumbotron } from "react-bootstrap";
// import {aboutText} from 'aboutpnl.txt';
import "./AboutPNL.css"


class AboutPNL extends Component{
    render() {
        return <div className="aboutpnl">
                <p className='info' >
                In the Pilsen Community of Chicago since 1973, we're a traditional self-serve mexican bakery where you grab a tray and tongs when you enter then the fun begins picking your favorites from conchas, gorditas dulces, delicious empanadas or from our large assortment of cookies and sweets.
                 Our pan dulce is made fresh daily from scratch with quality ingredients and baked throughout the day.
                  A favorite among our customers is our scrumptious flour tortillas. 
                Made at our location with only the freshest ingredients in a variety of tempting flavors such as mole, habanero, chile morita, black bean with jalape単o, and many more.
                </p>
        </div>
    }
}

export default AboutPNL;