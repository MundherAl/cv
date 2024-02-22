import Sellie from "../assets/sellie.jpg";
import OffsetCircles from "../pages/components/aesthetic/OffsetCircles";

export default function PreIntroduction() {
    return (
        <div className="flex flex-row justify-between mx-2 py-8">
            <h1 className="w-[60%] text-4xl ">
                Hello! I'm
                <span className="block text-8xl text-teal-700 font-bold">Mundher.</span>
                <h2 className="flex flex-col text-4xl font-bold ">
                    <span className="">Junior Web Devloper</span>
                </h2>
            </h1>
            <div className="flex w-[40%] items-center justify-end">
                <OffsetCircles numCircles={23} />
                <img src={Sellie} alt="Mundher himself"
                    className="w-40 h-40 rounded-full object-cover object-top scale-x-[-1]
                    outline outline-2 outline-offset-2 outline-slate-400" />

            </div>
        </div>
    )
}