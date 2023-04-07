import React, { useState } from 'react'
import ProductViewSection from '../components/ProductViewSection'

function AllProduct( {products, filterColor, filterMaterial}) {

    const handleClick = e => {
        console.log(e.index);
      };

    const getProductByColor = (id) =>{
        const fcolor = products.filter((x) => x.colorId === id)
        return console.log(fcolor)
        
      }
    const getProductByMaterial = (id) => {
        const filter = products.filter((x) => x.materialId === id)
        return console.log(filter)
    }
  return (
    <div className='flex p-[45px]'>
        <div>
            <div className='font-bold mb-[32px]'> Filter </div>
            <div className='mb-[8px] font-bold'>
                Materials
            </div>
        {filterMaterial.map((item)=> {
        return(
            <div key={item.id} className='mb-[8px]'>
            <a onClick={() => {getProductByMaterial(item.id)}}>{item.name}</a>
            </div>
        )
        })}
            
            <div className='mb-[8px] font-bold'>Color</div>
        {filterColor.map((item)=>{
        return(
            <div key={item.id} className='mb-[8px]'>
            <a onClick={()=> {getProductByColor(item.id)}}>{item.name}</a>
            </div>
        )
        })}
    

        </div>
        <ProductViewSection products={products} />
    </div>
  )
}

export default AllProduct