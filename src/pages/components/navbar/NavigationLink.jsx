import { Link } from "react-router-dom";

export default function NavigationLink({ to, text }) {
    return (
        <Link to={to} className="text-lg 
        hover:text-xl hover:text-teal-700 active:font-bold
        transition-all duration-[50ms]">
            {text}
        </Link>
    );
}