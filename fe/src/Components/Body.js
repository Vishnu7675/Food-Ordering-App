import { Link } from "react-router-dom"
import {useState,useEffect} from 'react'
import Card from './Card';


const Body = ()=>{
    const[resData,setResData]=useState([])
     useEffect(()=>{
                

        fetch('http://localhost:4000/data') // Replace with your API URL
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          return response.json();
        })
        .then(data => {
            console.log("data@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",data);
          setResData(data);
          
        //   setLoading(false);
        })
        .catch(error => {
        //   setError(error);
        //   setLoading(false);
        });

     },[]);
     console.log("resData@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",resData);
     let firstRestaurent = resData?.data?.restaurants?.[0]?.info?.name;
     console.log("first restaurant name = ",firstRestaurent);
     return (
      <div style={{ display: 'flex', flexWrap: 'wrap',cursor:'pointer' }} className='container mt-5 justify-content-between shadow-lg p-3 mb-5 bg-white rounded'>
          {resData?.data?.restaurants?.map((restaurant) => (
            <Link to={'/resItem'}>
              <Card
                  key={restaurant.info.id} // Assuming `id` is a unique identifier
                  name={restaurant.info.name}
                  imageId={restaurant.info.cloudinaryImageId}
                  rating={restaurant.info.avgRating}
                  deliveryTime={restaurant.info.sla.slaString}
                  cuisines={restaurant.info.cuisines}
                
              />
            </Link>
            
          ))}
      </div>
  );
}

export default Body;