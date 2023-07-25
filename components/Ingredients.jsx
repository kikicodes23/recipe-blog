"use client"

import DomPurify from "isomorphic-dompurify"
import { useState } from "react"

export function Ingredients({ title}) {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className="flex items-start gap-2 pb-3 xl:gap-4">
            <div className="min-w-[21px] h-[21px]">
                <input id={title} type="checkbox" className="border-[#828282] accent-[#F2994A] w-full h-full object-cover" checked={isActive} onChange={e => setIsActive(e.target.checked)}/>
            </div>

            <label htmlFor={title} className={`font-normal text-sm text-[#333333] leading-6 xl:text-base xl:w-[542px] [&>span]:font-bold ${isActive && "line-through"} `} dangerouslySetInnerHTML={{__html: DomPurify.sanitize(title)}}/>
        </div>
    )
}