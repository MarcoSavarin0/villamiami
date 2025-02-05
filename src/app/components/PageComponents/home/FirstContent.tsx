const FirstContent = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="bg-cover bg-center h-[90vh] lg:w-5/12" style={{ backgroundImage: `url(/11-1.webp)` }}>
                <div className="opacity-0"><p>Villa Miami</p> </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:w-9/12">
                <div className="px-24">
                    <h2 className="text-xl font-bold text-center text-[#ff7400] uppercase mb-20">
                        an invitation to the best of miami
                    </h2>
                    <h3 className="text-xl font-bold text-center uppercase mb-6">
                        The Building
                        and Visionary
                    </h3>
                    <p className="text-center text-[#b4b6bb] mb-6">
                        This is an entirely new proposal for how to live in Miami. These aren’t just views of the water. This is an open window with a breeze coming off the bay. Dinner on the veranda with the sunset refracted in the water. A home steeped in romance and warmth with a buzzing city waiting beyond.
                    </p>
                </div>
            </div>
            <div className="bg-cover bg-center h-[90vh] lg:w-5/12" style={{ backgroundImage: `url(/193.webp)` }}>
                <div className="opacity-0"><p>Villa Miami</p> </div>
            </div>
        </div>
    )
}

export default FirstContent