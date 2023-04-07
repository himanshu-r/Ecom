import React from 'react'
import FilterView from './FilterView'
import SingleProduct from './SingleProduct'

function ProductViewSection({products, color, material}) {
  // console.log(products)
  // console.log(color)

  const getProductByColor = (id) =>{
    return products.filter((x) => x.colorId === id)
    
  }
  const getProductByMaterial = (id) => {
    return products.filter((x) => x.materialId === id)
  }


  return (

      
      
       <div className='ml-[140px]' >
          <SingleProduct products ={products} />
        </div>

      
  )
}

export default ProductViewSection