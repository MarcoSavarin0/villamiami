const FirstContent = () => {
    return (
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            <div className="bg-cover bg-center h-[60vh] w-full lg:w-5/12" style={{ backgroundImage: `url(/11-1.webp)` }}>
                <div className="opacity-0"><p>Villa Miami</p> </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full lg:w-9/12 px-6 lg:px-24 py-10">
                <h2 className="text-lg lg:text-xl font-bold text-center text-[#ff7400] uppercase mb-10 lg:mb-20">
                    an invitation to the best of miami
                </h2>
                <h3 className="text-lg lg:text-xl font-bold text-center uppercase mb-4 lg:mb-6">
                    The Building and Visionary
                </h3>
                <p className="text-center text-[#b4b6bb] mb-4 lg:mb-6">
                    This is an entirely new proposal for how to live in Miami. These aren’t just views of the water. This is an open window with a breeze coming off the bay. Dinner on the veranda with the sunset refracted in the water. A home steeped in romance and warmth with a buzzing city waiting beyond.
                </p>
            </div>
            <div className="bg-cover bg-center h-[60vh] w-full lg:w-5/12" style={{ backgroundImage: `url(/193.webp)` }}>
                <div className="opacity-0"><p>Villa Miami</p> </div>
            </div>
        </div>
    )
}

export default FirstContent;

