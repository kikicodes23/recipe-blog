import { PiDotsSixBold } from "react-icons/pi";
import cheesecake from "@/public/img/cheesecake.png";

export function Description() {
    return(
        <article className="p-3 md:px-9 xl:px-[236px]">
            <section className="flex justify-start">
                <div>
                    <PiDotsSixBold className="fill-[#C4C4C4]"/>
                </div>

                <p className="font-medium italic text-xs text-[#4F4F4F] px-3 max-w-[592px] md:text-sm ">
                    Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.
                </p>
            </section>

            <section className="w-full flex justify-center">
                <div className="pt-6 max-w-[969px] object-center">
                    <img src={cheesecake.src} alt="cheesecake image" className="w-full h-full object-cover"/>
                </div>
            </section>
        </article>
    )
}