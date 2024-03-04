import { useState } from 'react';
import { prodData } from './App';
import './App.css';
import {StateLessComponent} from './StateLessComponent';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export function CartData() {
  const [newData, setNewData] = useState(prodData);
  const [selected,setSelected] = useState("")

  function handleRemove(id) {
    // console.log("remove clicked", id);
    const removecart = newData.filter((val, idx) => idx != id);
    setNewData(removecart);
  }

  function handleAdd(id){
    // console.log("add clicked",id)
    const productName = newData[id].prodName
    console.log(productName)
    setSelected(productName)
  }

  return (
    <div className='main-sample'>
      <div className='prod-div'>
        {newData.map((prod, idx) => (
          <div className='card-content' key={idx}>
            <div>Name : {prod.prodName}</div>
            <div>Price : {prod.price}</div>
            <Button variant="success" onClick={()=>handleAdd(idx)}>Add</Button>
            <Button variant="primary m-2" onClick={() => handleRemove(idx)}>Remove</Button>
          </div>

        ))}
      </div>
      <div>
        selected product : {selected}
      </div>
      <div className='card-count'>
        cart {newData.length}
        <StateLessComponent name="In a different Component"/>
       {/* <!--Begin: Star-Clicks.com HTML Code--> */}
       <script type='text/javascript' src='https://www.star-clicks.com/secure/ads.php?pid=15894377653741660'></script>
            {/* <!-- End: Star-Clicks.com --> */}
       
      </div>

    </div>
  );
}
