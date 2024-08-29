import React from 'react'

function Footer() {
  return (
    <div className='bg-black flex justify-evenly text-md py-12 text-white'>
      <div className='flex flex-col gap-y-2'><h1 className='text-lg'>Abstract</h1><p>Branches</p></div>
      <div className='flex flex-col gap-y-2'><h1 className='text-lg'>Resources</h1><p>Blog</p><p>Branches</p><p>Help Center</p><p>Release Notes</p><p>Status</p></div>
      <div className='flex flex-col gap-y-2'><h1 className='text-lg'>Community</h1><p>Twitter</p><p>LinkedIn</p><p>Facebook</p><p>Dribble</p><p>Podcast</p></div>
      <div className='flex flex-col gap-y-2'><h1 className='text-lg'>Company</h1><p>About Us</p><p>Careers</p><p>Legal</p><h2 className='text-lg'>Contact Us</h2><p>info@abstract.com</p></div>
      <div className='flex flex-col gap-y-2'><h1>@copyright</h1><p>Abstract Studio Design, Inc.</p><p>All rights reserved</p></div>
    </div>
  )
}

export default Footer
