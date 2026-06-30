function List({ list }) {
    return (
        <ul className="space-y-3">
            {list.map(item => (
                <li
                    key={item}
                    className="bg-slate-50 px-4 py-6 rounded-lg"
                >
                    {item}
                </li>
            ))}
        </ul>
    )
}

export default List