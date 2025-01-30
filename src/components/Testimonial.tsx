'use client'


import React from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const Testimonial = () => {


  const onlineCoursesTestimonials = [
    {
      quote:
        "This Web Development course gave me a solid foundation in frontend and backend technologies. The projects were hands-on and industry-relevant!",
      name: "James Carter",
      title: "Full Stack Developer",
    },
    {
      quote:
        "The UX/UI design course transformed my approach to user experience. The instructors provided real-world insights that made all the difference.",
      name: "Sophia Martinez",
      title: "UX Designer",
    },
    {
      quote:
        "The AI & Machine Learning course helped me land my first job as a data scientist. The content was structured and easy to follow!",
      name: "Daniel Robinson",
      title: "AI Engineer",
    },
    {
      quote:
        "Learning Digital Marketing here was a game-changer! The case studies and live projects helped me gain practical knowledge.",
      name: "Emma Watson",
      title: "Digital Marketer",
    },
    {
      quote:
        "The Cybersecurity course gave me a deep understanding of ethical hacking and security protocols. Highly recommended!",
      name: "Liam Anderson",
      title: "Cybersecurity Analyst",
    },
  ];
  
    


  return (
    <>
    
    
    
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={onlineCoursesTestimonials}
        direction="right"
        speed="slow"
      />
    </div>
    
    
    </>
  )
}

export default Testimonial