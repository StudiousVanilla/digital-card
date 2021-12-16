// import { useState } from "react";

import { useState } from "react";
import { Link } from "react-router-dom";

const YearSelect = () => {

    const [year, setYear] = useState('2021')

    const handleChange = (e) =>{
        setYear(e.target.value)
    }


    return (

        <div className="h-full w-full flex flex-col justify-center items-center">
            <form action="#" className="h-20">
                <label htmlFor="chosenYear">Choose a year</label>
                <select name="languages" id="chosenYear" onChange={handleChange}>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                </select>
            </form>

            

            <Link to={`/${year}`}>
                <button className="bg-green-200 rounded-full px-4 py-2">Get card</button>
            </Link>

        </div>


    );
}

export default YearSelect;