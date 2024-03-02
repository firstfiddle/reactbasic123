import { Link } from "react-router-dom"
function Footer() {
  return (
    <div className="container-fluid bg-dark foot">
    <div className="row py-5">
    <div className="col-md-3 text-center ">
        <a href="" className="nav-link mb-3">
          <img width="15%" src="../image/logo.png" alt=""/>
          <span className="text-success for">MEDITATION & YOGA
          </span>
        </a>
        <p className="text-light ft"> <span className="fs-1">123-456-7890</span><br />
          Info@mysite.com Terry Francine StSan Francisco, CA 94158</p>
      </div> 
      <div className="col-md-1 mb-3"></div>
      <div className="col-md-2  text-light mb-3 px-5 res">

        <Link to="/" className="nav-link mb-3 a">Yoga Jornal</Link>
        <Link to="/" className="nav-link mb-3 a">Benifits</Link>
        <Link to="/" className="nav-link mb-3 a">Yoga excrise</Link>
        <Link to="/" className="nav-link mb-3 a">New Opportunity</Link>
        <Link to="/" className="nav-link mb-3 a">Yoga Classes</Link>
        <button type="button" className="btn btn-outline-success px-3 ">Get Started</button>

      </div>
      <div className="col-md-3 mb-3">
        <h3 className="text-success">Subscribe to Our Team</h3>
        <div className="input-group">
          <span className="input-group-text">email</span>
          <input type="email" className="form-control" placeholder="Ravi@123"/>
        </div>
        <button type="button" className="btn btn-success mt-3">Submit</button>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-2 text-light fs-2">Follow us on :
        <div className="br mb-3">
          <a href="#" className="me-2 btn btn-success rounded-circle">
            <i className="fa-brands fa-square-twitter fa-lg"></i>
          </a>
          <a href="#" className="me-2 btn btn-success rounded-circle">
            <i className="fa-brands fa-facebook fa-lg"></i>
          </a>
          <a href="#" className="me-2 btn btn-success rounded-circle">
            <i className="fa-brands fa-instagram fa-lg"></i>
          </a>
        </div>
        <h6>© 2035 by Vista.io. Powered and secured by <span className="text-success">Ravi-prajapati</span></h6>
      </div>
    </div>
  </div>
  )
}


export default Footer