'use client';

import Image from "next/image";

const team = [
    {
        name: "Luke desmaris",
        title: "Chief Executive Officer",
        desc: "Luke has been a trader for 5 years and has built up many different strategies.",
        image: "/images/luke.jpg",
    },
    {
        name: "Jarvis Walsh",
        title: "Assistant Manager",
        desc: "Jarvis is a proactive individual who is a master in the financial markets.",
        image: "/images/jarvis.jpg",
    },
    {
        name: "Javier Hyson",
        title: "Assistant Manager",
        desc: "Javier is a well skilled trader he provides weekly insights into current market.",
        image: "/images/javier.jpg",
    },
];

export default function TeamSection()
{
    return (
        <section className="bg-black text-white px-6 sm:px-12 py-16">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold">
                    Putting our clients first <span className="text-white relative underline-animated">since 2016</span>
                </h2>
                <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                    For more than 5 years, we’ve been empowering clients by helping them take control of their financial lives.
                </p>
            </div>

            {/* White box with team */}
            <div className="bg-white text-black rounded-lg px-6 sm:px-12 py-10 max-w-6xl mx-auto">
                <h3 className="text-center text-2xl font-semibold mb-4">Trust the Professionals</h3>
                <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
                    We are a group of passionate, independent thinkers who never stop exploring new ways to improve trading
                    for the self-directed investor.
                </p>

                {/* Team Members */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-2">
                            <div className="w-28 h-28 relative rounded-full overflow-hidden">
                                <Image src={member.image} alt={member.name} fill className="object-cover" />
                            </div>
                            <p className="text-xs text-gray-500 uppercase font-medium">{member.title}</p>
                            <h4 className="font-bold">{member.name}</h4>
                            <p className="text-sm text-gray-600 max-w-xs">{member.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .underline-animated::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 4px;
          background: red;
          left: 0;
          bottom: -2px;
        }
      `}</style>
        </section>
    );
}
