import React, { useState, useEffect } from 'react';


const Testimonials = () => {
  const [id, setId] = useState(0);

  const testimonials = [
    [
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1666264200737-acad542a92ff?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    [
      'Sanjiban Pal',
      'John Doe',
      'Mike Smith',
    ],
    [
      'Founder of Recipe-Hut',
      'Lead Front End Developer',
      'Author, Online Influencer',
    ],
    [
      'Your product has extremely helped us for customers to learn more about us and help for us to help them out!',
      'Truly a unique and effective way of solving my problems. Wonderful!',
      'Been using it for the past month, a game-changer for sure.',
    ],
  ];

  useEffect(() => {
    const testimonialElement = document.querySelector('.testimonial');
    const clientImgElement = document.querySelector('.profile-img');
    const clientNameElement = document.querySelector('.name');
    const clientTitleElement = document.querySelector('.title');
    const clientQuoteElement = document.querySelector('.quote span');

    const interval = setInterval(() => {
      setTimeout(() => {
        testimonialElement.style.transform = 'translateX(-100%)';
      }, 2000);
      setTimeout(() => {
        testimonialElement.style.transition = 'none';
        testimonialElement.style.transform = 'translateX(100%)';
        setId((prevId) => (prevId + 1) % testimonials[0].length);

        clientImgElement.style.backgroundImage = `url(${testimonials[0][id]})`;
        clientNameElement.innerHTML = testimonials[1][id];
        clientTitleElement.innerHTML = testimonials[2][id];
        clientQuoteElement.innerHTML = testimonials[3][id];
      }, 2400);
      setTimeout(() => {
        testimonialElement.style.transition = '0.3s';
        testimonialElement.style.transform = 'translateX(0)';
      }, 3000);
    }, 6000);

    return () => clearInterval(interval);
  }, [id]);

  return (
    <div>
      
      <div className="testimonials">

        <div className="flex items-center justify-center w-full">
        <div className="profile-img h-20 w-20 bg-cover transition-all"></div>
        </div>
        
        <div className="container">
        
          <div className="testimonial p-5 transition-all">
            <div>
              <h3 className="text-2xl font-bold mb-2 name">Sanjiban Pal</h3>
              <p className="text-lg title">Founder of Recipe-Hut</p>
              <p className="text-lg quote">
                &quot;<span>Your product has extremely helped us for customers to learn more about us and help for us to help them out!</span>&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
