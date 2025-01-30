import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'

const ProcessWork = () => {


  const content = [
    {
      title: 'Master Web Development: Build Your Future Today',
      description:
        'Unlock the power of web development with hands-on projects and expert-led courses. Learn HTML, CSS, JavaScript, React, and more to create stunning, responsive websites.',
    },
    {
      title: 'Interactive Learning Experience',
      description:
        'Get real-time feedback, work on live coding projects, and collaborate with instructors and peers. Experience learning that’s engaging and practical.',
    },
   
    {
      title: 'Project-Based Learning Approach',
      description:
        'Apply your knowledge by working on real-world projects. Build portfolio-ready applications that showcase your skills to potential employers.',
    },
    {
      title: 'Career Support & Job Assistance',
      description:
        'Gain the skills required to land your dream job. Our courses provide career guidance, resume-building tips, and access to job opportunities in the tech industry.',
    },
    
   
  ];
  
  return (
    <>
    
    
    
    <div className='scrollbar'>
      <StickyScroll content={content}  />
    </div>
    
    
    </>
  )
}

export default ProcessWork