import JsLogo from '../assets/language-logos/js-logo.png';
import ReactLogo from '../assets/language-logos/react-logo.png';
import TailwindLogo from '../assets/language-logos/tailwind-logo.svg';
import SpringLogo from '../assets/language-logos/spring-logo.svg';
import JavaLogo from '../assets/language-logos/java-logo.svg';
import GitLogo from '../assets/language-logos/git-logo.svg';
import PythonLogo from '../assets/language-logos/python-logo.svg';
import JuliaLogo from '../assets/language-logos/julia-logo.svg';

import LanguageLogo from '../pages/components/main/LanguageLogo';

export default function Programming() {
    return (
        <div className="flex w-full flex-col space-y-3">
            <div className='flex flex-row w-full justify-between text-center'>
                <LanguageLogo logoSrc={JsLogo} logoAlt="JavaScript Logo" logoText="JavaScript" />
                <LanguageLogo logoSrc={ReactLogo} logoAlt="React Logo" logoText="React" />
                <LanguageLogo logoSrc={TailwindLogo} logoAlt="Tailwind Logo" logoText="Tailwind" />
                <LanguageLogo logoSrc={SpringLogo} logoAlt="Spring Logo" logoText="Spring" />
                <LanguageLogo logoSrc={JavaLogo} logoAlt="Java Logo" logoText="Java" />
            </div>
            <div className='flex flex-row w-full justify-around text-center'>
                <LanguageLogo logoSrc={GitLogo} logoAlt="Git Logo" logoText="Git" />
                <LanguageLogo logoSrc={PythonLogo} logoAlt="Python Logo" logoText="Python" />
                <LanguageLogo logoSrc={JuliaLogo} logoAlt="Julia Logo" logoText="Julia" />
            </div>
        </div>
    );
}