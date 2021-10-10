import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"

export default function FeaturedInfo(){
    return(
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <div className="featuredMoney">$2,156</div>
                    <div className="featuredMoneyRate">-11.4 <ArrowDownward className="featuredIconNegative"/></div>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <div className="featuredMoney">$4,558</div>
                    <div className="featuredMoneyRate">-1.4 <ArrowDownward className="featuredIconNegative"/></div>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <div className="featuredMoney">$1,239</div>
                    <div className="featuredMoneyRate">+2.7 <ArrowUpward className="featuredIconPositive"/></div>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}