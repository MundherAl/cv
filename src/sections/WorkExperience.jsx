import ExperienceSummary from "../pages/components/main/WorkplaceSummary";

export default function WorkExperience() {
    return (
        <div className="space-y-8">
            <div>
                <ExperienceSummary
                    title={"Healthline Medical Center"}
                    location={"Abu Dhabi, United Arab Emirates"}
                    role={"Management Assistant"}
                    date={"June 2021 - September 2021"} />
                <ul className="list-[square] list-inside">
                    <li>
                        Developed and implemented a workplace security course that taught over 300 employees
                        important security practices.
                    </li>
                    <li>
                        Prepared company policy documents and material as required by authorities which led to
                        passing critical audits.
                    </li>
                    <li>
                        Created a Change Management Model for managing staff to refer to when making new
                        decisions.
                    </li>
                </ul>
            </div>

            <div>
                <ExperienceSummary
                    title={"Studienkolleg Düsseldorf"}
                    location={"Düsseldorf, Germany"}
                    role={"Volunteering Tutor In Physics And Mathematics"}
                    date={"February 2018 - July 2018"} />
                <ul className="list-[square] list-inside">
                    <li>
                        Developed and administered 20 practice tests for immigrant students, resulting in a 90%
                        increase in university acceptance.
                    </li>
                </ul>
            </div>
        </div>
    );
}