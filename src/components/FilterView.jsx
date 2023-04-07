import React from 'react'

function FilterView({material, color}) {

  return (
    <>
    <div className='font-bold mb-[32px]'> Filter </div>
    <div className='mb-[8px] font-bold'>
        Materials
    </div>
{material.map((item, index)=> {
  return(
    <ul key={index} className='mb-[8px]'>
      <li>{item.name}</li>
    </ul>
  )
})}
    
    <div className='mb-[8px] font-bold'>Color</div>
{color.map((item)=>{
  return(
    <ul key={item.id} className='mb-[8px]'>
      <li>{item.name}</li>
    </ul>
  )
})}
    
    </>

  )
}

export default FilterView