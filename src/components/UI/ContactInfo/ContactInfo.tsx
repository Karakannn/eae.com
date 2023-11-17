type ContactInfoProps = {
    label: string,
    description: string
}
export default function ContactInfo(props: ContactInfoProps) {
    return (
        <div className='flex gap-4'>
            <h5 className='min-w-[80px] text-md text-white font-semibold whitespace-nowrap'>{props.label}</h5>
            <span className='text-md text-gray-300'>{props.description}</span>
        </div>
    )
}
