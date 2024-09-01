const ItemCard = ({ name, imageId, price, description }) => {
    return (
      <div className='card shadow-sm p-3' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 'bold' }}>
          {name}
        </div>
        <div className="mt-3">
            <p style={{font:'bold'}}>{description}</p>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* <button style={{ marginRight: '10px', cursor: 'pointer' }} className="data-bs-toggle="tooltip" data-bs-placement="top" title="This is a tooltip">
            🛒
          </button> */}
          <button
           style={{ marginRight: '10px', cursor: 'pointer' }}
           className="btn "
           data-bs-toggle="tooltip"
           data-bs-placement="top"
           title="Add to cart"
          >
          🛒
         </button>
          
          <img
            style={{ width: '80px', height: '80px', objectFit: 'cover' }}
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
            alt="restaurant image"
          />
          ₹{price}
        </div>
      </div>
    );
  };
  
  export default ItemCard;
  