import React, {useState} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const Home = () => {
    const [startDate, setStartDate] = useState(new Date()); // today
    const [endDate, setEndDate] = useState(new Date() - 10 * 24 * 3600); // today - 10 days ago

    return (
        <div>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}/>
        </div>
    );
};

export default Home;