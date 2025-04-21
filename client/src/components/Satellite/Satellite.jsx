import React from 'react';
import satelitImg from '../../assets/satelite2.jpg';

const Satelite = () => {
  return (
    <section className="bg-blue-500 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Container */}
          <div data-aos="zoom-in" className="order-2 md:order-1">
            <img 
              src={satelitImg}
              alt="Satellite Mission"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg h-auto max-h-[350px] object-cover"
            />
          </div>

          {/* Content Container */}
          <div 
            className="space-y-4 p-6 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 rounded-br-xl bg-blue-600/50 shadow-md order-1 md:order-2"
          >
            <p 
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-sky-200 font-semibold uppercase tracking-wider"
            >
              Our Mission
            </p>

            <h1
              data-aos="fade-up"
              data-aos-delay="500"
              className="uppercase text-4xl md:text-5xl font-bold leading-tight"
            >
              Mission
            </h1>

            <p 
              data-aos="fade-up" 
              data-aos-delay="700"
              className="text-blue-50 leading-relaxed"
            >
              The mission of this project is to develop an engaging mental wellness platform that supports daily well-being through interactive exercises and personalized insights. By combining gamified elements with mindfulness practices, we aim to empower users to build consistent wellness habits, access supportive community connections, and make mental health resources accessible and enjoyable.
            </p>
            
            <button
              data-aos="fade-up"
              data-aos-delay="900"
              className="bg-blue-400 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Satelite;