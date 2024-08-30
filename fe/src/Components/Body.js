

import {useState,useEffect} from 'react'
import Card from './Card';

const Body = ()=>{
     useEffect(()=>{
                

        fetch('http://localhost:4000/') // Replace with your API URL
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