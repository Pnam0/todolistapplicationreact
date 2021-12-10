import { useEffect, useState } from 'react'
import {doc, getDoc} from 'firebase/firestore'
import {db} from 'libs/firebase'

function useUserProfile(path) {
    const [userProfile, setUserProfile] = useState(null)
    const [output, setOutput] = useState('is working')

    useEffect(()=>{
        async function getFirebaseDoc() {
            const docRef = await doc(db, 'users', 'pauln')
            const docData = await getDoc(docRef)
            // doc data is the document and docData.data() is the property to grab the data
            //docData.exists() will check if the data actually exists. 
            setUserProfile(docData.data())
        }
        
        getFirebaseDoc()
    }, [])

    return userProfile
}

export {useUserProfile}