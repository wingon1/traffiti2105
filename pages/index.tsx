import React from "react";
import Layout,{MessageContext} from "@components/layouts/Layout";
import Location from "./Location";
import MyPage from "./MyPage";
import MyTravel from "./MyTravel";
import Upload from "./Upload";
import Main from "./Main";

const Home = () => {

    return (
        <Layout title="돼지">
            <MessageContext.Consumer>
                { pageNumber =>
                     ( pageNumber == 1 )
                         ? <Location />
                         : ( pageNumber == 3 )
                            ? <MyPage />
                            : ( pageNumber == 2 )
                                ? <MyTravel />
                                : ( pageNumber == 4 )
                                    ? <Upload />
                                    : <Main />

                }
            </MessageContext.Consumer>
        </Layout>
    )
}
export default Home;