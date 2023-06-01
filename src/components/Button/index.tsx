import React from "react";
import style from "./Button.module.scss";

class Button extends React.Component<{
    type?: "button" | "submit" | "reset";
    children: any;
    onClick?: () => void;
}> {
    render() {
        const { type = "button", onClick } = this.props;
        return (
            <button onClick={onClick} type={type} className={style.btn}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;
