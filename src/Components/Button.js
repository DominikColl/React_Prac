import React from 'react';

const Button = props => {
    return ( <button type='button'onClick={props.onClick} style={styles.button}>{props.string}</button> );
}
export default Button;
const styles={
    button:{
        padding:'1rem',
    }
}