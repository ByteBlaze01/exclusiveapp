import Image from "next/image";

export const Navbar = () => {
    return (
        <>
            <div className="flex justify-between m-5 bg-white border-b-2 pb-3">
                <div className="mb-4 md:mb-0">
                    <h1 className="font-bold text-2xl">Exclusive</h1>
                </div>

                <div className="md:ml-40 mb-4 md:mb-0 hidden md:flex">
                    <ul className="flex px-5 mx-2 md:mx-5">
                        <li className="mx-2 md:mx-5 cursor-pointer">Home</li>
                        <li className="mx-2 md:mx-5 cursor-pointer">Contact</li>
                        <li className="mx-2 md:mx-5 cursor-pointer">About</li>
                        <li className="mx-2 md:mx-5 cursor-pointer">SignUp</li>
                    </ul>
                </div>

                <div className="flex">
                    <div className="hidden sm:flex relative">
                        <input
                            type="text"
                            placeholder="What are you looking for..."
                            className="w-[200px] pl-4 pr-8 md:pr-10 py-2 border border-gray-300 focus:outline-none"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <Image
                                src="/Images/searchIcon.svg"
                                alt="Search Icon"
                                width={20}
                                height={20}
                                priority
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <Image
                            src="/Images/wishlistIcon.svg"
                            alt="Wishlist Icon"
                            width={20}
                            height={20}
                            priority
                            className="mx-2 md:mx-4 cursor-pointer"
                        />
                        <Image
                            src="/Images/carrtIcon.svg"
                            alt="Cart Icon"
                            width={25}
                            height={25}
                            priority
                            className="mx-2 md:mx-4 cursor-pointer"
                        />
                    </div>
                </div>
            </div>

        </>
    );
}