import React, {useEffect, useState} from 'react';
import Country from '../Country/contry';
import'../Country/contry.css'
import './Countries.css'
const Countries = () => {
 const [countries,setContries]=useState([]);
useEffect(()=>{
    fetch('products.json')
    .then(ress=>ress.json())
    .then(data=>setContries(data))
},[])
    return ( <div className='parant'> 
    <div className='contries-container'> 
{
countries.map(contry=>
<Country key={contry.id} 
country={contry}>
</Country>)
}
</div>
<div className='righSight'> 
<h2> Cart Samary </h2>
<div className='content'> 
    <div className='suma-img'> <img src="https://www.android.com/static/2016/img/one/carousel/nokia_5_3_1x.png" alt="" /> </div> <div className='forIcon'>  1 one</div>
    </div>
    </div>
</div>
    )       
}
export default Countries;