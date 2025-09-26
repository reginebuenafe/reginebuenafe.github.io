import React from 'react';

function About() {
  return (
    <>
      <section 
        id="about" 
        className="relative py-20 px-6 text-[#e0e1dd] text-center scroll-mt-37"
      >
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#778da9] to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#778da9] to-transparent"></div>

        <h2 className="text-7xl text-[#778da9] font-bold mb-8">About Me</h2>
        
        <p className="text-xl leading-relaxed max-w-3xl mx-auto">
          Driven by curiosity, I see every challenge as an opportunity to learn and grow.
          Creativity shapes how I experience the world, giving me ways to turn ideas into something meaningful
          and expressive. I enjoy the balance between being active and slowing down with focus,
          knowing that progress often comes from both discipline and patience. <br /><br />
          Every experience, big or small, adds to the way I continue to grow and evolve.
        </p>
      </section>
    </>
  );
}

export default About;
