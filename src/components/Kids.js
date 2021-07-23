import React from 'react'
import Footer from './Footer'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default function Kids(props) {

    function Notification(){
        NotificationManager.success('Add items in Your cart','Add')
    }


    console.log("kidsProps",props)
    const kids = [
        {id:'k1',  company: "Mango", price: 100, desc: "Printed Cotton Round Neck Boys T-shirt", img: "https://santosh214.github.io/imentus-task/assets/kids/kids1.jpg" },
        {id:'k2', company: "Mango", price: 200, desc: "Printed Cotton Round Neck Girls T-shirt", img: "https://santosh214.github.io/imentus-task/assets/kids/kids2.jpg" },
        {id:'k3', company: "Mango", price: 180, desc: "Boys Printed T-shirt Military Style", img: "https://santosh214.github.io/imentus-task/assets/kids/kids3.jpg" },
        {id:'k4', company: "Mango", price: 300, desc: "Printed Viscose Regular Girl's Jumpsuit", img: "https://santosh214.github.io/imentus-task/assets/kids/kids13.jpg" },
        {id:'k5', company: "Mango", price: 559, desc: "Solid Cotton Blend Girls Casual Dress", img: "https://santosh214.github.io/imentus-task/assets/kids/kids4.jpg" },
        {id:'k6', company: "Mango", price: 699, desc: "Solid Cotton Rich Girls Dungarees", img: "https://santosh214.github.io/imentus-task/assets/kids/kids5.jpg" },
        {id:'k7', company: "Mango", price: 279, desc: "Boys Printed T-Shirt", img: "https://santosh214.github.io/imentus-task/assets/kids/kids6.jpg" },
        {id:'k8', company: "Mango", price: 199, desc: "Printed Cotton Round Neck Girls T-Shirt", img: "https://santosh214.github.io/imentus-task/assets/kids/kids7.jpg" },
      ]
    return (
        <div>
            {/* <!-- Section--> */}
            <section className="py-1">
                <div className="container-fluid px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-5 justify-content-center">
     {kids.map((items,index)=>
                        <div className="col mb-5 border-bottom border-danger pb-3" key={index}>
                            <div className="card h-100">
                                {/* <!-- Sale badge--> */}
                                {/* <!-- Product image--> */}
                                <img className="card-img-top" src={items.img} alt="..." />
                                {/* <!-- Product details--> */}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* <!-- Product name--> */}
                                        <h5 className="fw-bolder">{items.desc}</h5>
                                        {/* <!-- Product reviews--> */}
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        {/* <!-- Product price--> */}
                                        <span>&#x20b9;</span> {items.price}
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><button className="btn btn-outline-dark mt-auto btn-sm" onClick={()=>{props.addToCartHandler({img:items.img,desc:items.desc,price:items.price,id:items.id});Notification();}}>Add to cart</button></div>
                                </div>
                            </div>
                        </div>
)}
</div>
                </div>
            </section>
            <NotificationContainer />

            <Footer />
        </div>
    )
}
