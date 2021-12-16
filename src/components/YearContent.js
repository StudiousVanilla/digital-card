import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { RewindIcon } from '@heroicons/react/solid'
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
  }, [])


  return (

    <div className='h-full w-full flex flex-col justify-end'>
      {year}

      {content !== null &&
        <div className='h-5/6 flex flex-col justify-evenly'>
          <img src={content.img} alt="" />

          <iframe className='w-full h-1/2' src={content.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      }

      <footer className="h-1/10 flex justify-center items-center bg-green-600 border-t-2 border-white">
        <div className="w-full flex justify-evenly items-center">
          <div className="w-full flex flex-col justify-center items-center mt-1 mb-1">
            <Link to="/">
              {/* Icon color set to gold as it is the homepage */}
              <RewindIcon id="rewindIcon" className="footer-icon h-9 w-9 text-white" />
            </Link>
          </div>
        </div>
      </footer>

    </div>

  );

}

export default YearContent;
