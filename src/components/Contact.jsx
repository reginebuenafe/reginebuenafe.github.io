import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Contact</h2>
      <p className="text-lg">
        Feel free to reach out to me at{' '}
        <a 
          href="mailto:rchristianbuenafe@gmail.com" 
          className="text-blue-600 hover:underline"
        >
          rchristianbuenafe@gmail.com
        </a>
      </p>
      <div className="mt-4 space-x-4">
        <a 
          href="https://linkedin.com" 
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/reginebuenafe" 
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;