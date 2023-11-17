import { ReactNode } from 'react'


type SectionHeaderProps = {
    subheading?: string,
    supportingText?: string,
    title: string,
    breadcrump?: boolean,
    landscape?: boolean,
    children?: ReactNode
}

export default function SectionHeader(props: SectionHeaderProps) {
    return (
        <div className='container flex items-center justify-between'>
            <div className='heading-and-text-lg max-w-3xl'>
                <div className='heading-and-text-sm'>
                    {props.subheading && <span className='text-md font-semibold text-primary-700'>{props.subheading}</span>}
                    <h2 className='text-4xl text-gray-900 font-semibold'>{props.title}</h2>
                </div>
                {props.supportingText && <span className='text-xl text-gray-600'>{props.supportingText}</span>}
            </div>
            {props.children}
        </div>
    )
}
