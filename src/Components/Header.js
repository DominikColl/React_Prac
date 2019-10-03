import React from 'react';
import { FaBell } from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaRegEye} from 'react-icons/fa';
import './Header.css';
const Header = props => {
    return ( 
     <div>
        <nav style={styles.nav}>
            <h1 style={styles.h1}>DomCo</h1>
            <ul style={styles.ul}>
                <div><li stlye={styles.li}><a style={styles.a} href="url"><FaBell/></a></li></div>
                <li stlye={styles.li}><a style={styles.a} href="url"><FaRegEye/></a></li>
                <li stlye={styles.li}><a style={styles.a} href="url"><GiHamburgerMenu/></a></li>
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
        justifyContent: 'space-between',
        width:'15%',
        marginRight:'5%',
        alignItems:'center',
      },
      a:{
        padding:'1rem 0',
        fontSize:'1.3rem',
      },
      h1:{
        fontSize:'2rem',
        marginLeft:'5%',
      },
      li:{
      //  fontSize:'1.9rem',
        padding:'10px',
      }
}