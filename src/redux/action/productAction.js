import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const productAction = createAsyncThunk("product" , (data) => {
  return axios.post("http://localhost:3000/product", {
    name : data[0],
    description : data[1],
    price : data[2],
    estimated_weeks : data[3],
    can_after_service : data[4],
    delivery_fee : data[5],
    seller_id : data[6],
    category_id : data[7]
  }).then(res => {
    return res.status;
  });
}) 