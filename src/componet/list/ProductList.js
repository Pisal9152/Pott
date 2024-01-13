import React from 'react'
import {Rate} from "antd"
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductList(props) {

  return (
    <div style={{
                   padding:10,
                   margin:30, 
                  backgroundColor :'gray',
                  marginTop: 10,   
             }}>   
      
      <img src={props.image}
               width={"100%"} />
     
            <div style={{display:"flex", justifyContent:'space-between'}}>
             <div><b>{props.name}</b></div>
             <FaHeart style={{fontSize:20}}/>
             </div>
             <div>{props.price}</div>
             
            <Rate/>           
    </div> )}
export default ProductList
