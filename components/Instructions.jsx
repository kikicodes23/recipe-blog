import DomPurify from "isomorphic-dompurify"

export function Instructions({title, number}) {    
    return(
        <div className="flex items-start gap-2 pb-[35px]">
            <div className="min-w-[36px] h-[36px] bg-[#F2994A] rounded-md">
                <p className="flex justify-center items-center text-white  font-playfair-display font-bold text-2xl">{number}</p>
            </div>

            <p className="font-normal text-sm text-[#333] leading-6 xl:text-base xl:w-[532px] [&>span]:font-bold" dangerouslySetInnerHTML={{__html: DomPurify.sanitize(title)}}/>
        </div>
    )
}