import React from "react";
import user1 from "../assets/user-cover-1.png";
import user2 from "../assets/user-cover-2.png";
import user3 from "../assets/user-cover-3.png";
import user4 from "../assets/user-cover-4.png";

import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import twitterIcon from "../assets/twitter.svg";

const teamMembers = [
  {
    name: "Julian Jameson",
    profession: "Teacher",
    img: user1,
    socials: [
      { icon: facebookIcon, href: "#" },
      { icon: instagramIcon, href: "#" },
      { icon: twitterIcon, href: "#" },
    ],
  },
  {
    name: "Alexandra Smith",
    profession: "Instructor",
    img: user2,
    socials: [
      { icon: facebookIcon, href: "#" },
      { icon: instagramIcon, href: "#" },
      { icon: twitterIcon, href: "#" },
    ],
  },
  {
    name: "Michael Johnson",
    profession: "Professor",
    img: user3,
    socials: [
      { icon: facebookIcon, href: "#" },
      { icon: instagramIcon, href: "#" },
      { icon: twitterIcon, href: "#" },
    ],
  },
  {
    name: "Sarah Williams",
    profession: "Mentor",
    img: user4,
    socials: [
      { icon: facebookIcon, href: "#" },
      { icon: instagramIcon, href: "#" },
      { icon: twitterIcon, href: "#" },
    ],
  },
];

function Downbody() {
  return (
    <div className="bg-white py-20">
      <div className="text-center mb-12">
        <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">Team</p>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Get Quality Education</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
            <img src={member.img} alt={member.name} className="w-full h-80 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{member.profession}</p>
              <div className="flex justify-center gap-4">
                {member.socials.map((social, idx) => (
                  <a key={idx} href={social.href} className="hover:opacity-80 transition">
                    <img src={social.icon} alt="social icon" className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Downbody;
