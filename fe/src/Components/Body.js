

import {useState,useEffect} from 'react'
import Card from './Card';

const Body = ()=>{
     useEffect(()=>{
                

        fetch('https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9690681&lng=80.2453106&carousel=true&third_party_vendor=1') // Replace with your API URL
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
            console.log("data@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",data);
        //   setData(data);
        //   setLoading(false);
        })
        .catch(error => {
        //   setError(error);
        //   setLoading(false);
        });

     },[]);
    return (

        <div style={{display:'flex',flexWrap:"wrap",}} className='container mt-5 justify-content-between'>
    
            
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
      
           
        </div>
    )
}

export default Body;