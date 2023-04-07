import React from 'react'
import ProductViewSection from '../components/ProductViewSection'
import FilterView from '../components/FilterView'

function AllProduct( {products, filterColor, filterMaterial}) {
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
        <ProductViewSection products={products} color={filterColor} material= {filterMaterial}/>
    </div>
  )
}

export default AllProduct