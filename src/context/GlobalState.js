import { createContext } from 'react';

// Initial state
const initialState = {
    cards: [
        {
            title: 'The Storey Social',
            image: 'imageSS',
            content: 'Social Media Consultant portfolio website',
            viewURL: 'https://the-storey-social.herokuapp.com/',
            gitURL: 'https://github.com/Tom-Corkhill/the-storey-social',
            sliderDesc: 'The Storey Social is a social media portfolio website intended to display my clients accomplishments. I worked collaboratively with the client to ensure the needs of the website were met, as well as ensuring the website was fully responsive on all devices. It includes a contact form made using Nodemailer.',
            languages: 'Node JS, Express, Bootstrap and Git'
        },
        {
            title: 'Pantry Sorter',
            image: 'imagePS',
            content: 'Website that stores and sorts food in a pantry',
            viewURL: 'https://pantrysorter.herokuapp.com/',
            gitURL: 'https://github.com/Tom-Corkhill/pantry-sorter',
            sliderDesc: 'Pantry sorter is a personal project that I have created. It is a useful website used for storing and sorting food by use by date. I used React to make it to ensure it has a fast and intuitive design that is easy for the everyday user to use.',
            languages: 'Node JS, React, MongoDB, Express, Bootstrap and Git'
        },
        {
            title: 'YelpCamp',
            image: 'imageYC',
            content: 'A place to add and search for campgrounds',
            viewURL: 'https://tjcyelpcamp.herokuapp.com/',
            gitURL: 'https://github.com/Tom-Corkhill/YelpCamp',
            sliderDesc: "Yelpcamp is a project that was made in conjunction with my coding course. The main purpose of it is to create a database of campgrounds, as well as building a community amongst the users. It has an interactive user experience where you can add campgrounds and also comment on other campground experiences. It includes Google Maps and Geocode APIs and has authentication allowing users to create an account.",
            languages: 'Node JS, MongoDB, Express, Bootstrap, and Git'
        }

    ]
}

// Create context
export const GlobalContext = createContext(initialState);