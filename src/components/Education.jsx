
import styles from './ContentPages.module.css';

import logo from '../assets/logo.png';
import horizontal from '../assets/horizontal.png';

function Education() {
  return (
    <div>
    <div className={styles.education}>

<h1>Education</h1>

     

      
      
          <img src={logo} className="logo" alt="pirate logo" />
       
      
          <img src={horizontal} className="belle" alt="bellevue logo" />
   
    </div>
    </div>
  );
}
export default Education;