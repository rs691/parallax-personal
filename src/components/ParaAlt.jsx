// ParallaxLayout.jsx

import './ParaAlt.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ParaAlt = () => {
  return (
    <div className="parallax-container">
      {/* Header */}
      <div className="header">
        <div className="header-title">Sign Up Today</div>
      </div>

      {/* Form */}
      <div className="form-container">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Create a password" required />
          </div>

          <button type="submit" className="btn btn-primary submit-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default ParaAlt;
