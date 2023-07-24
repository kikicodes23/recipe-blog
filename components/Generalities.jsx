import { AiOutlineClockCircle } from "react-icons/ai";

export function Generalities({title, detail}) {
    return(
        <section className="flex items-center gap-[4px] xl:gap-[11px]">
            <div className="w-[17px] h-[17px] xl:w-[34px] xl:h-[34px]">
                <AiOutlineClockCircle className="fill-[#4F4F4F] w-full h-full object-cover"/>
            </div>

            <div>
                <p className="text-[8px] font-bold text-[#BDBDBD] uppercase xl:text-[10px]">{title}</p>
                <p className="text-[10px] font-medium text-[#333333] xl:text-sm">{detail}</p>
            </div>
        </section>
    )
}