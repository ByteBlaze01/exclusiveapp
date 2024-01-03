"use client"
import Image from "next/image";

export default function ProductCard({image}:any) {
    return (
        <main>
            <div className="p-3 relative">
                <div className="bg-[#F5F5F5] group relative">
                    <div className="p-10 cursor-pointer">
                        <div className="">
                            <Image
                                src={image}
                                alt="Vercel Logo"
                                width={0}
                                height={0}
                                priority
                                className="h-40 w-40 xl:ml-10"
                            />
                        </div>
                       
                        <div className="absolute top-5 right-5 bg-white rounded-full p-2">
                            <Image
                                src="/Images/wishlistIcon.svg"
                                alt="Vercel Logo"
                                width={25}
                                height={10}
                                priority
                                className=""
                            />
                        </div>

                        <div className="absolute top-14 mt-2 right-5 bg-white rounded-full p-2">
                            <Image
                                src="/Images/productView.svg"
                                alt="Vercel Logo"
                                width={25}
                                height={25}
                                priority
                                className=""
                            />
                        </div>
                    </div>
                    <div className="bg-black py-2 text-center hidden group-hover:block absolute w-full bottom-3">
                            <button className="text-white font-semibold">Add To Cart</button>
                        </div>
                </div>
                <div className="">
                    <h1 className="uppercase ">havit hv-g92 gamepad</h1>
                    <div className="flex my-1">
                        <p className="text-[#DB4444]">$120</p>
                        <p className="text-gray-500 ml-5">$160</p>
                    </div>
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map(star => {
                            return (
                                <Image
                                    src="/Images/StarIcon.svg"
                                    alt="Vercel Logo"
                                    width={20}
                                    height={20}
                                    priority
                                    className="ml-1"
                                />
                            );
                        })}
                        <p className="mx-1 text-gray-500 font-bold">(88)</p>
                    </div>

                </div>
                <div className="bg-red-500 px-4 w-[60px] rounded py-1 absolute top-8 left-7">
                    <p className="text-white mr-1">-35%</p>
                </div>

                
            </div>
        </main>
    );
}