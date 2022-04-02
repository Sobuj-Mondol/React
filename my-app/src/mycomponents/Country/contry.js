import React from "react";
const Products=(props)=>{
 
   const {name,price,id,img}=props.country;
   const handal=()=>{
    console.log('clicked')
        }
   return(
        <div className="contries"> 
        <div className="content-contry">
            <h5>  {name} </h5>
            <img src={img} alt="" />
            <h4> Price: ${price}</h4>
            <p> ID: {id}</p>
            </div>
            <div class="d-grid gap-2">
  <button id="btn" onClick={handal} className="btn btn-success" type="button">Add to card</button>

</div>
            </div>  
            
    );

};
export default Products;