import React from 'react'
export default function Men() {
    const men=[
        {company:"MUFTI",price:1700,desc:"Checks Cotton Slim Fit Mens Casual Shirt",img:"assets/men/men1.jpg"},
        {company:"FILA CASUAL",price:809,desc:"Cotton Mens T-Shirt",img:"assets/men/men2.jpg"},
        {company:"JACK & JONES",price:899,desc:"Mens Slim Fit Printed Round Neck T-Shirt",img:"assets/men/men3.jpg"},
        {company:"FILA CASUAL",price:900,desc:"Cotton Mens T-Shirt",img:"assets/men/men13.jpg"},
        {company:"TOMMY HILFIGER",price:1999,desc:"Solid Cotton Regular Fit Mens T-Shirt",img:"assets/men/men4.jpg"},
        {company:"LEE COOPER",price:1399,desc:"Mid Tone Cotton Straight Fit Mens Jeans",img:"assets/men/men5.jpg"},
        {company:"SPYKAR",price:1699,desc:"Printed Twill Slim Fit Mens Casual Shirt",img:"assets/men/men6.jpg"},
        {company:"FRATINI",price:1049,desc:"Mens Slim Fit Checks Cutaway Collar Casual Shirt",img:"assets/men/men7.jpg"},
        {company:"LIFE",price:629,desc:"Solid Linen Cotton Regular Fit Mens Shirt",img:"assets/men/men8.jpg"},
    ]
    return (
        <div>
            {/* <!-- Section--> */}
            <section className="py-1">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
     {men.map((items,index)=>
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
