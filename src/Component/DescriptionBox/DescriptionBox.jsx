import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>An  e-commerce website is a digital platform where businesses can promote and sell their products or services online.
            It combines marketing strategies with technology to reach a broader audience, enabling customers to browse, select,
            and purchase items directly from the website, often without the need for direct interaction with the seller.
            This online presence helps businesses grow by making their products or services more accessible to potential customers,
            increasing sales opportunities, and building brand recognition. The convenience of e-commerce allows customers to shop at any time,
            making the process more efficient and user-friendly.</p>
            <p>E-commerce website typically display products or services along with detailed descriptions, images and any available variations(size, colour)</p>
        </div>
    </div>
  )
}

export default DescriptionBox