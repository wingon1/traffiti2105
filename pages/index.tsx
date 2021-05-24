import Layout from "@components/layouts/Layout";
import { useState } from "react";

const Home = () => {
    const version = process.env.REACT_APP_SERVICE_VERSION
    console.log("VERSION", version);
    const [text, setText] = useState<string>("안녕하세요.");
    setTimeout(()=>{
        setText("반값습니다.")
    },2000)
    return (
        <Layout>
            <h1>{process.env.NEXT_PUBLIC_HOME}</h1>
            <h3>{text}</h3>
        </Layout>
    )
}
export default Home;