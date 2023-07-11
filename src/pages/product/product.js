import React, { useState } from 'react'
import ProductSection from './style'
import RECHO from "../../Image/Header/RECHO.svg";
import { useDispatch } from 'react-redux';
import { productAction } from '../../redux/action/productAction';
import { productState } from '../../redux/reducer/productSlice';
        // "name must be a string",
        // "description must be a string",
        // "price must be a number conforming to the specified constraints",
        // "estimated_weeks must be a number conforming to the specified constraints",
        // "can_after_service must be a boolean value",
        // "delivery_fee must be a number conforming to the specified constraints",
        // "seller_id must be a string",
        // "category_id must be a string"
const Product = () => {

  const [Product, setProduct] = useState("");
  const [Des, setDes] = useState("");
  const [Price, setPrice] = useState(0);
  const [Week, setWeek] = useState(0);
  const [AS, setAS] = useState(false);
  const [Delivery, setDelivery] = useState(0);
  const [Seller, setSeller] = useState("");
  const [Category, setCategory] = useState("");
  const dispatch = useDispatch();
  const data = [Product, Des, Number(Price), +Week, AS, +Delivery, Seller, Category];
  const state = Product && Des && Price && Week && Delivery && Seller && Category;
  const handlePro = (data) => {
    
    if(Product && Des && Price && Week && Delivery && Seller && Category){
      dispatch(productAction(data))
      .then(res => {
        if(res.payload === 201){
          dispatch(productState());
        }
      })
    }
    
  }

  return (
    <ProductSection>
      <div className='box'>
        <ul className='proInfo'>
          <li className='head'><img src={RECHO} alt='Logo'></img></li>
          <li className='pros'>
            <label htmlFor='name'>Product_Name</label>
            <input id='name' type='text' placeholder='Product Name' onChange={(e)=>{setProduct(e.target.value)}}/>
          </li>
          <li className='pros'>
            <label htmlFor='description'>Description</label>
            <input id='description' type='text' placeholder='Description' onChange={(e)=>{setDes(e.target.value)}}/>
          </li>
          <li className='pros'>
            <label htmlFor='price'>Price</label>
            <input id='price' type='number' placeholder='Price' onChange={(e)=>{setPrice(e.target.value)}}/>
          </li>
          <li className='pros'>
            <label htmlFor='estimated_weeks'>Estimated_Weeks</label>
            <input id='estimated_weeks' type='number' placeholder='Estimated_Weeks' onChange={(e)=>{setWeek(e.target.value)}}/>
          </li>
          <li className='pros'>
            <label htmlFor='delivery_fee'>Delivery_Fee</label>
            <input id='delivery_fee' type='number' placeholder='Delivery_Fee' onChange={(e)=>{setDelivery(e.target.value)}}/>
          </li>
          <li className='pros'>
            <label htmlFor='seller_id'>Seller</label>
            <input id='seller_id' type='text' placeholder='Seller' onChange={(e)=>{setSeller(e.target.value)}}/>
          </li>
          <li className='pros'>
            <label htmlFor='category_id'>Category</label>
            <input id='category_id' type='text' placeholder='Category' onChange={(e)=>{setCategory(e.target.value)}}/>
          </li>
          <li className='pros'>
            <label htmlFor='after_service'>After_Service</label>
            <input id='after_service' type='checkbox' onChange={(e)=>{setAS(e.target.checked)}}/>
          </li>
          <li className='Btn'>
            <button onClick={()=>{handlePro(data)}} disabled={!state}>Send</button>
          </li>
        </ul>
      </div>
    </ProductSection>
  )
}

export default Product