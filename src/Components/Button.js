import React from 'react';
import { styles } from '../../node_modules/ansi-colors';

const Button = props => {
    return ( <button stlye={styles.button}>{props.string}</button> );
}
 
export default Button;
const styles={
    button:{
        
    }
}