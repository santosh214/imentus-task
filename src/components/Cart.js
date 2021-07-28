import React from 'react'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


export default function Cart(props) {
console.warn('acrt',props)
function Notification(){
    NotificationManager.warning('Remove items in Your cart','Remove')
}

function Redirect(){
alert("Thank You For Shopping")
    console.warn("redirect")
props.history.push('/home')
}
    console.log("cartprops",props)
    if(props.cartData.length===0){
        return(
            <div className="mt-5  mx-5 px-5"> <h3 className="text-center alert alert-danger py-5">No items in Your Cart...!</h3>
        </div>
        )
    }
    return (
        <div>
            <div>
            {/* <!-- Section--> */}
            <section className="py-1">
                <div className="container-fluid px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
     {props.cartData.map((items,index)=>
                        <div className="col mb-5" key={index}>
                            <div className="card h-100">
                                {/* <!-- Sale badge--> */}
                                {/* <!-- Product image--> */}
                                <img className="card-img-top" src={items.cartData.img} alt="..." />
                                {/* <!-- Product details--> */}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* <!-- Product name--> */}
                                        <h5 className="fw-bolder">{items.cartData.desc}</h5>
                                        {/* <!-- Product reviews--> */}
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        {/* <!-- Product price--> */}
                                        <span>&#x20b9;</span> {items.cartData.price}
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}
                                <div className="card-footer d-flex p-4 pt-0 border-top-0 justify-content-center bg-transparent">
                                    <div className="text-center"><button className="btn btn-outline-dark btn-sm mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal" >Buy Now</button></div>
                                    <div className="text-center"><button className="btn btn-outline-dark btn-sm mx-2" onClick={()=>{props.removeToCartHandler({id:items.cartData.id,img:items.cartData.img,desc:items.cartData.desc,price:items.cartData.price});Notification();}} >Remove To Cart</button></div>
                                </div>
                                
                            </div>
                        </div>
)}
</div>
                </div>
            </section>
        </div>
        {/* //buyNOw MOdel */}
        <div>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
  <div className="form-row">
    <div className="form-group col">
      <label htmlFor="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
    </div>

  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="form-row">
    <div className="form-group col">
      <label htmlFor="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="inputState">State</label>
      <select id="inputState" className="form-control">
        <option defaultValue>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label htmlFor="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={Redirect}>Save changes</button>
      </div>
    </div>
  </div>
</div>
        </div>
        <NotificationContainer />
        </div>
    )
}
