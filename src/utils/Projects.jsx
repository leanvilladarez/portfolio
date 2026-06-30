import { ExternalLink } from 'lucide-react'

function Projects({ list }) {
    return (
        <ul className="grid gap-3 md:grid-cols-2">
            {list.map(project => (
                <li
                    key={project.title}
                    className="bg-slate-50 rounded-lg p-4 flex flex-col gap-3"
                >
                    <div className="h-52 overflow-hidden rounded-md">
                        <img
                            loading="lazy"
                            className="w-full h-full object-cover"
                            src={project.photo}
                            alt={project.title}
                        />
                    </div>

                    <div>
                        <h3 className="font-bold text-base">
                            {project.title}
                        </h3>

                        <p>{project.description}</p>

                        <p className="text-slate-500 text-xs mt-1">
                            {project.stacks}
                        </p>
                    </div>

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center py-2 self-center gap-2 font-semibold w-fit"
                    >
                        <span>View Live</span>

                        <ExternalLink
                            width={18}
                            height={18}
                            strokeWidth={2}
                        />
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Projects