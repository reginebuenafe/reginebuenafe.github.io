import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import { LetterDisplay } from './LetterDisplay';

gsap.registerPlugin(ScrollTrigger);

const lines = [
  'Hello,',
  "I'm",
  'Regine',
];

function getRandomRotation() {
  return Math.random() * 60 - 30;
}

function animateLettersOnScroll(ref) {
  const nodes = ref.current?.querySelectorAll('.letter') || [];
  nodes.forEach(letter => {
    const speed = parseFloat(letter.dataset.speed || '1');
    gsap.to(letter, {
      y: (1 - speed) * ScrollTrigger.maxScroll(window),
      rotation: getRandomRotation(),
      ease: 'power2.out',
      duration: 0.8,
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    });
  });
}

export default function LetterCollision() {
  const ref = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    animateLettersOnScroll(ref);

    // Animate image float upward on scroll
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        y: -150, // how much it floats up
        ease: 'power1.out',
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top bottom', // when image enters view
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    ScrollTrigger.addEventListener('refreshInit', () => ScrollTrigger.refresh());
  }, []);

  return (
    <div ref={ref} className="scroll-smooth">
      <div className="flex flex-col lg:flex-row justify-between items-center h-screen px-0">
        <div>
          <div className="flex flex-wrap">
            <LetterDisplay word={lines[0]} />
            <div className="w-4 sm:w-10" />
            <LetterDisplay word={lines[1]} />
          </div>
          <div className="flex flex-wrap">
            <LetterDisplay word={lines[2]} color="#778da9" />
          </div>
        </div>

        <div ref={imgRef} className="mt-8 lg:mt-48 lg:ml-5">
          <img
            src="src\assets\me.jpg"
            alt="Regine"
            className="w-90 h-90 object-cover rounded-xl shadow-2xl opacity-100 transition-transform duration-300 ease-out hover:-translate-y-2"
          />
        </div>
      </div>
    </div>
  );
}
