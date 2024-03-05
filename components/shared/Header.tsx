import React from 'react'

interface headerProps {
    title: string,
    subtitle?: string
}

const Header = (props:headerProps) => {
  return (
    <>
    <h2 className='h2-bold text-dark-600'>
        {props.title}
    </h2>
    {props.subtitle && <p className='p-16-regular mt-4'>{props.subtitle}</p>}    
    </>
  )
}

export default Header