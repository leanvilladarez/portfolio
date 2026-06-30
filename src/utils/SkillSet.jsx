function SkillSet({ list }) {
    return (
        <div className="space-y-3">
            {list.map(section => (
                <section
                    key={section.title}
                    className="space-y-3"
                >
                    <h3 className="font-bold text-base">
                        {section.title}
                    </h3>

                    <ul className="flex flex-wrap gap-3">
                        {section.items.map(skill => (
                            <li
                                key={skill.name}
                                className="bg-slate-50 p-4 rounded-lg flex items-center gap-2"
                            >
                                <img
                                    loading="lazy"
                                    className="w-6 h-6"
                                    src={skill.icon}
                                    alt={skill.name}
                                />

                                <span>{skill.name}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    )
}

export default SkillSet