import Card from "@components/Card";
import React from "react";
import { CardRep } from "repository/CardRep";
import Masonry from "@components/Masonry";
import Layout from "@components/layouts/Layout";

const repository = CardRep;

const CardListStyles = {
    CardBox : { margin : 5,}
}

const brakePoints = [500];
const WithStaticProps = () => (

    <Layout title="loaction">
        <Masonry brakePoints={brakePoints}>
            {repository.map((item)=>(
                <div style={CardListStyles.CardBox}>
                    <Card
                        image={item.image}
                        title={item.text}
                        text={item.text}
                        date={item.date}
                        like={item.like}
                        key={item.id}
                    />
                </div>
            )) }
        </Masonry>
    </Layout>
)
export default WithStaticProps;