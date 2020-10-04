import React,{Component} from 'react'
import './ButtonShort.css'

import arrow_svg from '../assets/arrow.svg'

class ButtonShort extends Component{
    render(){
        const {reference,children} = this.props;
        return(
            <a className="box" href={reference}>
                <p className="button_p">{children}</p>
                <img src = {arrow_svg} className="arrow"></img>
            </a>
        );
    }
}
export default ButtonShort