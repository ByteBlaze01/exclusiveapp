export default function ArraivalSection() {
    return (
        <main className="mt-10">
            <div className="">
                <h1 className="text-lg text-[#DB4444] font-bold">Featured</h1>
                <div className="flex justify-between">
                    <h1 className="md:text-5xl font-bold">New Arraival</h1>
                </div>

                <div className="grid lg:grid-cols-2 gap-4 mt-2 mb-2">
                    <div className="col-span-1 p-4 bg-black">
                        {/* <h2 className="text-2xl font-bold mb-4">Column 1</h2>
                        <p>This is the content for the first column.</p> */}
                        <img src="/Images/speakerImg.svg" />
                        <div className="-mt-32 md:mx-12">
                            <h1 className="text-white text-2xl font-bold">Play station 5</h1>
                            <h2 className="text-white">Black and White version of the PS5</h2>
                            <h2 className="text-white">comming out on sale</h2>
                            <button className="text-white underline mt-2">Shop Now</button>
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="col-span-1">
                        <div className="grid grid-cols-1">
                            {/* First Column */}
                            <div className="w-full">
                                {/* Content for the first column */}
                                <img src="/Images/woman.svg" className="w-full" />
                                <div className="-mt-32 mx-4">
                                    <h2 className="text-2xl text-white font-bold">Woman Collection's</h2>
                                    <p className="text-white">Featured woman collection that</p>
                                    <p className="text-white">give you another vibe</p>
                                    <button className="text-white underline mt-2">Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-4 mt-5">
                            {/* First Column */}
                            <div className="col-span-1 p-4 bg-black">
                                {/* Content for the first column */}
                                <img src="/Images/smallSpeaker.svg" className="md:mx-10 mx-4" />
                                <div className="-mt-20 mx-4">
                                    <h2 className="text-2xl text-white font-bold">Speaker's</h2>
                                    <p className="text-white">Amezon wireless Speaker</p>
                                    <button className="text-white underline mt-2">Shop Now</button>
                                </div>
                            </div>

                            {/* Second Column */}
                            <div className="col-span-1 p-4 bg-black">
                                {/* Content for the first column */}
                                <img src="/Images/smallSpeaker.svg" className="md:mx-10 mx-4" />
                                <div className="-mt-20 mx-4">
                                    <h2 className="text-2xl text-white font-bold">Speaker's</h2>
                                    <p className="text-white">Amezon wireless Speaker</p>
                                    <button className="text-white underline mt-2">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </main>
    );
}