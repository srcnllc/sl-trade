import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAH_axS9cHTWDzz_GnbAj20hwqVAK31qHw",
    authDomain: "sl-trade.firebaseapp.com",
    projectId: "sl-trade",
    storageBucket: "sl-trade.appspot.com",
    messagingSenderId: "549198800664",
    appId: "1:549198800664:web:3a4b47fe6037705a59a06d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);


// export const useProductsListener = () => {
//     const [cartData,setCartData] =useState([]);

//     useEffect(() => {
//       return onSnapshot(productsRef, (snapshot) => {
//         setCartData(
//         snapshot.docs.map((doc) => {
//           const data = doc.data();
//           return { id: doc.id, ...data, createdAt: data.createdAt?.toDate() };
//         })
//         );
//       });
//     }, []);
// };
