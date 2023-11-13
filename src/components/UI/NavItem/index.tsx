import { ReactNode } from "react"
import Icon from "../Icon/Icon"

type NavItemProps = {
    title: string,
    icon?: string,
    supportingText?: string,
    actions?: ReactNode,
}

export default function NavItem(props: NavItemProps) {
    return (
        <div className="p-3 flex gap-4 hover:bg-gray-100 hover: cursor-pointer transition-colors">

            {props.icon && <Icon id={props.icon} />}

            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <div className="flex justify-between">
                        <h5 className="text-sm font-medium text-gray-700">{props.title}</h5>
                       {/*  <Icon id={"narrow-right"}/> */}
                    </div>
                    {props.supportingText && <p className="text-sm text-gray-500">{props.supportingText}</p>}
                </div>

                {props.actions && props.actions}

            </div>
        </div>
    )
}
