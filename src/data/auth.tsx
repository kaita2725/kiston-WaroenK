import { app } from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut, sendPasswordResetEmail, signInAnonymously, EmailAuthProvider, linkWithCredential} from "firebase/auth";
import { addData } from './addUserData';
app();
const auth = getAuth();
const user = auth.currentUser;

export const userRegister = async (email: string, password: string) => {
  if(user !== null && user.isAnonymous){
    try{
      const credential = EmailAuthProvider.credential(email, password);
      linkWithCredential(user, credential);
      return true;
    }catch(error){
      console.log(error);
      return false;
    }
  }else{
    try{
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        addData(user.uid, user.email);
        sendEmailVerification(auth.currentUser!).then(()=>{console.log('email sent')})
      }).catch((error)=>{
        console.log(error);
        return false;
      })
      return true;
    }catch(error){
      console.log(error);
      return false;
    }
  }
}

export async function userLogin(email: string, password: string) {
  try{
    await signInWithEmailAndPassword(auth, email, password).catch((error)=>{
      console.log(error);
      return false;
    })
    return true;
  }catch(error){
    return false;
  };
}

export async function fpass(email:string){
  sendPasswordResetEmail(auth, email);
}

export const userAsAnonymous  = async () => {
  try{
    signInAnonymously(auth);
    return true;
  }catch(error){
    return false;
  }
}

export async function logout(){
  try{
    signOut(auth).catch((error)=>{
      console.log(error);
      return false;
    });
    return true;
  }catch(error){
    return false;
  }

}

onAuthStateChanged(auth, (user) => {
  if (user) {
    localStorage.setItem("users", JSON.stringify(user));
  } else {
    localStorage.clear();
  }
});