import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import topDots from '../assets/topDots.svg'
import botDots from '../assets/botDots.svg'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"




const YearContent = () => {

  const [content, setContent] = useState(null)
  const { year } = useParams()

  const firebaseConfig = {
    apiKey: "AIzaSyArow2nzoQAwifJrE1x4HV9tOv1KzRDnoY",
    authDomain: "digital-card-36250.firebaseapp.com",
    projectId: "digital-card-36250",
    storageBucket: "digital-card-36250.appspot.com",
    messagingSenderId: "88230715755",
    appId: "1:88230715755:web:ae877a28988471e292ec2e"
  };

  initializeApp(firebaseConfig);
  const db = getFirestore()
  const colRef = collection(db, 'yearContent')
  const q = query(colRef, where("year", "==", year))



  useEffect(() => {

    getDocs(q).then((snapshot) => {
      let content = []
      snapshot.docs.forEach((doc) => {
        content.push({ ...doc.data(), id: doc.id })
        setContent(content[0])
      })
    })
    // eslint-disable-next-line
  }, [year])


  return (

    <div className='h-screen w-full flex flex-col justify-start bg-xmas-pink pt-6'>

      <img src={topDots} alt="Dots" className="" />

      <img src={`/bigYears/img${year}.svg`} alt={year} className="w-full my-4" />

      <img src={botDots} alt="Dots" className="" />

      {content !== null &&
        <div className='h-screen px-4 flex flex-col justify-evenly items-center'>

          <p className="p-3 text-md mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iste possimus quas maiores, dolorum totam sunt asperiores dolore aliquam, est, quos quisquam consectetur ullam nisi non corrupti repellendus similique vero.</p>

          <div className="flex justify-center items-center border-xmas-green border-2 
          w-full h-2/4">
            <iframe src={content.video} className="h-full w-full p-0 m-0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

        </div>
      }

      <footer className="h-12 flex items-center justify-center my-8 bg-xmas-pink">


        <div className='w-1/3 h-12 flex items-center justify-center'>

          {year === '2020' &&
            <Link to='/' className="w-full">
              <div className="flex justify-center items-center h-11 bg-xmas-red text-xmas-dark-green">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
            </Link>
          }

          {year !== '2020' &&
            <Link to={`/${year - 0 + 1}`}>
              <img src={`/years/year${year - 0 + 1}.svg`} alt="next year" className='h-12' />
            </Link>
          }

        </div>

        <div className='w-1/3 bg-white h-11 flex items-center justify-center'>
          <Link to='/'>
            <p className='text-2xl text-xmas-dark-green font-bold font-mono'>HOME</p>
          </Link>
        </div>

        <div className='w-1/3 h-12 flex items-center justify-center'>

          {year === '2010' &&
            <Link to='/' className="w-full">
              <div className="flex justify-center items-center h-11 bg-xmas-dark-green text-xmas-red">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
            </Link>
          }

          {year !== '2010' &&
            <Link to={`/${year - 1}`}>
              <img src={`/years/year${year - 1}.svg`} alt="previous year" className='h-12' />
            </Link>
          }

        </div>


      </footer>



    </div>

  );

}

export default YearContent;
