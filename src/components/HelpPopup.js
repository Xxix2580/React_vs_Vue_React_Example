import { render } from '@testing-library/react';
import React,{Component} from 'react'
import './HelpPopup.css'

class HelpPopup extends Component{
    //const{} = this.props;
    render() {
        return(
            <div className="helppopup_bg">
                <div className="helppopup">
                    <p>HELP</p>
                </div>
            </div>
        );
    }
}
export default HelpPopup;