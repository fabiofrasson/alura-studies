import React from "react";

class Button extends React.Component {
    render() {
        const isActive = true;
        const styles = {
            backgroundColor: isActive ? "green" : "red",
        };
        return <button style={styles}>Button</button>;
    }
}

export default Button;
