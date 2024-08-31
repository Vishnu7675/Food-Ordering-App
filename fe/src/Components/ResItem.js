import {useEffect,useState} from 'react'
import ResItemBody from './ResItemBody';
const ResItem = ()=>{
    useEffect(()=>{
        fetch('https://www.swiggy.com/city/kochi/chinese-wok-ravipuram-m-g-road-rest704921') // Replace with your API URL
        .then(response => {
          if (!response.ok) {
            console.log("Error fetching restaurnat details");
            throw new Error('Network response was not ok');
          }

          return response.json();
        })
        .then(data => {
            console.log("Res Item data",data);
     
       })
        .catch(error => {
      
        });

     },[]);
    

  

    return (
        <div>
            <div className='container'>
                <h3 className='text-center mt-4'>Burger King</h3>
            </div>
           <ResItemBody/>
        </div>
    )
}

export default ResItem