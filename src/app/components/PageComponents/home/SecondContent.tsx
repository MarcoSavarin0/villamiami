import { FaSpa, FaDiaspora, FaSwimmingPool, FaRegBuilding     } from "react-icons/fa";
import { CgGym } from "react-icons/cg";


const arrayContent = [
    {
        logo: <FaSpa />,
        title: "Mediterranean style spa & wellness",
        description: "Inspired by the thermal spas on the Italian island of Ischia, Villa Miami’s spa offers the ultimate in wellness: a stunning relaxation lounge, opulent plunge pools, complemented by saunas, steam rooms, and a variety of treatment rooms.",
    },
    {
        logo: <FaDiaspora />,
        title: "waterside gardens",
        description: "Designed by the landscape architects at Enzo Enea, Villa Miami’s grounds are dotted with a series of private gardens, filled with native flowering trees and meant for moments of contemplation.",
    },
    {
        logo: <FaSwimmingPool />,
        title: "an elevated pool deck",
        description: "Catch rays, socialize, or seek solitude on the 5th floor pool deck. Fully serviced and outfitted with a variety of lounges, this perfectly appointed space creates a sense of refined indulgence.",
    },
    {
        logo: <CgGym />,
        title: "fitness studio",
        description: "A state-of-the-art gym (designed to feel like a spa), complete with the latest fitness equipment and both group and private training available.",
    },
    {
        logo: <FaRegBuilding />,
        title: "MFG restaurant & bar",
        description: "MFG restaurant on site. MFG culinary services at home & an MFG curated lifestyle & an MFG curated lifestyle",
    },
]

const SecondContent = () => {
    return (
        <div className="bg-[#f8f8f8] grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 px-56">
            {arrayContent.map((item, index) => (
                <div key={index} className="flex flex-col justify-between items-center">
                    <div className="flex flex-col justify-center items-center">
                        <div className="w-full h-24 flex justify-start items-center">
                            {item.logo}
                        </div>
                        <div className="w-full flex justify-start">
                        <h3 className="text-lg font-bold uppercase mb-6">{item.title}</h3>
                        </div>
                        <p className="text-center text-[#b4b6bb] mb-6">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SecondContent