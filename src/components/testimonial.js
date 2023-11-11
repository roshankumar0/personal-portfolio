'use client'
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonialData = [
    {
        id: 1,
        name: 'John Doe',
        position: 'CEO, Company Inc.',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 2,
        name: 'Jane Smith',
        position: 'CTO, Tech Co.',
        comment: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 3,
        name: 'Jane Smith',
        position: 'CTO, Tech Co.',
        comment: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 4,
        name: 'Jane Smith',
        position: 'CTO, Tech Co.',
        comment: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more testimonials here
];

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    
    };

    return (
        <div className="w-3/4 mx-auto mt-16  text-green-900 bg-black">
            <Slider {...settings}>
                {testimonialData.map((testimonial) => (
                    <div key={testimonial.id} className="px-4">
                        <div className="bg-slate-400 shadow-lg p-8 rounded-lg">
                            <p className="text-gray-700 text-lg">{testimonial.comment}</p>
                            <div className="mt-4">
                                <p className="text-gray-800 font-bold">{testimonial.name}</p>
                                <p className="text-gray-600">{testimonial.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonial;
