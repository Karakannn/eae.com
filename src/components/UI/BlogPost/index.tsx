
type BlogPostProps = {
    category: string,
    img: string,
    title: string,
    text: string
}
export default function BlogPost(props: BlogPostProps) {

    return (
        <a className='group  flex flex-col gap-8 rounded-md overflow-hidden  hover:cursor-pointer'>
            <img className='max-h-[280px] object-cover transition-all group-hover:scale-105' src={props.img} alt="" />
            <div className='flex flex-col gap-1'>
                <div className='flex flex-col gap-2'>
                    <span className='text-md text-primary-600 font-semibold'>{props.category}</span>
                    <h5 className='text-xl font-medium text-gray-700  group-hover:underline'>{props.title}</h5>
                </div>
                <p className='text-md text-gray-600 '>{props.text}</p>
            </div>
        </a>
    )
}
