import React from 'react'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


export default function Cart(props) {

function Notification(){
    NotificationManager.warning('Remove items in Your cart','Remove')
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
                                    <div className="text-center"><button className="btn btn-outline-dark btn-sm mx-2" >Buy Now</button></div>
                                    <div className="text-center"><button className="btn btn-outline-dark btn-sm mx-2" onClick={()=>{props.removeToCartHandler({id:items.cartData.id,img:items.cartData.img,desc:items.cartData.desc,price:items.cartData.price});Notification();}} >Remove To Cart</button></div>
                                </div>
                                
                            </div>
                        </div>
)}
</div>
                </div>
            </section>
        </div>
        <NotificationContainer />
        </div>
    )
}
