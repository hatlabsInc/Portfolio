import React, { useState, useEffect } from 'react';
import { useTheme } from "next-themes";

const Testimonials = () => {
  const [id, setId] = useState(0);

  const testimonials = [
    [
      'https://media.licdn.com/dms/image/D4D03AQF2mIqMj2z_lA/profile-displayphoto-shrink_800_800/0/1692814311099?e=1706140800&v=beta&t=SA6l1q68eWrjQc-iWHMSSlzg5I1xNPEWkkTiWW5fO9c',
      'https://images.pexels.com/photos/938639/pexels-photo-938639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    [
      'Sanjiban Pal',
      'Vineet Sah',
      'Abhijeet Sen',
    ],
    [
      'Founder of Recipe-Hut',
      'Founder',
      'Author, Online Influencer',
    ],
    [
      'Your product has extremely helped us for customers to learn more about us and help for us to help them out!',
      'Truly a unique and effective way of solving my problems. Wonderful!',
      'Been using it for the past month, a game-changer for sure.',
    ],
  ];

  const { theme } = useTheme();

  useEffect(() => {
    const testimonialElement = document.querySelector('.testimonial');
    const clientImgElement = document.querySelector('.profile-img');
    const clientNameElement = document.querySelector('.name');
    const clientTitleElement = document.querySelector('.caroTitle');
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

  const [mounted, setMounted] = useState();



  return (
    <div>
      
      <div className={` mr-20 ml-20 mob:p-1 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-50" : "hover:bg-slate-800"
      } hover:scale-105 link`}>

        <div className="flex items-center justify-center w-full sm:p-0 tablet:p-2">
        <div className="profile-img h-20 w-20 bg-cover transition-all rounded-full"></div>
        </div>
        
        <div className="container">
        
          <div className="testimonial sm:p-1  tablet:p-4 transition-all text-opacity-40">
            <div>
              <h3 className="sm:text-xs mob:text-sm tablet:text-2xl font-bold mb-2 name">Sanjiban Pal</h3>
              <p className="sm:text-xs mob:text-sm tablet:text-lg caroTitle">Founder of Recipe-Hut</p>
              <p className="sm:text-xs mob:text-sm tablet:text-lg quote text-sky-400">
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
