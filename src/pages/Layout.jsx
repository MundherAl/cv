import { Link } from "react-router-dom";
import NavigationLink from "./components/navbar/NavigationLink";

export default function Layout({ children }) {
    return (
        <div className="w-[45vw] m-auto">
            <header className="flex w-full h-[4em] justify-center items-center">
                <p className="bg-white text-sm border-2 border-green-700 px-4 py-1 box-shadow-green">
                    want my spotify playlist? <b className="text-green-700">click here!</b>
                </p>
            </header>
            <nav className="flex h-[2em] justify-between border-b-2 border-slate-300 px-2">
                <pages className="flex space-x-4 h-full items-end">
                    <NavigationLink to="/" text="Home" />
                    <NavigationLink to="/" text="About" />
                    <NavigationLink to="/" text="Contact" />
                </pages>
                <accounts className="flex space-x-4 h-full items-end">
                    <NavigationLink to="/" text="Linkedin" />
                    <NavigationLink to="/" text="Github" />
                </accounts>
            </nav>
            <main>{children}</main>
        </div>
    );
}