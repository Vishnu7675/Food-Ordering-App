import {useEffect,useState} from 'react'
import ItemCard from './ItemCard';
const ResItemCard = ({resItemList})=>{
  console.log("resList$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$",resItemList.data);
    const [showItem,setShowItem] = useState(false)
    return (
       
        <div>
            {
              resItemList?.data?.category?.map((res)=>{

                
                return(
                <div className='text-center mt-5 card shadow-lg p-3 mb-5 bg-white rounded'>
                <h3 style={{cursor:'pointer'}}>{res.title} <span onClick={()=>{
                    setShowItem(!showItem);
                }}>
                   {!showItem?'▼':'▲'}
                  
                </span>
                
                </h3>
                {
                showItem 
                &&
                <div>
                     <ul style={{listStyle:"none"}}>
                      {
                        res.items.map((sub)=>{
                      
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
                )
              })
            }
            



        </div>


    

        
    )
}

export default ResItemCard