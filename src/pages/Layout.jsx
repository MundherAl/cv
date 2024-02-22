import NavigationLink from "./components/navbar/NavigationLink";

export default function Layout({ children }) {
    return (
        <div className="w-[45vw] m-auto font-raleway">
            <header className="flex w-full h-[3em] justify-center items-center">
                <p className="bg-amber-100/50 text-sm border-2 border-black px-4 py-1 box-shadow-black">
                    want my spotify playlist? <b className="text-black">click here!</b>
                </p>
            </header>
            <nav className="flex h-[2em] justify-between border-b-2 border-slate-300 px-2">
                <pages className="flex space-x-4 h-full items-end">
                    <NavigationLink to="/" text="Home" className="font-Raleway" />
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