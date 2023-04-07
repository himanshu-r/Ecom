import React from 'react'


function SingleProduct({products}) {
  return (
    <div className='flex flex-wrap gap-[100px]'>
    {products.map((product) => {

        return(
            <div key={product.id}  className="group relative">
            <div className="w-full overflow-hidden rounded-md bg-[#f8f7f7] lg:aspect-none group-hover:opacity-50">
              <img
                src={product.image}
                alt="product-image"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4">
              <div>
                <h3 className="text-[18px] text-[#131414]-500 font-medium	">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0  " />
                    {product.name}
                  </a>
                </h3>
                <p className="text-[14px]">RED : Cotton </p>
              </div>
              <p className="mt-2 text-[14px] font-medium text-[#5A112B]"> INR {product.price}</p>
            </div>
          </div>

        )

        

    })}
      
          
      </div>
  )
}

export default SingleProduct