const Card = ({name,imageId,rating,deliveryTime,cuisines})=>{
    console.log("props$$$$$$$$$$$$$$$$$$$$$$$$$$$",name);
    console.log("card  name?????????????????",name)
    return (

     
       <div>
           <div>
          <div className="card" style={{ width: '18rem' }}>
              <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}className="card-img-top" alt="restuarnat  Image" />
              <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p>⭐{rating} 🛵{deliveryTime}</p>
              {cuisines?.map((cud)=>{
                    return(
                        <span className="card-text">{cud},</span>
                    )
                    
              })}
           
              {/* <a href="#" className="btn btn-primary">Learn More</a> */}
          </div>
      </div>
    </div>
       </div>

    )
}

export default Card;