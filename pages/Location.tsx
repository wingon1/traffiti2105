import Card from "@components/Card";
import React from "react";
import { CardRep } from "repository/CardRep";
import Masonry from "@components/Masonry";

const repository = CardRep;

const CardListStyles = {
    CardBox : { margin : 5,}
}

export default function Location(){
    const brakePoints = [500];
    return (
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
    )
};