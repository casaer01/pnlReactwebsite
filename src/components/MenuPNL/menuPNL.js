import React ,{ Component } from "react";
import Button from 'react-bootstrap/Button'
import pnlMenu from '../../images/pnlMenu.png';
import "./menuPNL.css";


class menuPNL extends Component{
    render() {
        return (
            <div className="menupnl" >
                <br />
                {/* <iframe src={pnlMenu} title='pnlMenupdf' width="100%" height="100%" ></iframe> */}
                <img src={pnlMenu} alt='menu for bakery' width='100%' />

                <a href={pnlMenu} download="PNL_Menu" >
                    <Button className="downloadbutton" variant="light" size="lg">
                        Download Menu
                    </Button> {' '}
                </a>
            </div>
        );
    }
}

export default menuPNL;