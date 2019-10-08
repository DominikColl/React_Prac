import React from 'react';
import { FaGithub } from 'react-icons/fa';
const Footer = props => {
    return ( 
        // idk why i need the rel='noopenner ' runs warning or error when not in tag
        <footer style={styles.footer}><a href='https://github.com/DominikColl' target="_blank" rel="noopener noreferrer"><FaGithub style={styles.icon}/></a></footer>
     );
}
export default Footer
const styles={
    footer:{
        position: 'absolute',
        bottom: '0',
        width: '100%', 
        padding:'1rem 0',
        backgroundColor:'#7FB069',
        boxShadow: '0px -4px 5px 0px rgba(125,125,125,1)',
        textAlign:'center',
    },
    icon:{
         fontSize:'1.6rem',
    },
    a:{
        padding:'.4rem 0',
    }
}