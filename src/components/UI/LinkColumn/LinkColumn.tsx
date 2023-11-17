type LinkColumnProps = {
    title: string;
    columns: { name: string, link: string }[]
}

export default function LinkColumn(props: LinkColumnProps) {
    return (
        <div className='flex flex-col gap-4'>
            <h5 className='text-sm font-semibold text-white '>{props.title}</h5>
            <ul className="flex flex-col gap-3 list-none m-0 p-0 ">
                {props.columns.length > 0 && props.columns.map((item) => {
                    return (
                        <li className='p-0'>
                            <a className='text-md text-gray-300 font-medium hover:underline transition' href={item.link}>{item.name}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
