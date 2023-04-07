import React from 'react'
import FilterView from './FilterView'
import SingleProduct from './SingleProduct'

function ProductViewSection({products}) {
  // console.log(products)
  // console.log(color)

  return (

      
      
       <div className='ml-[140px]' >
          <SingleProduct products ={products} />
        </div>

      
  )
}

export default ProductViewSection