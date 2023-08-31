import './styles.css';

import { Component } from "react";

export class Button extends Component {
    render() {
        const { disabled, text, onClick } = this.props;
        return (
            <button disabled={disabled} className='button' onClick={onClick}>{text}</button>
        );
    };
}