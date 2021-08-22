import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import './Home.scss'
import "react-datepicker/dist/react-datepicker.css";


const Home = () => {
    const [startDate, setStartDate] = useState(new Date()); // today
    const [endDate, setEndDate] = useState(new Date() - 10 * 24 * 3600); // today - 10 days ago

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
            <button>Render</button>
            <div className="home__chart">

            </div>
        </div>
    );
};

export default Home;
