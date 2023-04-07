import React, { useEffect, useState } from 'react'
import ProductViewSection from '../components/ProductViewSection';

function FeaturedProduct({products, featuredProducts, filterColor, filterMaterial}) {


    var filterFeature = products.filter(function (o1) {
        return featuredProducts.some(function (o2) {
            return o1.id === o2.productId            ; 
       });
    });


  return (
    <div className='flex p-[45px]'>
        <div>

 
            <div className='font-bold mb-[32px]'> Filter </div>
            <div className='mb-[8px] font-bold'>
                Materials
            </div>
        {filterMaterial.map((item, index)=> {
        return(
            <ul key={index} className='mb-[8px]'>
            <li>{item.name}</li>
            </ul>
        )
        })}
            
            <div className='mb-[8px] font-bold'>Color</div>
        {filterColor.map((item)=>{
        return(
            <ul key={item.id} className='mb-[8px]'>
            <li>{item.name}</li>
            </ul>
        )
        })}
    

        </div>      
        <ProductViewSection products={filterFeature}/>
    </div>
  )
}

export default FeaturedProduct