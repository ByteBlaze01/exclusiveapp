import { CiHeart } from "react-icons/ci";
 
 export default function ProductDetail() {
   return (
     <main>
       <div className="grid md:grid-cols-7 gap-4">
         <div className="grid col-span-4  gap-4 bg-red-500">
           <div className="col-span-1 p-4"></div>
         </div>
         <div className="col-span-3 p-4  mb-6">
           <div className="">
             <div className="border-b-2  border-gray-500 my-4">
               <h1 className="md:text-2xl font-bold">Havic HV G-92 Gamepad</h1>
               <p className="text-xl mt-3">$192.00</p>
               <p className="text-lg mt-3 mb-5">
                 PlayStation 5 Controller Skin High quality vinyl with air
                 channel adhesive for easy bubble free install & mess free
                 removal Pressure sensitive.
               </p>
             </div>
             <div className="">
               <div className="">
                 <h1>Colours : </h1>
               </div>
               <div className="flex mt-5">
                 <h1 className="mt-2">Size : </h1>
                 <div className="flex">
                   <button className="px-2 py-1 border border-gray-500 mx-3 rounded">
                     XS
                   </button>
                   <button className="px-2 py-1 border border-gray-500 mx-3 rounded">
                     S
                   </button>
                   <button className="px-2 py-1 border border-gray-500 mx-3 rounded">
                     M
                   </button>
                   <button className="px-2 py-1 border border-gray-500 mx-3 rounded">
                     L
                   </button>
                   <button className="px-2 py-1 border border-gray-500 mx-3 rounded">
                     XL
                   </button>
                 </div>
               </div>
               <div className="flex mt-5">
                 <div className="flex border border-gray-500 py-2 mt-3">
                   <button className="px-4">+</button>
                   <p className="mx-3 px-2">10</p>
                   <button className="px-4 ">-</button>
                 </div>
                 <button className="px-10 mt-3 bg-[#DB4444] text-white mx-3">
                   Buy Now
                 </button>
                 <div className="border border-gray-500 rounded mt-3 px-3 cursor-pointer">
                   <CiHeart className="text-3xl mt-1 " />
                 </div>
               </div>
 
               <div className="mt-10">
                 <div className="flex border py-5">
                   <div className="">
                     <img src="/Images/CellPhone.svg" />
                   </div>
                   <div className="flex flex-col">
                     <h1>Free Delivery</h1>
                     <h1 className="mt-2">
                       Enter your postal code for Delivery Availability
                     </h1>
                   </div>
                 </div>
                 <div className="flex border py-5">
                   <div className="">
                     <img src="/Images/CellPhone.svg" />
                   </div>
                   <div className="flex flex-col">
                     <h1>Return Delivery</h1>
                     <h1 className="mt-2">Free 30 days Delivery Returns</h1>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </main>
   );
 }