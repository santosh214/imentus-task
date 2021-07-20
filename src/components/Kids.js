import React from 'react'
export default function Kids() {
    const kids = [
        { company: "Mango", price: 100, desc: "Printed Cotton Round Neck Boys T-shirt", img: "assets/kids/kids1.jpg" },
        { company: "Mango", price: 200, desc: "Printed Cotton Round Neck Girls T-shirt", img: "assets/kids/kids2.jpg" },
        { company: "Mango", price: 180, desc: "Boys Printed T-shirt Military Style", img: "assets/kids/kids3.jpg" },
        { company: "Mango", price: 300, desc: "Printed Viscose Regular Girl's Jumpsuit", img: "assets/kids/kids13.jpg" },
        { company: "Mango", price: 559, desc: "Solid Cotton Blend Girls Casual Dress", img: "assets/kids/kids4.jpg" },
        { company: "Mango", price: 699, desc: "Solid Cotton Rich Girls Dungarees", img: "assets/kids/kids5.jpg" },
        { company: "Mango", price: 279, desc: "Boys Printed T-Shirt", img: "assets/kids/kids6.jpg" },
        { company: "Mango", price: 199, desc: "Printed Cotton Round Neck Girls T-Shirt", img: "assets/kids/kids7.jpg" },
      ]
    return (
        <div>
            {/* <!-- Section--> */}
            <section className="py-1">
                <div className="container-fluid px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
     {kids.map((items,index)=>
                        <div className="col mb-5" key={index}>
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
                                    <div className="text-center"><button className="btn btn-outline-dark mt-auto" href="#">Add to cart</button></div>
                                </div>
                            </div>
                        </div>
)}
</div>
                </div>
            </section>
        </div>
    )
}
