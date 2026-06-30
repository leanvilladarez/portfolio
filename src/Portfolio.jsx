import portfolio from './data.js'
import {
    University,
    GraduationCap,
    MapPin,
    Phone,
    Mail
} from 'lucide-react'

import List from './utils/List.jsx'
import SkillSet from './utils/SkillSet.jsx'
import Projects from './utils/Projects.jsx'
import Certifications from './utils/Certifications.jsx'

import luffy from './assets/luffy.webp'

const {
    whatIDo,
    howIWork,
    skills,
    projects,
    certifications
} = portfolio

function Portfolio() {
    return (
        <main className="min-h-screen bg-slate-100 text-slate-800 p-4 text-sm">
            <div className="max-w-3xl mx-auto space-y-4 animate-[fadeIn_800ms_ease-in-out_forwards]">

                <header className="flex gap-4">
                    <div className="w-32 h-32 rounded-lg overflow-hidden shadow-xl">
                        <img
                            loading="lazy"
                            className="w-full h-full object-cover"
                            src={luffy}
                            alt="Profile"
                        />
                    </div>

                    <div>
                        <div className="leading-tight">
                            <h1 className="font-bold text-base">
                                Lean Villadarez
                            </h1>
                            <p>Frontend Web Developer</p>
                        </div>

                        <div className="mt-2 space-y-1 text-xs sm:text-sm">
                            <div className="flex items-center gap-2">
                                <Mail size={16} strokeWidth={1} />
                                <span>lean.villadarez@gmail.com</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Phone size={16} strokeWidth={1} />
                                <span>+63 954 493 6603</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <MapPin size={16} strokeWidth={1} />
                                <span>Cebu City, Philippines</span>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="lg:flex gap-3 space-y-3">
                    <div className="space-y-2">
                        <h1 className="font-bold text-lg">About</h1>
                        <article className="bg-slate-50 p-4 rounded-lg space-y-3 lg:w-md">
                        <p>
                            I'm a <strong>Frontend Web Developer</strong> specializing in JavaScript, React, and TailwindCSS, focused on building responsive, accessible, and efficient web applications. I enjoy creating interfaces that deliver great user experiences and solve everyday problems.
                        </p>
                        <p>
                            Outside of development work, I build personal projects to strengthen my skills, experiment with new ideas, and explore latest frontend technologies. I continuously stay updated with industry trends and apply current best practices in my work.
                        </p>
                        <p>
                            I'm particularly interested in building web applications that reduce repetitive tasks, streamline workflows, and improve everyday productivity through thoughtful and user-friendly solutions.
                        </p>
                        </article>                        
                    </div>
                    <div className="space-y-3">
                    <h2 className="font-bold text-base">Education</h2>

                    <ul className="space-y-3">
                        <li className="bg-slate-50 px-4 py-6 rounded-lg flex items-center gap-3">
                            <University strokeWidth={1} />
                            <span>
                                Cebu Institute of Technology - University
                            </span>
                        </li>

                        <li className="bg-slate-50 px-4 py-6 rounded-lg flex items-center gap-3">
                            <GraduationCap strokeWidth={1} />
                            <span>
                                Bachelor of Science in Information Technology
                            </span>
                        </li>
                    </ul>
                    </div>
                </section>

                <section className="border-b border-slate-200 pb-8 grid gap-4 md:grid-cols-2">
                    <div className="space-y-3">
                        <h2 className="font-bold text-base">
                            What I Do
                        </h2>
                        <List list={whatIDo} />
                    </div>

                    <div className="space-y-3">
                        <h2 className="font-bold text-base">
                            How I Work
                        </h2>
                        <List list={howIWork} />
                    </div>
                </section>

                <section className="border-b border-slate-200 pb-8">
                    <h1 className="font-bold text-lg">
                        Tech Stack
                    </h1>

                    <SkillSet list={skills} />
                </section>

                <section className="border-b border-slate-200 pb-8 space-y-3">
                    <h1 className="font-bold text-lg">
                        Projects
                    </h1>

                    <Projects list={projects} />
                </section>

                <section className="border-b border-slate-200 pb-8 space-y-3">
                    <h2 className="font-bold text-lg">
                    Certifications
                        </h2>
                    <Certifications list={certifications}/>
                </section>

                <footer className="text-center leading-tight">
                    <h2 className="font-bold text-base">
                        Lean Villadarez
                    </h2>
                    <p>Frontend Web Developer</p>
                </footer>

            </div>
        </main>
    )
}

export default Portfolio