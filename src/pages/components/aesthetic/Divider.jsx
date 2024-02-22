export default function Divider({ title }) {
    return (
        <div className="flex flex-row h-[4em] items-center">
            <div className="flex-1 h-[1px] mr-2 bg-slate-300"></div>
            <div className="flex-initial bg-teal-500 px-2">Introduction</div>
            <div className="flex-1 h-[1px] ml-2 bg-slate-300"></div>
        </div>
    )
}