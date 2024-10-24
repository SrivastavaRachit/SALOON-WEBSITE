import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf } from 'react-icons/fa';
import { GiRabbit, GiNailedHead } from 'react-icons/gi';
import { AiOutlineUser } from 'react-icons/ai';
import { BsHeart } from 'react-icons/bs';
import { MdOutlineSanitizer } from 'react-icons/md';


const Philosophy = () => {
  const data = [
    {
      icon: <FaLeaf className="text-3xl text-coral" />,
      title: 'Beauty Cosmetic',
      description:
        'All cosmetic formulas are organic. The majority of all ingredients is natural.',
    },
    {
      icon: <GiRabbit className="text-3xl text-coral" />,
      title: 'Cruelty-Free',
      description:
        'Even nowadays some cosmetic products are tested on animals. That is not the case for us.',
    },
    {
      icon: <MdOutlineSanitizer className="text-3xl text-coral" />,
      title: 'Professional Products',
      description:
        'All products we use are professional and have proven efficiency. No compromises.',
    },
    {
      icon: <GiNailedHead className="text-3xl text-coral" />,
      title: 'Non-Toxic Formula',
      description:
        'Don’t worry, all our nail polishes and other products are non-toxic. We do care about you and our specialists.',
    },
    {
      icon: <AiOutlineUser className="text-3xl text-coral" />,
      title: 'Personalized Experience',
      description:
        'Each guest is our favorite guest. Come and make sure that our services are exceptional.',
    },
    {
      icon: <BsHeart className="text-3xl text-coral" />,
      title: 'We Love What We Do',
      description:
        'People that you’ll meet in our studio are doing the job they love. Come and make sure there is a difference.',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12" style={{ fontFamily: 'Zeyada' }}>Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
        <button className="bg-peach text-black font-bold px-4 py-2 rounded-lg hover:bg-coral transition duration-300 mt-8">
          <Link to='/book'>
          Book an Appointment
          </Link>
        </button>
      </div>

    </section>
  );
};

export default Philosophy;