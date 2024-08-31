import {useEffect,useState} from 'react'
const ResItemCard = ()=>{
    const [showItem,setShowItem] = useState(false)
    return (
       
        <div>
                 <div className='text-center mt-5 card shadow-lg p-3 mb-5 bg-white rounded'>
                <h3 style={{cursor:'pointer'}}>Recommended <span onClick={()=>{
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
                       <li>Crispy Veg Burger</li>
                       <li>Crispy Chicken Burger</li>
                     </ul>
                </div>
             
                }
               
            </div>

            <div className='text-center mt-5 card shadow-lg p-3 mb-5 bg-white rounded'>
            <h3 style={{cursor:'pointer'}}>Burger <span onClick={()=>{
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
                   <li>Crispy Veg Burger</li>
                   <li>Crispy Chicken Burger</li>
                 </ul>
            </div>
         
            }
           
        </div>

<div className='text-center mt-5 card shadow-lg p-3 mb-5 bg-white rounded'>
<h3 style={{cursor:'pointer'}}>Broasted <span onClick={()=>{
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
       <li>Crispy Veg Burger</li>
       <li>Crispy Chicken Burger</li>
     </ul>
</div>

}

</div>
        </div>
        
    )
}

export default ResItemCard