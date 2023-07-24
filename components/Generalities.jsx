import { AiOutlineClockCircle } from "react-icons/ai";

export function Generalities({title, detail}) {
    return(
        <section className="flex items-center gap-[4px] sm:gap-[11px]">
            <div className="w-[17px] h-[17px] sm:w-[34px] sm:h-[34px]">
                <AiOutlineClockCircle className="fill-[#4F4F4F] w-full h-full object-cover"/>
            </div>

            <div>
                <p className="text-[8px] font-bold text-[#BDBDBD] uppercase sm:text-[10px]">{title}</p>
                <p className="text-[10px] font-medium text-[#333333] sm:text-sm">{detail}</p>
            </div>
        </section>
    )
}