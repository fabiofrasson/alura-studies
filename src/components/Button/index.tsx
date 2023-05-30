import React from "react";
import style from "./Button.module.scss";

class Button extends React.Component<{
    type?: "button" | "submit" | "reset";
    children: any;
}> {
    render() {
        const { type = "button" } = this.props;
        return (
            <button type={type} className={style.btn}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;
