import {useEffect,useState} from 'react'
import { useParams } from "react-router-dom"
import ResItemCard from './ResItemCard';

const ResItemBody =()=>{
    const [showItem,setShowItem] = useState(false);
    const [resList,setResList] = useState([]);
    const {resId} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:4000/resItems`) // Replace with your API URL
        .then(response => {
          if (!response.ok) {
            console.log("Error fetching restaurnat details");
            throw new Error('Network response was not ok');
          }

          return response.json();
        })
        .then(data => {
            console.log("Res Item data",data);
            setResList(data);
            
     
       })
        .catch(error => {
      
        });

     },[]);
    
    return (
        <div>
           
           <ResItemCard display={showItem} resItemList={resList}/>

        </div>
        
    )
}

export default ResItemBody;