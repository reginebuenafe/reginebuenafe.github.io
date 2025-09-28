import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import { LetterDisplay } from './LetterDisplay';

gsap.registerPlugin(ScrollTrigger);

const lines = [
  'Hello,',
  "I'm",
  'Regine.',
];

function getRandomRotation() {
  return Math.random() * 60 - 30;
}

function animateLettersOnScroll(ref) {
  const nodes = ref.current?.querySelectorAll('.letter') || [];
  nodes.forEach(letter => {
    const speed = parseFloat(letter.dataset.speed || '1');
    gsap.to(letter, {
      y: (1 - speed) * 800,
      rotation: getRandomRotation(),
      ease: 'power2.out',
      duration: 0.8,
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    });
  });
}

function animatePhotoOnScroll(photoRef) {
  gsap.to(photoRef.current, {
    opacity: 0.5,
    scale: 0.95,
    y: -50,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: photoRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 0.5,
      invalidateOnRefresh: true,
    },
  });
}

export default function LetterCollision() {
  const ref = useRef(null);
  const photoRef = useRef(null);
  const mobilePhotoRef = useRef(null);

  useEffect(() => {
    if (ref.current) {
      animateLettersOnScroll(ref);
    }
    if (photoRef.current) {
      animatePhotoOnScroll(photoRef);
    }
    if (mobilePhotoRef.current) {
      animatePhotoOnScroll(mobilePhotoRef);
    }

    ScrollTrigger.addEventListener('refreshInit', () => ScrollTrigger.refresh());

    return () => {
      ScrollTrigger.removeEventListener('refreshInit', () => ScrollTrigger.refresh());
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <div ref={ref} className="scroll-smooth">
        <div className="flex flex-col lg:flex-row justify-between items-center h-screen px-0 relative">
          {/* Photo for mobile and tablet */}
          <div className="block md:hidden absolute dynamic-top left-1/2 -translate-x-1/2">
            <img
              ref={mobilePhotoRef}
              src="/me.jpg"
              alt="Regine"
              className="w-[75vw] h-[75vw] max-w-[280px] max-h-[280px] object-cover rounded-xl shadow-xl opacity-100 transition-transform duration-300 ease-out hover:-translate-y-2"
            />
          </div>

          {/* Text section */}
          <div className="absolute top-[54%] left-4 md:static md:top-auto md:left-auto">
            <div className="flex flex-wrap">
              <LetterDisplay word={lines[0]} />
              <div className="w-4 sm:w-10" />
              <LetterDisplay word={lines[1]} />
            </div>
            <div className="flex flex-wrap">
              <LetterDisplay word={lines[2]} color="#778da9" />
            </div>
          </div>

          {/* Photo for desktop */}
          <div className="hidden md:flex flex-row -mt-10 lg:-mt-10 lg:ml-10">
            <img
              ref={photoRef}
              src="/me.jpg"
              alt="Regine"
              className="w-90 h-90 object-cover rounded-xl shadow-xl opacity-100 transition-transform duration-300 ease-out hover:-translate-y-2"
            />
          </div>
        </div>
      </div>
    </>
  );
}