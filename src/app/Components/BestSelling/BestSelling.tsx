import ProductCard from "../ProductCard/ProductCard";
import handBag from "../../../../public/Images/handBag.svg"
import jblSpeaker from "../../../../public/Images/jblSpeaker.svg"
import Image from "next/image";
export default function BestSelling() {
    return (
        <main className="mt-10">
            <div className="">
                <h1 className="text-lg text-[#DB4444] font-bold">This Month</h1>
                <div className="flex justify-between">
                    <h1 className="md:text-5xl font-bold">Best Selling Product</h1>

                    <div className="flex justify-center mt-4 mb-4">
                        <button className="text-white bg-red-500 px-10 py-4 rounded-xl">View All</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map(card => {
                        return (
                            <ProductCard key={card} image={handBag} />
                        );
                    })}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-black p-16">
                <div className="">
                    <h1 className="text-[#00FF66] font-bold">Categories</h1>

                    <h1 className="sm:text-6xl text-white mt-5 font-semibold">Enhance Your Music Experience</h1>
                    <div className="flex">
                        <div className="bg-white w-24 rounded-full h-24 flex justify-center items-center flex-col mt-10 mx-4">
                            <span>23</span>
                            <span>Hours</span>
                        </div>
                        <div className="bg-white w-24 rounded-full h-24 flex justify-center items-center flex-col mt-10 mx-4">
                            <span>05</span>
                            <span>Days</span>
                        </div>
                        <div className="bg-white w-24 rounded-full h-24 flex justify-center items-center flex-col mt-10 mx-4">
                            <span>09</span>
                            <span>Minutes</span>
                        </div>
                        <div className="bg-white w-24 rounded-full h-24 flex justify-center items-center flex-col mt-10 mx-4">
                            <span>11</span>
                            <span>Seconds</span>
                        </div>

                    </div>

                    <div className="mt-10">
                        <button className="text-white bg-[#00FF66] px-10 py-4 rounded-lg">View All Products</button>
                    </div>

                </div>
                <div className="p-4">
                    <Image
                        src={jblSpeaker}
                        alt="Vercel Logo"
                        width={0}
                        height={0}
                        priority
                        className="h-auto w-auto ml-10"
                    />
                </div>
            </div>
        </main>
    );
}