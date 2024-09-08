import {useEffect,useState} from 'react'
import { useParams } from "react-router-dom"
import ResItemCard from './ResItemCard';

const ResItemBody =()=>{
    const [showItem,setShowItem] = useState(0);
    const [resList,setResList] = useState([]);
    const {resId} = useParams();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch(`http://localhost:4000/resItems/${resId}`) // Replace with your API URL
        .then(response => {
          if (!response.ok) {
            console.log("Error fetching restaurnat details");
            throw new Error('Network response was not ok');
          }

          return response.json();
        })
        .then(data => {
            console.log("Res Item data",data);
            console.log("Res Item data modified",data.data[0].category[0].title);
            setResList(data);
            setLoading(false);

            
     
       })
        .catch(error => {
          setLoading(false);
      
        });

     },[resId]);
    
     const handleChildData =(data)=>{
    
        console.log("handle child data");
        setShowItem(data)
  

     }

     console.log("Res Item data modified reslist",resList);
     if(loading){
      return(
        <div>Loading.....</div>
      )
     }
    return (

        <div>

           
          <h1 style={{textAlign:"center"}}>{resList.data[0].resName}</h1>
           
           {
           resList?.data[0]?.category?.map((category,index)=>{
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