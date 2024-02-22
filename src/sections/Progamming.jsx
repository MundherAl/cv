import JsLogo from '../assets/language-logos/js-logo.png';
import ReactLogo from '../assets/language-logos/react-logo.png';
import TailwindLogo from '../assets/language-logos/tailwind-logo.svg';
import SpringLogo from '../assets/language-logos/spring-logo.svg';
import JavaLogo from '../assets/language-logos/java-logo.svg';
import GitLogo from '../assets/language-logos/git-logo.svg';
import PythonLogo from '../assets/language-logos/python-logo.svg';
import JuliaLogo from '../assets/language-logos/julia-logo.svg';

export default function Programming() {
    return (
        <div className="flex w-full flex-col space-y-3">
            <div className='flex flex-row w-full justify-between text-center'>
                <div>
                    <img src={JsLogo} alt="JavaScript Logo" className='h-20' />
                    <b>JavaScript</b>
                </div>
                <div>
                    <img src={ReactLogo} alt="React Logo" className='h-20' />
                    <b>React</b>
                </div>
                <div>
                    <img src={TailwindLogo} alt="Tailwind Logo" className='h-20' />
                    <b>Tailwind</b>
                </div>
                <div>
                    <img src={SpringLogo} alt="Spring Logo" className='h-20' />
                    <b>Spring</b>
                </div>
                <div>
                    <img src={JavaLogo} alt="Java Logo" className='h-20' />
                    <b>Java</b>
                </div>
            </div>
            <div className='flex flex-row w-full justify-around text-center'>
                <div>
                    <img src={GitLogo} alt="Git Logo" className='h-20' />
                    <b>Git</b>
                </div>
                <div>
                    <img src={PythonLogo} alt="Python Logo" className='h-20' />
                    <b>Python</b>
                </div>
                <div>
                    <img src={JuliaLogo} alt="Julia Logo" className='h-20' />
                    <b>Julia</b>
                </div>
            </div>
        </div>
    );
}