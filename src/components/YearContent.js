import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import topDots from '../assets/topDots.svg'
import botDots from '../assets/botDots.svg'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"




const YearContent = () => {

  const [content, setContent] = useState({ extras: false })
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
        window.scrollTo(0, 0)
      })
    })
    // eslint-disable-next-line
  }, [year])


  return (

    <div className='h-screen w-full flex flex-col justify-start bg-xmas-pink pt-6'>

      <div className='h-1/4 w-full flex flex-col items-center mb-3'>
        <img src={topDots} alt="Dots" className="" />

        <img src={`/bigYears/img${year}.svg`} alt={year} className="w-full my-4" />

        <img src={botDots} alt="Dots" className="mb-2" />
      </div>

      {/* normal pages */}
      {!content.extras &&
        <div className='h-2/3 px-4 flex flex-col items-center justify-evenly'>


          {!content.extras &&
            <div className='h-1/3 flex items-center justify-center'>
              <p className="p-1 text-sm xs:text-base">{content.story}</p>
            </div>
          }



          {/* youtube */}
          {!content.extras &&
            <div className="w-full h-2/3 flex justify-center items-center ">
              <div className='w-full h-2/3'>
                <iframe src={content.video} className="h-full w-full p-0 mb-0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          }


        </div>
      }


      {/* Special pages */}
      {content.extras &&
        <div className='bg-xmas-pink px-2 flex flex-col items-center justify-evenly'>


          {content.extras &&
            <div className='h-fit w-4/5'>

              {/* 60s / 70s */}
              {year === '1979' &&
                <div>
                  <p className='text-xl'>The Irish Film Institute has a great archive of irish TV advertisments</p>

                  <p className='text-sm mb-6'>(these links will open in a new tab)</p>

                  <a href="https://ifiarchiveplayer.ie/macardles-christmas" target="blank_">
                    <img src={img1} alt="McCardles" />
                    <p className='mb-10'>McCardles Christmas Ad (1970s)</p>
                  </a>

                  <a href="https://ifiarchiveplayer.ie/players-no-6-christmas" target="blank_">
                    <img src={img2} alt="Players no6" />
                    <p className='mb-10'>Players No 6Christmas Ad (1970s)</p>
                  </a>

                  <a href="https://ifiarchiveplayer.ie/odlums-christmas" target="blank_">
                    <img src={img3} alt="Odlums" />
                    <p className='mb-10'>Odlums Christmas Ad (1960s)</p>
                  </a>
                </div>
              }

              {/* pages with extra videos - 2020, 2017, 2016, 2015 */}
              {year !== '1979' &&
                <div>

                  <div className='h-1/3 flex items-center justify-center pb-4'>
                    <p className="p-1 text-sm xs:text-base">{content.story}</p>
                  </div>

                  <div className="w-full h-2/3 flex justify-center items-center pb-10">
                    <div className='w-full h-2/3'>
                      <iframe src={content.video} className="h-full w-full p-0 mb-0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                  </div>


                  <div className='h-1/3 flex items-center justify-center pb-4'>
                    <p className="p-1 text-sm xs:text-base">{content.extraStory}</p>
                  </div>

                  <div className="w-full h-2/3 flex justify-center items-center pb-10">
                    <div className='w-full h-2/3'>
                      <iframe src={content.extraLink1} className="h-full w-full p-0 mb-0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                  </div>

                  {content.extraLink2 &&
                    <div className="w-full h-2/3 flex justify-center items-center pb-10">
                      <div className='w-full h-2/3'>
                        <iframe src={content.extraLink2} className="h-full w-full p-0 mb-0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </div>
                    </div>
                  }




                </div>
              }



            </div>
          }

        </div>
      }


      <footer className="h-12 w-full flex items-center justify-center xs:mb-2 mb-0 bg-xmas-pink">


        <div className='w-1/3 h-12 flex items-center justify-center'>

          {year === '2021' &&
            <Link to='/' className="w-full">
              <div className="flex justify-center items-center h-11 bg-xmas-red text-xmas-dark-green">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
            </Link>
          }

          {year !== '2021' &&
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

          {year === '1979' &&
            <Link to='/' className="w-full">
              <div className="flex justify-center items-center h-11 bg-xmas-dark-green text-xmas-red">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
            </Link>
          }

          {year !== '1979' &&
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
