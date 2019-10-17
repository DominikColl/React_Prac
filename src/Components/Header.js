import React from 'react';
// import { FaBell } from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaRegEye} from 'react-icons/fa';
import './Header.css';
import {NavLink} from 'react-router-dom';
import { WiCloud} from "react-icons/wi";
const Header = props => {
    return ( 
     <div>
        <nav style={styles.nav}>
            <h1 style={styles.h1}><NavLink to='/Home'>DomCo</NavLink></h1>
            <ul style={styles.ul}>
            <li></li>
                <li style={styles.li}><NavLink style={styles.a} to='/Weather'><WiCloud/></NavLink></li>
                <li style={styles.li}><a style={styles.a} href="url"><FaRegEye/></a></li>
                <li style={styles.li}><a style={styles.a} href="url"><GiHamburgerMenu/></a></li>
            </ul>
        </nav>
</div>
     );
}
export default Header;
const styles={
    nav:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        padding:'1rem',
        backgroundColor:'#7FB069',
        boxShadow: '0px 4px 5px 0px rgba(125,125,125,1)',
    },
    ul:{
        display:'flex',
        height:'100%',
        justifyContent: 'space-between',
        width:'15%',
        marginRight:'5%',
        alignItems:'center',
        // border:'1px solid red',
      },
      a:{
        padding:'.4rem 0',
        fontSize:'1.3rem',
      },
      h1:{
        fontSize:'2rem',
        marginLeft:'5%',
      },
      li:{
        // border:'1px solid blue',
      }
}