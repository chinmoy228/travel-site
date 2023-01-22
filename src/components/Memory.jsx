import React from 'react'

const Memory = ({memory:{title,text,subtitle,img,experience}}) => {
  return (
    <div className='relative my-16 md:mb-7'>
        <div className='trivago-container flex items-center justify-between gap-16 xl:gap-9 sm:flex-col-reverse'>
            <div className=''>
              <img src={img} alt="img" className=""/>
            </div>
            <div>
                <h1 className='text-5xl lg:text-4xl md:'>{title}</h1>
                <h1 className=''>{subtitle}</h1>
                <p className=''>{text}</p>
            </div>
           
        </div>

    </div>
  )
}

export default Memory