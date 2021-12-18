// import { useState } from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/homeImg.svg";
import img2010 from "../assets/img2010.svg"
import img2011 from "../assets/img2011.svg"
import img2012 from "../assets/img2012.svg"
import img2013 from "../assets/img2013.svg"
import img2014 from "../assets/img2014.svg"
import img2015 from "../assets/img2015.svg"
import img2016 from "../assets/img2016.svg"
import img2017 from "../assets/img2017.svg"
import img2018 from "../assets/img2018.svg"
import img2019 from "../assets/img2019.svg"
import img2020 from "../assets/img2020.svg"

const YearSelect = () => {

    // const [year, setYear] = useState('2021')

    // const handleChange = (e) => {
    //     setYear(e.target.value)
    // }


    return (

        <div className="w-full flex flex-col justify-center items-center font-mono font-extrabold bg-xmas-pink">


            <div className="h-screen w-full flex flex-col justify-between items-center">

                <img src={homeImg} alt="Home banner" className="w-full" />

                <div className="w-2/3 -mt-6">
                    <p className="text-xmas-green text-4xl mb-4">THE IRISH CHRISTMAS AD</p>
                    <p className="text-xmas-red text-6xl">TIME MACHINE</p>
                </div>

                <div className="mb-20 text-xmas-green">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg>
                </div>

            </div>



            <div className="h-fit w-full flex flex-col items-center rounded-t-3xl pt-10 bg-xmas-dark-green text-white">
                <p className="w-1/2 text-3xl text-center">A DASH</p>
                <p className="w-1/2 text-3xl text-center">THROUGH</p>
                <p className="w-1/2 text-3xl text-center">THE IRISH</p>
                <p className="w-1/2 text-3xl text-center">ADERTISING</p>
                <p className="w-1/2 text-3xl text-center">DELIGHTS OF</p>
                <p className="w-1/2 text-3xl text-center">CHRISTMASES</p>
                <p className="w-1/2 mb-6 text-3xl text-center">PAST.</p>
                <p className="w-1/2 mb-6">SELECT A YEAR BELOW</p>
            </div>


            <div className="w-full bg-xmas-dark-green pb-16 rounded-b-3xl mb-6">
                <Link to='/2020'>
                    <img src={img2020} alt="2020" className="w-full"/>
                </Link>
                <Link to='/2019'>
                    <img src={img2019} alt="2019" className="w-full"/>
                </Link>
                <Link to='/2018'>
                    <img src={img2018} alt="2018" className="w-full"/>
                </Link>
                <Link to='/2017'>
                    <img src={img2017} alt="2017" className="w-full"/>
                </Link>
                <Link to='/2016'>
                    <img src={img2016} alt="2016" className="w-full"/>
                </Link>
                <Link to='/2015'>
                    <img src={img2015} alt="2015" className="w-full"/>
                </Link>
                <Link to='/2014'>
                    <img src={img2014} alt="2014" className="w-full"/>
                </Link>
                <Link to='/2013'>
                    <img src={img2013} alt="2013" className="w-full"/>
                </Link>
                <Link to='/2012'>
                    <img src={img2012} alt="2012" className="w-full"/>
                </Link>
                <Link to='/2011'>
                    <img src={img2011} alt="2011" className="w-full"/>
                </Link>
                <Link to='/2010'>
                    <img src={img2010} alt="2010" className="w-full"/>
                </Link>
            </div>

            <div className="mb-10">
                <p className="text-3xl mb-2 text-xmas-dark-green">MERRY CHRISTMAS!</p>
                <p className="text-xl mb-2 text-xmas-green">FROM DAN, OISÍN & AOIFE</p>
                <p className="text-md mb-2 text-xmas-light-green italic">Design, Development & Content</p>
            </div>



        </div>


    );
}

export default YearSelect;