import { createContext } from 'react';

// Initial state
const initialState = {
    cards: [
        {
            title: 'The Storey Social',
            image: 'imageSS',
            content: 'Social Media Consultant portfolio website',
            viewURL: 'http://www.thestoreysocial.co.uk/',
            gitURL: '#',
            sliderDesc: 'The Storey Social is a social media portfolio website intended to show off my clients accomplishments and includes a contact form with links to all relevant social media.',
            languages: [
                'Node JS', 'Express', 'Bootstrap', 'Git'
            ]
        },
        {
            title: 'Pantry Sorter',
            image: 'imagePS',
            content: 'Website that stores and sorts food in a pantry',
            viewURL: '#',
            gitURL: '#',
            sliderDesc: 'Pantry Sorter is a useful site used for storing and sorting foods by use by date. Made using React, it has a fast and responsive design that is easy to use.',
            languages: [
                'Node JS', 'React', 'MongoDB', 'Express', 'Bootstrap', 'Git'
            ]
        },
        {
            title: 'YelpCamp',
            image: 'imageYC',
            content: 'A place to add and search for campgrounds',
            viewURL: '#',
            gitURL: '#',
            sliderDesc: "Yelpcamp is a website for adding and searching for campgrounds. You can add your own, and comment on other people's campgrounds.",
            languages: [
                'Node JS', 'MongoDB', 'Express', 'Bootstrap', 'Git', 'Google Maps API'
            ]
        }

    ]
}

// Create context
export const GlobalContext = createContext(initialState);