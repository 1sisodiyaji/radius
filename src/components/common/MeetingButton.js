import React from 'react'

const MeetingButton = ({text}) => {
  return (
    <>
    <div className="">
      <a className="btn bg-[#C2E9DB] hover:bg-[#219B9D] hover:text-white font-light text-black" href='https://calendly.com/radius-ois/radius-ois-product-demonstration?month=2024-11' target='blank'>{text}</a>
    </div>
    </>
  )
}

export default MeetingButton