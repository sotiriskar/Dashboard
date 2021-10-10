import FeaturedInfo from "../../components/featuredInfo/featuredInfo"
import Chart from "../../components/chart/chart"
import React from 'react';
import { userData } from "../../dummyData";
import "./home.css"

export default function Home(){
    return(
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" dataKey="Active Key" />
        </div>
    )
}