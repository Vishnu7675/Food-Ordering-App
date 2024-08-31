import { Link } from "react-router-dom"
const Header = ()=>{
    return (
      <div className="nav justify-content-end bg-dark text-white p-5">
      <ul className="nav">
          <li className="nav-item ps-3" style={{ cursor: 'pointer' }}>
            <Link to={'/'}>Home</Link>
             
          </li>
          <li className="nav-item ps-3" style={{ cursor: 'pointer' }}>
          <Link to={'/about'}>About</Link>
          </li>
          <li className="nav-item ps-3" style={{ cursor: 'pointer' }}>
              Offers
          </li>
          <li className="nav-item ps-3" style={{ cursor: 'pointer' }}>
              Cart
          </li>
      </ul>
  </div>
   
    )
}

export default Header