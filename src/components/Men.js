import React from 'react'
import Footer from './Footer'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


export default function Men(props) {
    function Notification(){
        NotificationManager.success('Add items in Your cart','Add')
    }
    
    console.warn("menprops",props)
    const men=[
        {id:'m1',company:"MUFTI",price:1700,desc:"Checks Cotton Slim Fit Mens Casual Shirt",img:"https://santosh214.github.io/imentus-task/assets/men/men1.jpg"},
        {id:'m2',company:"FILA CASUAL",price:809,desc:"Cotton Mens T-Shirt",img:"https://santosh214.github.io/imentus-task/assets/men/men2.jpg"},
        {id:'m3',company:"JACK & JONES",price:899,desc:"Mens Slim Fit Printed Round Neck T-Shirt",img:"https://santosh214.github.io/imentus-task/assets/men/men3.jpg"},
        {id:'m4',company:"FILA CASUAL",price:900,desc:"Cotton Mens T-Shirt",img:"https://santosh214.github.io/imentus-task/assets/men/men13.jpg"},
        {id:'m5',company:"TOMMY HILFIGER",price:1999,desc:"Solid Cotton Regular Fit Mens T-Shirt",img:"https://santosh214.github.io/imentus-task/assets/men/men4.jpg"},
        {id:'m6',company:"LEE COOPER",price:1399,desc:"Mid Tone Cotton Straight Fit Mens Jeans",img:"https://santosh214.github.io/imentus-task/assets/men/men5.jpg"},
        {id:'m7',company:"SPYKAR",price:1699,desc:"Printed Twill Slim Fit Mens Casual Shirt",img:"https://santosh214.github.io/imentus-task/assets/men/men6.jpg"},
        {id:'m8',company:"FRATINI",price:1049,desc:"Mens Slim Fit Checks Cutaway Collar Casual Shirt",img:"https://santosh214.github.io/imentus-task/assets/men/men7.jpg"},
    ]
    return (
        <div>
            {/* <!-- Section--> */}
            <section className="py-1">
                <div className="container-fluid px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-5 justify-content-center">
     {men.map((items,index)=>
                        <div className="col mb-5  pb-3" key={index} >
                            <div className="card h-100">
                                {/* <!-- Sale badge--> */}
                                {/* <!-- Product image--> */}
                                <img className="card-img-top" src={items.img} alt="..." />
                                {/* <!-- Product details--> */}
                                <div className="card-body p-1">
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
                                <div className="card-footer p-2 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><button className="btn btn-outline-dark mt-auto btn-sm" onClick={()=>{props.addToCartHandler({img:items.img,desc:items.desc,price:items.price,id:items.id});Notification();}}>Add to cart</button></div>
                                </div>
                            </div>

                        </div>
                        
)}

</div>
                </div>
            </section>
            <NotificationContainer />

            <Footer/>
        </div>
    )
}
