//without rounding circle 

/*
import React, { useState, useEffect } from 'react';

// Create a stylized horizon/surface element instead of using an image
const StylizedHorizon = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden">
     
      <svg 
        viewBox="0 0 1200 200" 
        preserveAspectRatio="none" 
        className="w-full h-48 md:h-60 brightness-50 transform translate-y-4"
      >
        <path 
          d="M0,100 C300,180 900,30 1200,100 L1200,200 L0,200 Z" 
          fill="#2d3748" 
        />
        <path 
          d="M0,120 C200,150 700,90 1200,120 L1200,200 L0,200 Z" 
          fill="#1a202c" 
        />
        
       
        {Array(10).fill().map((_, i) => (
          <circle 
            key={i}
            cx={100 + i * 120} 
            cy={150 + (i % 3) * 10} 
            r={2 + (i % 5) * 2}
            fill="#4a5568"
          />
        ))}
      </svg>
    </div>
  );
};

const HeroParticle = ({ index }) => {
  // Different sizes for particles
  const sizes = ['w-1 h-1', 'w-2 h-2', 'w-3 h-3'];
  const opacities = ['opacity-20', 'opacity-30', 'opacity-50', 'opacity-70'];
  const animations = ['animate-pulse', 'animate-bounce', 'animate-ping'];
  
  return (
    <div 
      className={`absolute rounded-full bg-blue-400 ${sizes[index % sizes.length]} ${opacities[index % opacities.length]}`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${3 + Math.random() * 4}s`,
        animationDelay: `${Math.random() * 5}s`,
        transform: `translateY(${Math.random() * 10}px)`,
        animation: `pulse ${3 + Math.random() * 2}s infinite ease-in-out ${Math.random() * 2}s`
      }}
    />
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black">
     
      <div className="absolute inset-0 z-10">
        {Array(30).fill().map((_, i) => (
          <HeroParticle key={i} index={i} />
        ))}
      </div>
      
     
      <div className="relative z-20 h-full flex justify-center items-center px-4 md:px-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
          
        
          <div className={`text-white space-y-6 max-w-2xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 mb-2">
              <p className="text-blue-300 text-sm font-medium">Mental Health Awareness</p>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
              MIND'SCOOL
            </h1>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Mind'Scool is a non-profit movement empowering awareness for mental health. 
              We help people understand their mental condition and connect with professional help.
              <span className="block mt-4 text-sm text-blue-200">
                This is not a site for personal disclosure of suicidal thoughts or behaviors. 
                If you are in crisis, please call 112/911 or go to your nearest emergency department.
              </span>
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
                <span className="relative z-10">GET STARTED</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </button>
              
              <button className="relative overflow-hidden bg-transparent border border-blue-400 text-blue-300 hover:text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:border-blue-300">
                <span className="relative z-10">LEARN MORE</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/30 transform scale-x-0 hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </button>
            </div>
          </div>
          
         
          <div className={`hidden sm:flex items-center justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="relative w-full h-96">
            
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  
                  <div className="absolute inset-0 rounded-full border-4 border-blue-400/20 animate-pulse"></div>
                  <div className="absolute inset-4 rounded-full border-2 border-blue-300/30 animate-spin" style={{animationDuration: '10s'}}></div>
                  <div className="absolute inset-8 rounded-full border border-blue-200/40 animate-pulse" style={{animationDuration: '4s'}}></div>
                  
              
                  {Array(8).fill().map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                      style={{
                        top: `${50 + 40 * Math.cos(i * Math.PI / 4)}%`,
                        left: `${50 + 40 * Math.sin(i * Math.PI / 4)}%`,
                        boxShadow: '0 0 15px 5px rgba(96, 165, 250, 0.3)',
                        animationDuration: `${2 + i * 0.5}s`
                      }}
                    ></div>
                  ))}
                  
             
                  <svg className="absolute inset-0 w-full h-full">
                    {Array(6).fill().map((_, i) => {
                      const startAngle = Math.random() * Math.PI * 2;
                      const endAngle = startAngle + Math.PI + Math.random() * Math.PI;
                      const startRadius = 32 + Math.random() * 10;
                      const endRadius = 32 + Math.random() * 10;
                      
                      const startX = 40 + startRadius * Math.cos(startAngle);
                      const startY = 40 + startRadius * Math.sin(startAngle);
                      const endX = 40 + endRadius * Math.cos(endAngle);
                      const endY = 40 + endRadius * Math.sin(endAngle);
                      
                      return (
                        <line 
                          key={i}
                          x1={`${startX}%`} 
                          y1={`${startY}%`} 
                          x2={`${endX}%`} 
                          y2={`${endY}%`} 
                          stroke="rgba(96, 165, 250, 0.3)" 
                          strokeWidth="1"
                          strokeDasharray="3,3"
                          className="animate-pulse"
                          style={{animationDuration: `${3 + i * 0.5}s`}}
                        />
                      );
                    })}
                  </svg>
                  
                
                  <div className="absolute inset-12 rounded-full bg-gradient-to-br from-blue-500/40 to-blue-700/60 backdrop-blur-md border border-blue-300/30 animate-pulse flex items-center justify-center" style={{animationDuration: '6s'}}>
                    <div className="text-center">
                      <div className="text-blue-100 font-bold text-lg">Mind Health</div>
                      <div className="text-blue-200 text-xs">Awareness & Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      <StylizedHorizon />
      
      
      
      
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-900/20 z-15"></div>
      
   
     
    </div>
  );
};

export default Hero;
*/


// with rounding cricle in frontend

import React, { useState, useEffect } from 'react';

// Create a stylized horizon/surface element instead of using an image
const StylizedHorizon = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden">
     
      <svg 
        viewBox="0 0 1200 200" 
        preserveAspectRatio="none" 
        className="w-full h-48 md:h-60 brightness-50 transform translate-y-4"
      >
        <path 
          d="M0,100 C300,180 900,30 1200,100 L1200,200 L0,200 Z" 
          fill="#2d3748" 
        />
        <path 
          d="M0,120 C200,150 700,90 1200,120 L1200,200 L0,200 Z" 
          fill="#1a202c" 
        />
        
       
        {Array(10).fill().map((_, i) => (
          <circle 
            key={i}
            cx={100 + i * 120} 
            cy={150 + (i % 3) * 10} 
            r={2 + (i % 5) * 2}
            fill="#4a5568"
          />
        ))}
      </svg>
    </div>
  );
};

const HeroParticle = ({ index }) => {
  // Different sizes for particles
  const sizes = ['w-1 h-1', 'w-2 h-2', 'w-3 h-3'];
  const opacities = ['opacity-20', 'opacity-30', 'opacity-50', 'opacity-70'];
  const animations = ['animate-pulse', 'animate-bounce', 'animate-ping'];
  
  return (
    <div 
      className={`absolute rounded-full bg-blue-400 ${sizes[index % sizes.length]} ${opacities[index % opacities.length]}`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${3 + Math.random() * 4}s`,
        animationDelay: `${Math.random() * 5}s`,
        transform: `translateY(${Math.random() * 10}px)`,
        animation: `pulse ${3 + Math.random() * 2}s infinite ease-in-out ${Math.random() * 2}s`
      }}
    />
  );
};

// Enhanced rotating circle animation component
const RotatingCircleAnimation = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Main outer rotating circle */}
      <svg className="absolute w-full h-full animate-spin" style={{animationDuration: '15s'}}>
        <circle 
          cx="50%" 
          cy="50%" 
          r="40%" 
          fill="none" 
          stroke="rgba(96, 165, 250, 0.3)" 
          strokeWidth="1"
          strokeDasharray="10 5"
        />
      </svg>
      
      {/* Second rotating circle in opposite direction */}
      <svg className="absolute w-full h-full animate-spin" style={{animationDuration: '12s', animationDirection: 'reverse'}}>
        <circle 
          cx="50%" 
          cy="50%" 
          r="35%" 
          fill="none" 
          stroke="rgba(96, 165, 250, 0.4)" 
          strokeWidth="1.5"
          strokeDasharray="15 10"
        />
      </svg>
      
      {/* Third rotating circle with different pattern */}
      <svg className="absolute w-full h-full animate-spin" style={{animationDuration: '20s'}}>
        <circle 
          cx="50%" 
          cy="50%" 
          r="45%" 
          fill="none" 
          stroke="rgba(59, 130, 246, 0.2)" 
          strokeWidth="2"
          strokeDasharray="5 15"
          strokeLinecap="round"
        />
      </svg>
      
      {/* Orbital particles */}
      {Array(8).fill().map((_, i) => (
        <div 
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
          style={{
            transform: `rotate(${i * 45}deg) translateX(40%) rotate(-${i * 45}deg)`,
            top: '50%',
            left: '50%',
            boxShadow: '0 0 15px 5px rgba(96, 165, 250, 0.3)',
            animationDuration: `${2 + i * 0.5}s`
          }}
        ></div>
      ))}
    </div>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black">
     
      <div className="absolute inset-0 z-10">
        {Array(30).fill().map((_, i) => (
          <HeroParticle key={i} index={i} />
        ))}
      </div>
      
     
      <div className="relative z-20 h-full flex justify-center items-center px-4 md:px-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
          
        
          <div className={`text-white space-y-6 max-w-2xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 mb-2">
              <p className="text-blue-300 text-sm font-medium">Mental Health Awareness</p>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
              MIND'SCOOL
            </h1>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Mind'Scool is a non-profit movement empowering awareness for mental health. 
              We help people understand their mental condition and connect with professional help.
              <span className="block mt-4 text-sm text-blue-200">
                This is not a site for personal disclosure of suicidal thoughts or behaviors. 
                If you are in crisis, please call 112/911 or go to your nearest emergency department.
              </span>
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
                <span className="relative z-10">GET STARTED</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </button>
              
              <button className="relative overflow-hidden bg-transparent border border-blue-400 text-blue-300 hover:text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:border-blue-300">
                <span className="relative z-10">LEARN MORE</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/30 transform scale-x-0 hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </button>
            </div>
          </div>
          
          <div className={`hidden sm:flex items-center justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="relative w-full h-96">
            
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  
                  {/* Add the enhanced rotating circle animation OUTSIDE the central content */}
                  <RotatingCircleAnimation />
                  
                  {/* Center content remains mostly the same */}
                  <div className="absolute inset-12 rounded-full bg-gradient-to-br from-blue-500/40 to-blue-700/60 backdrop-blur-md border border-blue-300/30 animate-pulse flex items-center justify-center" style={{animationDuration: '6s'}}>
                    <div className="text-center">
                      <div className="text-blue-100 font-bold text-lg">Mind Health</div>
                      <div className="text-blue-200 text-xs">Awareness & Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <StylizedHorizon />
      
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-900/20 z-15"></div>
    </div>
  );
};

export default Hero;

