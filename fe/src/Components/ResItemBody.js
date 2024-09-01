import {useEffect,useState} from 'react'
import { useParams } from "react-router-dom"
import ResItemCard from './ResItemCard';

const ResItemBody =()=>{
    const [showItem,setShowItem] = useState(0);
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
    
     const handleChildData =(data)=>{
    
        console.log("handle child data");
        setShowItem(data)
  

     }
    return (

        <div>

           
          
           
           {
           resList?.data?.category?.map((category,index)=>{
            //  {/* <ResItemCard  display={showItem} resItemList={resList}/> */}
            return(
                <ResItemCard 
                index={index}
                onSendData={handleChildData}
                showItem={showItem}
                categories={category}
                />
            )
          

           })}

        </div>
        
    )
}

export default ResItemBody;