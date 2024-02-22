import Introduction from '../sections/Introduction';
import PreIntroduction from '../sections/PreIntroduction';
import Programming from '../sections/Progamming';
import Layout from './Layout';
import Divider from './components/aesthetic/Divider';

export default function Home() {
    return (
        <Layout>
            <PreIntroduction />
            <Divider title={"Introduction"} />
            <Introduction />
            <Divider title={"Progamming Knowledge"} />
            <Programming />
            <Divider title={"Work Experience"} />
            <Divider title={"Education"} />
            <Divider title={"Skills & Hobbies"} />
            <Divider title={"Extra-curricular"} />
            <Divider title={"Contact me!"} />
        </Layout>
    );
}