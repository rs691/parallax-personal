// Layout.jsx

import './components/Layout.css'; // Import the CSS file

import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="layout-wrapper">
        
        {children}
      </div>
    </>
  );
};

MainLayout.propTypes = {
  Layout: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
  
}

export default MainLayout;
