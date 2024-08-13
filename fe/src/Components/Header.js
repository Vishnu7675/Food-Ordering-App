const Header = ()=>{
    return (
      <div className="nav justify-content-end bg-dark text-white p-5">
      <ul className="nav">
          <li className="nav-item ps-3" style={{ cursor: 'pointer' }}>
              Home
          </li>
          <li className="nav-item ps-3" style={{ cursor: 'pointer' }}>
              About
          </li>
          <li className="nav-item ps-3" style={{ cursor: 'pointer' }}>
              Contact
          </li>
          <li className="nav-item ps-3" style={{ cursor: 'pointer' }}>
              Services
          </li>
      </ul>
  </div>
   
    )
}

export default Header