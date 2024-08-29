import React from 'react'

function Navbar() {
    return (
        <div className='bg-black py-4'>
            <div className='flex w-full justify-start items-center'>
                <div className='flex justify-start items-center' style={{marginLeft: '120px'}}>
                    {/* replace this with original logo */}
                    <div className='bg-white rounded-full me-5 py-1 px-3 text-white'>0</div>
                    <div className='text-white'><span>Abstract</span><span className='mx-2'>|</span><span>Help Center</span></div>
                </div>
                <div style={{marginLeft: '705px'}}><button className='border border-md border-gray-500 rounded-md text-white flex items-center justify-center bg-gray-900 py-1 px-3'>Submit a request</button></div>
            </div>
        </div>
    )
}

export default Navbar
