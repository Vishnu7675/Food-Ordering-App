import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
const Header = ()=>{
    const data = useSelector((store) => store.cart.cartItems);
    return (
      <div className="nav justify-content-end bg-dark text-white p-5">
      <ul className="nav">
          <li className="nav-item ps-3" style={{ cursor: 'pointer' }}>
            <Link to={'/'}>🏠︎Home</Link>
             
          </li>
          {/* <li className="nav-item ps-3" style={{ cursor: 'pointer' }}>
          <Link to={'/about'}>About</Link>
          </li> */}
          <li className="nav-item ps-3" style={{ cursor: 'pointer' }}>
          🏷️Offers
          </li>
          <li className="nav-item ps-3 position-relative" style={{ cursor: 'pointer' }}>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {data.length}
          <span class="visually-hidden">unread messages</span>
         </span>
         <Link to={'/cart'}>🛒Cart</Link>
         
       
         
          </li>
      </ul>
  </div>
   
    )
}

export default Header