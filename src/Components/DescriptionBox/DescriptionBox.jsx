import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website serves as a virtual marketplace that operates 24/7, allowing buyers and sellers to interact without geographical limitations. It supports various business models like B2C (business to consumer), B2B (business to business), and C2C (consumer to consumer). These websites often integrate advanced technologies such as AI-driven product recommendations, chatbots for customer support, and inventory management systems to streamline operations. With the growing emphasis on convenience, personalized experiences, and secure transactions, e-commerce websites have transformed the way people shop and how businesses operate in the digital age.</p>
             <p>An e-commerce website displays a wide range of information and features to provide a seamless online shopping experience. It typically includes a homepage with promotional banners, featured products, and quick links to popular categories. Product listing pages showcase items with images, names, prices, and filters to help users browse easily. When a user clicks on a product, a detailed product page appears with specifications, images, pricing, availability, and customer reviews. The site also includes a shopping cart and a secure checkout page where users can enter shipping details and payment information.</p>
        </div>
    </div>
  )
}

export default DescriptionBox
