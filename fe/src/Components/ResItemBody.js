import {useEffect,useState} from 'react'
import ResItemCard from './ResItemCard';

const ResItemBody =()=>{
    const [showItem,setShowItem] = useState(false)
    return (
        <div>
           
           <ResItemCard/>

        </div>
        
    )
}

export default ResItemBody;