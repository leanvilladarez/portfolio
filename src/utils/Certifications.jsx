function Certifications({ list }) {
    return (
            <ul className="space-y-3">
                {list.map(certification => (
                    <li key={certification.name}>
                        <a
                            href={certification.link}
                            target="_blank"
                            rel="noreferrer"
                            className="
                                bg-slate-50
                                p-4
                                rounded-lg
                                flex
                                flex-col
                                gap-1
                                transition-opacity
                                active:opacity-50
                            "
                        >
                            <div className="flex justify-between font-bold">
                                <p>{certification.name}</p>
                                <p>{certification.year}</p>
                            </div>

                            <p>{certification.org}</p>
                        </a>
                    </li>
                ))}
            </ul>
    )
}

export default Certifications