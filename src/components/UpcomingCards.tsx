'use client'

import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';
import Link from 'next/link';

const UpcomingCards = () => {

  const featuredWebinars = [
    {
      title: 'Mastering HTML & CSS',
      description:
        'Learn the foundation of web development by mastering HTML and CSS.',
      slug: 'mastering-html-css',
      isFeatured: true,
    },
    {
      title: 'JavaScript for Beginners',
      description:
        'Start your journey into programming with a beginner-friendly JavaScript course.',
      slug: 'javascript-for-beginners',
      isFeatured: true,
    },
    {
      title: 'ReactJS Fundamentals',
      description:
        'Get hands-on experience building modern web applications using ReactJS.',
      slug: 'reactjs-fundamentals',
      isFeatured: true,
    },
    {
      title: 'Backend Development with Node.js',
      description:
        'Learn how to build scalable server-side applications using Node.js.',
      slug: 'backend-development-nodejs',
      isFeatured: true,
    },
    {
      title: 'UI/UX Design for Web Developers',
      description:
        'Understand the principles of UI/UX design to create visually appealing and user-friendly websites.',
      slug: 'ui-ux-design-web-developers',
      isFeatured: true,
    },
    {
      title: 'Freelancing as a Web Developer',
      description:
        'Learn how to start your freelancing career and secure web development projects.',
      slug: 'freelancing-web-developer',
      isFeatured: true,
    },
  ];
  

      
  return (
    <>
    
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-green-500 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Development Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        
      </div>
    </div>
    </>
  )
}

export default UpcomingCards