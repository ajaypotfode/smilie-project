import React, { createContext, useEffect, useState } from 'react'
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebse/firebase';
export const UserContext = createContext();

const Context = ({ children }) => {
  const [info, setInfo] = useState({})
  const [data, setData] = useState([])

  // adding data to the firestore
  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, "info"), info);
      setInfo({})
    } catch (error) {
      console.log(error);

    }
  }

  // getting data from firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const firebaseData = await getDocs(collection(db, "info"));
        const getFirebaseData = firebaseData.docs.map((doc) => ({
          ...doc.data()
        }))
        setData(getFirebaseData)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <UserContext.Provider value={{ info, addData, setInfo, data }}>{children}</UserContext.Provider>
    </>
  )
}

export default Context