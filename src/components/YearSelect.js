import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/homeImg.svg";
import LightGreenDiamond from "../assets/LightGreenDiamond.svg";

const YearSelect = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const introRef = useRef()

    function handleArrowClick() {
        introRef.current.scrollIntoView({ behavior: 'smooth' })
    }


    return (

        <div className="w-full flex flex-col justify-center items-center font-mono font-extrabold bg-xmas-pink">


            <div className="h-screen w-full flex flex-col justify-between items-center">

                <img src={homeImg} alt="Home banner" className="w-full" />

                <div className="w-3/4 mb-4">
                    <p className="text-xmas-green text-3xl xs:text-4xl mb-4">THE IRISH CHRISTMAS AD</p>
                    <div className="w-full flex justify-evenly">
                        <img src={LightGreenDiamond} alt="Green Diamond" className="w-6 xs:w-8 animate-wiggle" />
                        <p className="text-xmas-red text-5xl xs:text-6xl">TIME</p>
                        <img src={LightGreenDiamond} alt="Green Diamond" className="w-6 xs:w-8 animate-wiggle" />
                    </div>
                    <p className="text-xmas-red text-5xl xs:text-6xl mb-2">MACHINE</p>
                    <div className="w-f flex justify-evenly">
                        <img src={LightGreenDiamond} alt="Green Diamond" className="w-4 xs:w-5 animate-wiggle" />
                        <img src={LightGreenDiamond} alt="Green Diamond" className="w-4 xs:w-5 animate-wiggle" />
                        <img src={LightGreenDiamond} alt="Green Diamond" className="w-4 xs:w-5 animate-wiggle" />
                        <img src={LightGreenDiamond} alt="Green Diamond" className="w-4 xs:w-5 animate-wiggle" />
                        <img src={LightGreenDiamond} alt="Green Diamond" className="w-4 xs:w-5 animate-wiggle" />
                        <img src={LightGreenDiamond} alt="Green Diamond" className="w-4 xs:w-5 animate-wiggle" />
                    </div>
                </div>

                <div className="xs:mb-20 mb-14 text-xmas-green animate-pulse" onClick={handleArrowClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg>
                </div>

            </div>



            <div ref={introRef} className="h-fit w-full flex flex-col items-center rounded-t-3xl pt-10 bg-xmas-dark-green text-white">
                <p className="w-1/2 text-2xl xs:text-3xl  text-center">A DASH</p>
                <p className="w-1/2 text-2xl xs:text-3xl text-center">THROUGH</p>
                <p className="w-1/2 text-2xl xs:text-3xl text-center">THE IRISH</p>
                <p className="w-1/2 text-2xl xs:text-3xl text-center">ADERTISING</p>
                <p className="w-1/2 text-2xl xs:text-3xl text-center">DELIGHTS OF</p>
                <p className="w-1/2 text-2xl xs:text-3xl text-center">CHRISTMASES</p>
                <p className="w-1/2 mb-6 text-2xl xs:text-3xl text-center">PAST.</p>
                <p className="w-1/2 mb-6">SELECT A YEAR BELOW</p>
            </div>


            <div className="w-full bg-xmas-dark-green pb-16 rounded-b-3xl mb-6">
                <Link to='/2021'>
                    <img src={`/bigYears/img2021.svg`} alt="2021" className="w-full" />
                </Link>
                <Link to='/2020'>
                    <img src={`/bigYears/img2020.svg`} alt="2020" className="w-full" />
                </Link>
                <Link to='/2019'>
                    <img src={`/bigYears/img2019.svg`} alt="2019" className="w-full" />
                </Link>
                <Link to='/2018'>
                    <img src={`/bigYears/img2018.svg`} alt="2018" className="w-full" />
                </Link>
                <Link to='/2017'>
                    <img src={`/bigYears/img2017.svg`} alt="2017" className="w-full" />
                </Link>
                <Link to='/2016'>
                    <img src={`/bigYears/img2016.svg`} alt="2016" className="w-full" />
                </Link>
                <Link to='/2015'>
                    <img src={`/bigYears/img2015.svg`} alt="2015" className="w-full" />
                </Link>
                <Link to='/2014'>
                    <img src={`/bigYears/img2014.svg`} alt="2014" className="w-full" />
                </Link>
                <Link to='/2013'>
                    <img src={`/bigYears/img2013.svg`} alt="2013" className="w-full" />
                </Link>
                <Link to='/2012'>
                    <img src={`/bigYears/img2012.svg`} alt="2012" className="w-full" />
                </Link>
                <Link to='/2011'>
                    <img src={`/bigYears/img2011.svg`} alt="2011" className="w-full" />
                </Link>
                <Link to='/2010'>
                    <img src={`/bigYears/img2010.svg`} alt="2010" className="w-full" />
                </Link>

                {/* 00's */}

                <Link to='/2009'><img src={`/bigYears/img2009.svg`} alt="2009" className="w-full" /></Link>
                <Link to='/2008'><img src={`/bigYears/img2008.svg`} alt="2008" className="w-full" /></Link>
                <Link to='/2007'><img src={`/bigYears/img2007.svg`} alt="2007" className="w-full" /></Link>
                <Link to='/2006'><img src={`/bigYears/img2006.svg`} alt="2006" className="w-full" /></Link>
                <Link to='/2005'><img src={`/bigYears/img2005.svg`} alt="2005" className="w-full" /></Link>
                <Link to='/2004'><img src={`/bigYears/img2004.svg`} alt="2004" className="w-full" /></Link>
                <Link to='/2003'><img src={`/bigYears/img2003.svg`} alt="2003" className="w-full" /></Link>
                <Link to='/2002'><img src={`/bigYears/img2002.svg`} alt="2002" className="w-full" /></Link>
                <Link to='/2001'><img src={`/bigYears/img2001.svg`} alt="2001" className="w-full" /></Link>
                <Link to='/2000'><img src={`/bigYears/img2000.svg`} alt="2000" className="w-full" /></Link>

                {/* 90's */}

                <Link to='/1999'><img src={`/bigYears/img1999.svg`} alt="1999" className="w-full" /></Link>
                <Link to='/1998'><img src={`/bigYears/img1998.svg`} alt="1998" className="w-full" /></Link>
                <Link to='/1997'><img src={`/bigYears/img1997.svg`} alt="1997" className="w-full" /></Link>
                <Link to='/1996'><img src={`/bigYears/img1996.svg`} alt="1996" className="w-full" /></Link>
                <Link to='/1995'><img src={`/bigYears/img1995.svg`} alt="1995" className="w-full" /></Link>
                <Link to='/1994'><img src={`/bigYears/img1994.svg`} alt="1994" className="w-full" /></Link>
                <Link to='/1993'><img src={`/bigYears/img1993.svg`} alt="1993" className="w-full" /></Link>
                <Link to='/1992'><img src={`/bigYears/img1992.svg`} alt="1992" className="w-full" /></Link>
                <Link to='/1991'><img src={`/bigYears/img1991.svg`} alt="1991" className="w-full" /></Link>
                <Link to='/1990'><img src={`/bigYears/img1990.svg`} alt="1990" className="w-full" /></Link>

                {/* 80's */}

                <Link to='/1989'><img src={`/bigYears/img1989.svg`} alt="1989" className="w-full" /></Link>
                <Link to='/1988'><img src={`/bigYears/img1988.svg`} alt="1988" className="w-full" /></Link>
                <Link to='/1987'><img src={`/bigYears/img1987.svg`} alt="1987" className="w-full" /></Link>
                <Link to='/1986'><img src={`/bigYears/img1986.svg`} alt="1986" className="w-full" /></Link>
                <Link to='/1985'><img src={`/bigYears/img1985.svg`} alt="1985" className="w-full" /></Link>
                <Link to='/1984'><img src={`/bigYears/img1984.svg`} alt="1984" className="w-full" /></Link>
                <Link to='/1983'><img src={`/bigYears/img1983.svg`} alt="1983" className="w-full" /></Link>
                <Link to='/1982'><img src={`/bigYears/img1982.svg`} alt="1982" className="w-full" /></Link>
                <Link to='/1981'><img src={`/bigYears/img1981.svg`} alt="1981" className="w-full" /></Link>
                <Link to='/1980'><img src={`/bigYears/img1980.svg`} alt="1980" className="w-full" /></Link>

                {/* 60's - 70's */}

                <Link to='/1979'><img src={`/bigYears/img1979.svg`} alt="1979" className="w-full" /></Link>



            </div>

            <div className="mb-10 w-2/3">
                <p className="text-xl mb-2 text-xmas-dark-green">MERRY CHRISTMAS!</p>
                <p className="xs:text-md text-sm mb-2 text-xmas-green">FROM
                    <a href="https://www.instagram.com/eamesjdan/?hl=en" rel="noreferrer" target="_blank" className="m-0 p-0"> DAN, </a>
                    <a href="https://oisinbyrne.me" rel="noreferrer" target="_blank" className="m-0 p-0"> OISÍN </a>
                     & AOIFE</p>
                <p className="text-xs mb-2 text-xmas-light-green italic">*SOME DATES & IRISHNESS ARE SUBJECT TO CONFIRMATION</p>
            </div>



        </div>


    );
}

export default YearSelect;