import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import './Home.scss'
import "react-datepicker/dist/react-datepicker.css";
import BTCChart from "./components/BTCChart";
import BitcoinService from "../../service/BitcoinService";
import moment from "moment";

const Home = () => {

    const [startDate, setStartDate] = useState(new Date(moment().add(-10, 'days').toISOString())); // today
    const [endDate, setEndDate] = useState(new Date()); // today - 10 days ago

    const [data, setData] = useState([
        {
            date: "2021-02-02",
            Price: 5261
        }, {
            date: "2021-02-03",
            Price: 3444
        },
    ])

    const transformData = (data) => {
        const result = [];
        for (const dataKey in data) {
            result.push({
                date : dataKey,
                Price : data[dataKey]
            })
        }
        return result
    }

    const handleRender = () => {
        BitcoinService.getDateByRange(moment(startDate).format("YYYY-MM-DD"), moment(endDate).format("YYYY-MM-DD")).then(res => {
            setData(transformData(res.data.bpi))
        }).catch(err => {
            console.log(err)
            alert(err.message)
        })
    }

    return (
        <div className="home">
            <label>
                StartDate:
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
            </label>
            <label>
                EndDate:
                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}/>
            </label>
            <button onClick={handleRender}>Render</button>
            <div className="home__chart">
                <BTCChart dataChart={data}/>
            </div>
        </div>
    );
};

export default Home;
