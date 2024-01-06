import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black px-8 py-4 md:px-10 md:py-10'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                <div className="">
                    <h1 className='text-white text-xl font-bold'>Exclusive</h1>
                    <p className='text-white mt-4 font-semibold'>Subscribe</p>
                    <p className='text-white mt-4'>Get 10% off your first order</p>
                    <input type="text" className='mt-6 text-white bg-black border border-white outline-white px-2 py-2' placeholder='Enter your email' />
                </div>
                <div className="">
                    <p className='text-white mt-4 font-semibold'>Support</p>
                    <p className='text-white mt-4'>111 Bijoy sarani, Dhaka,</p>
                    <p className='text-white'>DH 1515, Bangladesh.</p>
                    <p className='text-white mt-4'>exclusive@gmail.com</p>
                    <p className='text-white mt-4'>+88015-88888-9999</p>
                </div>
                <div className="">
                    <p className='text-white mt-4 font-semibold'>Account</p>
                    <p className='text-white mt-4'>My Account</p>
                    <p className='text-white mt-4'>Login / Register</p>
                    <p className='text-white mt-4'>Cart</p>
                    <p className='text-white mt-4'>Wishlist</p>
                    <p className='text-white mt-4'>Shop</p>
                </div>
                <div className="">
                    <p className='text-white mt-4 font-semibold'>Quick Link</p>
                    <p className='text-white mt-4'>Privacy Policy</p>
                    <p className='text-white mt-4'>Terms Of Use</p>
                    <p className='text-white mt-4'>FAQ</p>
                    <p className='text-white mt-4'>Contact</p>
                </div>
                <div className="p-4">Item 5</div>
            </div>
        </div>
    )
}

export default Footer