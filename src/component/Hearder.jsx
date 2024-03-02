
import { Link } from "react-router-dom"

function Hearder() {
  return (
    <div>
      <nav className="navbar bg-secondary  navbar-expand-md">
      <div className="container-fluid">
        <a href="" className="nav-link">
          <img width="15%" src="../image/logo.png" alt=""/>
          <span className="text-success for">MEDITATION & YOGA
          </span>
        </a>
        <button className="navbar-toggler" data-bs-target="#a" data-bs-toggle="collapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="a">
          <ul className="navbar-nav ms-auto text-center">
            <li><Link to="/" className="nav-link  aa">Home</Link></li>
            <li><Link to="/Yoga" className="nav-link aa">Yoga Wisdom</Link></li>
            <div className="dropdown">
              <a href="" className=" nav-link aa dropdown-toggle" data-bs-toggle="dropdown">Meditation</a>
              <ul className="dropdown-menu">
                <li><Link to="/medi" className="nav-link aa dropdown-item">Meditation</Link></li>
                <li><Link to="/kirtan" className="nav-link aa dropdown-item">Kirtan</Link></li>
              </ul>
            </div>
            <li><Link to="/about" className="nav-link  aa">About</Link></li>
            <li><Link to="/conta" className="nav-link  aa">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Hearder