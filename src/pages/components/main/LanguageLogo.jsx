export default function LanguageLogo({ logoSrc, logoAlt, logoText }) {
    return (
        <div>
            <img src={logoSrc} alt={logoAlt} className='h-20' />
            <b>{logoText}</b>
        </div>
    );
}