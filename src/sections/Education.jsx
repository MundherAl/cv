import ExperienceSummary from "../pages/components/main/ExperienceSummary";

export default function Education() {
    return (
        <div>
            <ExperienceSummary
                title="BSc. Computer Science"
                location="Heinrich-Heine University Düsseldorf"
                role="Computer Science"
                date="October 2021 - October 2023" />
            <ul className="list-[square] list-inside">
                <li>
                    Grade: 2,4 (B+)
                </li>
                <li>
                    Focus on data science subjects
                </li>
                <li>
                    Thesis topic: "How Victims Describe Cybercrime Incidents: A Text Analysis Approach".
                    Webscraping, topic modeling and sentiment analysis methods were thoroughly studied and
                    used for the thesis project
                </li>
                <li>
                    Minor in physics and mathematics with focus on probability theory
                </li>
            </ul>
        </div>
    );
}