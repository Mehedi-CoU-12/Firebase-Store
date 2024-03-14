import './App.css';
import { 
    addDoc, 
    collection,
    getFirestore,
    doc,
    getDoc,
    query,
    where,
    getDocs,
    updateDoc,

} from 'firebase/firestore'

import { app } from './Firebase';

const db = getFirestore(app);

function App() {

    const writeData=async()=>{
        const resposnse=await addDoc(collection(db,"cities"),{
            name:'dhaka',
            country:'bangladesh',
            postCode:3450,
        });

        console.log(resposnse);
    }

    const addSubCollection=async()=>{
        const res= await addDoc(collection(db,"cities/XMkrnQiYRyR3AZcNPW9q/places"),{
            name:'Burichong',
            postCode:3501,
            long:24.333,
            let:91.033,
        })

        console.log(res);
    }

    const readData=async()=>{
        const docRef=doc(db,'cities','XMkrnQiYRyR3AZcNPW9q');
        const snap=await getDoc(docRef);

        console.log(snap.data());
        
    }

    const getDocumentByQuery=async()=>{

        const collectionRef=collection(db,'Users');
        const q=query(collectionRef,where('isMale','==',true));
        const snapshot=await getDocs(q);

        snapshot.forEach(element => {
            console.log(element.data());
        });
    }

    const UpdateDocs=async()=>{
        const docRef=doc(db,'Users','abc');
        await updateDoc(docRef,{
            name:'M Hasan'
        })
    }

    return (
        <div className="App">
            <h1>Fire Store</h1>
            <button onClick={writeData}>put data to database</button> <br />
            <button onClick={addSubCollection}>add sub Collection</button><br />
            <button onClick={readData}>Read Data</button><br />
            <button onClick={getDocumentByQuery}>Read Data using Query</button><br />
            <button onClick={UpdateDocs}>Update Document</button><br />
        </div>
    );
}

export default App;
