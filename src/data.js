import nami from './assets/nami.webp'
import kai from './assets/kai.webp'
import trivia from './assets/trivia.webp'
import hotel from './assets/hotel.webp'

import html from './assets/html.webp'
import css from './assets/css.webp'
import javascript from './assets/javascript.webp'
import react from './assets/react.webp'
import tailwind from './assets/tailwind.webp'

import git from './assets/git.webp'
import github from './assets/github.webp'
import vscode from './assets/vscode.webp'
import figma from './assets/figma.webp'
import vercel from './assets/vercel.webp'
import netlify from './assets/netlify.webp'
import chatgpt from './assets/chatgpt.webp'
import gemini from './assets/gemini.webp'

const portfolio = {
  whatIDo: [
    "Develop responsive and interactive web applications.",
    "Build reusable components and frontend architectures.",
    "Integrate APIs and manage application data efficiently.",
    "Optimize application performance and accessibility",
    "Deliver practical solutions through web development."
  ],

  howIWork: [
    "Gather data, plan, and analyze requirements.",
    "Break large problems into manageable tasks.",
    "Write clean, maintainable, and reusable code.",
    "Test features thoroughly before deployment.",
    "Deploy and monitor application performance."
  ],

  skills: [
    {
        title: 'Frontend',
        items: [
            {
                name: 'HTML5',
                icon: html
            },
            {
                name: 'CSS3',
                icon: css
            },
            {
                name: 'JavaScript',
                icon: javascript
            },
            {
                name: 'React',
                icon: react
            },
            {
                name: 'Tailwind CSS',
                icon: tailwind
            }
        ]
    },
    {
        title: 'Tools',
        items: [
            {
                name: 'Git',
                icon: git
            },
            {
                name: 'GitHub',
                icon: github
            },
            {
                name: 'VS Code',
                icon: vscode
            },
            {
                name: 'Figma',
                icon: figma
            },
            {
                name: 'Vercel',
                icon: vercel
            },
            {
                name: 'Netlify',
                icon: netlify
            },
            {
                name: 'OpenAI',
                icon: chatgpt
            },
            {
                name: 'Gemini',
                icon: gemini
            }
        ]
    }
    ],

    projects: [
      {
        photo: nami,
        title: "Nami",
        description:
          "Nami is an all-in-one student toolkit designed to improve productivity and organization. It includes task management, expense tracking, account storage, and a GWA calculator, providing students with a centralized workspace for their daily needs.",
        link: "https://leanvilladarez.github.io/namilsn/",
        stacks: ['HTML5, TailwindCSS, JavaScript'],
      },
    
      {
        photo: kai,
        title: "Kai",
        description:
          "A local food website allows users to browse food products made by local sellers in the community. Users can add items to their cart and place orders easily. It also uses location services to get the user's current address for delivery.",
        link: "https://kailsn.netlify.app/",
        stacks: ['HTML5, TailwindCSS, JavaScript'],
      },
    
      {
        photo: hotel,
        title: "Nikholai",
        description:
          "A hotel website  that lets users view rooms, facilities, and hotel information online. Users can check details and photos without visiting the hotel in person. It also includes an online booking system for easy reservations.",
        link: "https://hotellsn.netlify.app/",
        stacks: ['HTML5, TailwindCSS, JavaScript'],
      },
    
      {
        photo: trivia,
        title: "Trivia",
        description:
          "A quiz application focused on web development topics including HTML, CSS, JavaScript, React, and Tailwind CSS. It features categorized questions, score tracking, and an interactive learning experience for aspiring frontend developers.",
        link: "https://trivialsn.netlify.app/",
        stacks: ['HTML5, TailwindCSS, JavaScript'],
      }
    ],

  certifications: [
      {name: 'C Programming 1', org: 'CodeChum', link: 'https://citu.codechum.com/certificates/18824', year: 2025},
      {name: 'C Programming 2', org: 'CodeChum', link: 'https://citu.codechum.com/certificates/25775', year: 2026},
      {name: 'C Certification', org: 'CodeChum', link: 'https://citu.codechum.com/certificates/27742', year: 2026},
    ]
};

export default portfolio