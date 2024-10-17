import '../App.css';
import styles from './ContentPages.module.css';
import logo from '../assets/logo.png';
import horizontal from '../assets/horizontal.png';

function Education() {
  return (
    <div>
    
        <a href="https://www.iwcc.edu/" target="_blank">
          <img src={logo} className="logo" alt="pirate logo" />
        </a>
        <a href="https://www.bellevue.edu/" target="_blank">
          <img src={horizontal} className="belle" alt="bellevue logo" />
        </a>
        <div className={styles.background} />
      </div>
    
  );
}
export default Education;