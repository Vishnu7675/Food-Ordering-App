import {useEffect,useState} from 'react'
import ItemCard from './ItemCard';
// const ResItemCard = ({resItemList})=>{
//   console.log("resList$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$",resItemList.data);
//     const [showItem,setShowItem] = useState(false)
//     return (
       
//         <div>
//             {
//               resItemList?.data?.category?.map((res)=>{

                
//                 return(
//                 <div className='text-center mt-5 card shadow-lg p-3 mb-5 bg-white rounded'>
//                 <h3 style={{cursor:'pointer'}}>{res.title} <span onClick={()=>{
//                     setShowItem(!showItem);
//                 }}>
//                    {!showItem?'▼':'▲'}
                  
//                 </span>
                
//                 </h3>
//                 {
//                 showItem 
//                 &&
//                 <div>
//                      <ul style={{listStyle:"none"}}>
//                       {
//                         res.items.map((sub)=>{
                      
//                            return(
//                             <ItemCard 
//                             name={sub.name} 
//                             description={sub.description} 
//                             imageId={sub.imageId} 
//                             price={sub.price}
//                             />
//                            )
                      
                          
//                         })
//                       }
                      
                      
//                      </ul>
//                 </div>
             
//                 }
               
//                 </div>
//                 )
//               })
//             }
            



//         </div>


    

        
//     )
// }

const ResItemCard = ({categories,showItem,onSendData,index})=>{
  console.log("categories!!!!!!!!!!!!!!!",categories)
   console.log("keys>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",index);
   console.log("Show Item>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",showItem);
 const  sendDataToParent =(index)=>{
  onSendData(index)
       
  }
    return(
    <div>
        <div className='text-center mt-5 card shadow-lg p-3 mb-5 bg-white rounded'>
           <h3 style={{cursor:'pointer'}}>{categories.title} <span onClick={()=>{
                // setShowItem(!showItem);
                sendDataToParent(index);

            }}>
               {!showItem==index?'▼':'▲'}
              
            </span>
            
            </h3>
            {
            showItem ==index
            &&
            <div>
                 <ul style={{listStyle:"none"}}>
                  {
                    categories.items.map((sub)=>{
                  
                       return(
                        <ItemCard 
                        name={sub.name} 
                        description={sub.description} 
                        imageId={sub.imageId} 
                        price={sub.price}
                        />
                       )
                  
                      
                    })
                  }
                  
                  
                 </ul>
            </div>
         
            }
           
            </div>
            
    </div>

 
      
    )
     
}
export default ResItemCard