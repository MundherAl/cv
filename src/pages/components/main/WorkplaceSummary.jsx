export default function ExperienceSummary({ title, location, role, date }) {
    return (
        <div>
            <h3 className="text-xl font-bold">{title} - <span className="text-lg font-light">{location}</span>
            </h3>
            <p className="text-lg">{role} - <time className="font-light">{date}</time></p>
        </div>
    );
}