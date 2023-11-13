import React, {useState} from 'react';
import axios from 'axios';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../styles/FeaturedProducts.css';

function FeaturedProducts() {

 const [datas, setDatas] = useState([])
 
  const getData = () => {
     axios.get('https://fakestoreapi.com/products?limit=9')
     .then((response) => {
      setDatas(response.data);
     })
  }

  

  return (
    <div className='featured-products-div'>
      {getData()}
      <h1>Featured Products</h1>
      <h6>Our new collection</h6>

    <div className="big-item-container">
      
      {datas.map((data) => {
        return(
          <div className="item-container" key={data.id}>
      <img src={data.image} alt="" />

      <p>{data.category}</p>

      <h5>{data.title}</h5>

      <div className="price-div">
        <div className="price-mini-div">
          <small>Rating: {data.rating.rate}/5</small>

          <h4>${data.price}</h4>
        </div>

      <button><AddShoppingCartIcon /></button>
      </div>
      </div>
        )
      })}
      </div>

    </div>
  )
}

export default FeaturedProducts;
