import { Link } from "react-router-dom" 

const EmptyCart=()=>{
    return(
        <div className="container text-center mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <img
              src= "https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-illustration-download-in-svg-png-gif-file-formats--is-explore-box-states-pack-design-development-illustrations-3385483.png?f=webp"
              alt="Empty Cart"
              className="img-fluid mb-4"
            />
            <h3>Your Cart is Empty!</h3>
            <p className="text-muted">
              Looks like you haven't added anything to your cart yet.
            </p>
          
            <Link to="/" className="btn btn-primary mt-3">
            Start Shopping
           </Link>
          </div>
        </div>
      </div>
    )
}

export default EmptyCart