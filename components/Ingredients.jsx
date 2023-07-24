import DomPurify from "isomorphic-dompurify"

export function Ingredients({ title}) {
    return (
        <div className="flex items-start gap-2 pb-3 xl:gap-4">
            <div className="min-w-[21px] h-[21px]">
                <input type="checkbox" id={title} name={title} value={title} className=" border-[#828282] accent-[#F2994A] w-full h-full object-cover"/>
            </div>

            <p className="font-normal text-sm text-[#333333] leading-6 xl:text-base xl:w-[542px] [&>span]:font-bold" dangerouslySetInnerHTML={{__html: DomPurify.sanitize(title)}}/>
        </div>
    )
}