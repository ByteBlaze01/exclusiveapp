import Image from "next/image";

export default function CategorySection() {
    return (
        <>
            <main>
                <div className="">
                    <h1 className="text-lg text-[#DB4444] font-bold">Categorie's</h1>
                    <div className="flex justify-between">
                        <h1 className="md:text-5xl font-bold">Browse By Category</h1>
                        <div className="flex">
                            <div className="bg-[#F5F5F5] mx-2 p-3 rounded-full">
                                <Image
                                    src="/Images/leftArrow.svg"
                                    alt="Vercel Logo"
                                    width={25}
                                    height={25}
                                    priority
                                    className=""
                                />
                            </div>
                            <div className="bg-[#F5F5F5] flex items-center p-3 rounded-full">
                                <Image
                                    src="/Images/rightArrow.svg"
                                    alt="Vercel Logo"
                                    width={25}
                                    height={25}
                                    priority
                                    className=""
                                />
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                        {[1, 2, 3, 4, 5,6].map(card => {
                            return (
                                <div className="border px-10 py-5 mt-5 flex justify-center flex-col items-center">
                                    <Image
                                        src="/Images/CellPhone.svg"
                                        alt="Vercel Logo"
                                        width={60}
                                        height={60}
                                        priority
                                        className=""
                                    />
                                    <p className="text-lg mt-5">Phones</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </>
    );
}