import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import './Home.scss'
import "react-datepicker/dist/react-datepicker.css";
import BTCChart from "./components/BTCChart";
import BitcoinService from "../../service/BitcoinService";
import moment from "moment";

const Home = () => {


    const [startDate, setStartDate] = useState(new Date(moment().add(-10, 'days'))); // today - 10 days ago
    const [endDate, setEndDate] = useState(new Date()); // today

    console.log(endDate)

    const handleRender = () => {
        console.log(startDate, endDate)
        // BitcoinService.getDateByRange(startDate, endDate)
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
                <BTCChart/>
            </div>
        </div>
    );
};

export default Home;
