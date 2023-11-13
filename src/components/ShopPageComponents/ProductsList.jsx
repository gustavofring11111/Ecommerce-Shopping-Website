import React,{useState} from 'react';
import '../../styles/ShopPageStyles/ProductsList.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import PurchasesDetailsTable from '../PurchasesPage/PurchasesDetailsTable.jsx';


function ProductsList() {

  const [show, setShow] = useState(true)
  
  
  const [details, setDetails] = useState([])

  const [datas, setDatas] = useState([])
 
  const getData = () => {
     axios.get('https://fakestoreapi.com/products')
     .then((response) => {
      setDatas(response.data);
     })
  }


  const showDetails = (image, title, category, description, price) => {
    const NewDetails = {
      image:image,
      title:title,
      category:category,
      description:description,
      price:price
    }

    setDetails(NewDetails);
  }

 


  return (
    <>
    <div className='featured-products-div'>
      {getData()}
      <h1>Featured Products</h1>
      <h6>Our new collection</h6>

    {
      show ? <div className="big-item-container">
      
      {datas.map((data) => {
        return(
          <div className="item-container" key={data.id} onClick={() => showDetails(data.image, data.title, data.category, data.description, data.price)}>
      <img src={data.image} alt="" onClick={() => setShow(false)}/>

      <p>{data.category}</p>

      <h5>{data.title}</h5>

      <div className="price-div">
        <div className="price-mini-div">
          <small>Rating: {data.rating.rate}/5</small>

          <h4>${data.price}</h4>
        </div>

      <button><AddShoppingCartIcon onClick={() => addToCard(data.image, data.title, data.price)}/></button>
      </div>
      </div>
        )
      })}
      </div> :
      <div className="pop-up-big-div">
      <div className="back-shop-page" onClick={() => setShow(true)}>
          <ArrowBackIcon /> <p>Back to the Shop Page</p>

          </div>
      
       <div className="pop-up-div">
     
          

    <img src={details.image} alt="" />
   

    <div className="details-div">
      <p>{details.category}</p>

      <h2>{details.title}</h2>

      <h1>${details.price}</h1>

      <div className="button-div">
        <input type="number" />

        <button>Add To Cart</button>
      </div>

      <h2>Product Details</h2>

      <p className='description'>{details.description}</p>
    </div>
    </div>
    </div>
      }
    </div>



</>
  )
}

export default ProductsList;
