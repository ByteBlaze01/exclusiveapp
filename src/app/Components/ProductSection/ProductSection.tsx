import ProductCard from "../ProductCard/ProductCard";
import joyStick from "../../../../public/Images/joyStick.svg"
export default function ProductSection() {
    return (
        <main>
            <div className="">
                <h1 className="text-lg text-[#DB4444] font-bold">Today's</h1>
                <div className="md:flex items-end">
                    <h1 className="md:text-5xl font-bold mt-10">Flash Sales</h1>
                    <div className="md:mx-20 flex">
                        <div className="sm:mx-10">
                            <h1 className="text-lg font-bold">Days</h1>
                            <h1 className="text-6xl font-bold">03</h1>
                        </div>
                        <div className="sm:mx-10">
                            <h1 className="text-lg font-bold">Hours</h1>
                            <h1 className="text-6xl font-bold">12</h1>
                        </div>
                        <div className="sm:mx-10">
                            <h1 className="text-lg font-bold">Minutes</h1>
                            <h1 className="text-6xl font-bold">43</h1>
                        </div>
                        <div className="sm:mx-10">
                            <h1 className="text-lg font-bold">Seconds</h1>
                            <h1 className="text-6xl font-bold">43</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map(card => {
                    return (
                        <ProductCard key={card} image={joyStick}/>
                    );
                })}
            </div>
            <div className="flex justify-center mt-4 mb-4">
                <button className="text-white bg-red-500 px-10 py-4 rounded-xl">View All Products</button>
            </div>
            
        </main>
    );
}