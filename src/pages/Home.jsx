import Introduction from '../sections/Introduction';
import PreIntroduction from '../sections/PreIntroduction';
import Programming from '../sections/Progamming';
import Layout from './Layout';
import Divider from './components/aesthetic/Divider';
import WorkExperience from '../sections/WorkExperience';

export default function Home() {
    return (
        <Layout>
            <PreIntroduction />
            <Divider title={"Introduction"} />
            <Introduction />
            <Divider title={"Progamming Knowledge"} />
            <Programming />
            <Divider title={"Work Experience"} />
            <WorkExperience />
            <Divider title={"Education"} />
            <Divider title={"Skills & Hobbies"} />
            <Divider title={"Extra-curricular"} />
            <Divider title={"Contact me!"} />
        </Layout>
    );
}