import React from "react";
import {IonPage, IonToolbar, IonButtons, IonButton, IonTitle, IonLabel, IonBackButton, IonContent,IonGrid, IonCol, IonRow, IonInput, IonText, IonToast, useIonToast, IonCard, IonItem} from "@ionic/react";
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { userLogin, userAsAnonymous } from '../data/auth';
import { getAuth } from "firebase/auth";
import CryptoJS from 'crypto-js';
import './Login.css';

const Login: React.FC = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const history = useHistory();
    const [present] = useIonToast();
    const [toastMessage, setToastMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const secretKey = 'KistonWar';

    const passwordEncryptionHandler = (pass: string) => {
      var encrypted = CryptoJS.AES.encrypt(pass, secretKey).toString();
      setPassword(encrypted);
    }

    async function uLogin()
    {
      const res = await userLogin(email, password);
      if(res){
        present('Berhasil Login', 3000)
        history.replace('/tabs/Home');
        //berhasil login
      }
    }

    async function uSkip()
    {
      const res = await userAsAnonymous();
      if(res){
        present('Continue As Guest', 3000)
        history.replace('/tabs/Home');
        //continue as guest
      }
    }

    const skipbuttonhandler = () =>
    {
      if(user == null)
      {
        return(<IonButton
          routerLink='/Home'
          color="light"
          shape="round"
          expand="block"
          onClick={uSkip}>
          <IonLabel color="warning">SKIP continue as guest</IonLabel>
        </IonButton>);
      }
      else{
        return;
      }
    }

    return (
      <IonPage>
        <IonToolbar>
          <IonButtons slot="start" >
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>

        <IonContent>
          <IonCard className="card-login">

            <IonTitle className="ion-no-padding text-bold" color="dark">Login</IonTitle>
            <IonRow className="ion-padding-vertical">
                <IonLabel>Don't have an account?</IonLabel>
                <Link to="/Register">
                  <IonLabel color="dark">&nbsp; Create your account</IonLabel>
                </Link>
            </IonRow>

            <IonItem className="ion-no-padding">
                <IonLabel position="floating">Email</IonLabel>
                <IonInput placeholder="Email" type="email" onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
            </IonItem>

            <IonItem className="ion-no-padding">
                <IonLabel position="floating">Password</IonLabel>
                <IonInput minlength={6} placeholder="Password" type="password" onIonChange={(e: any) => passwordEncryptionHandler(e.target.value)}></IonInput>
            </IonItem>

            <IonRow className="ion-padding-vertical ion-float-right">
              <Link to="/ForgotPassword">
                <IonLabel color="dark">&nbsp; Forgot Password</IonLabel>
              </Link>
            </IonRow>

            <IonRow className="tombol-login">
              <IonButton className="tombol-login" onClick={uLogin}>
                <IonLabel>Login</IonLabel>
              </IonButton>
            </IonRow>

            {/* <IonRow>
              <IonCol>
                <IonText className='text-between-line'>OR</IonText>
              </IonCol>
            </IonRow> */}


            {skipbuttonhandler()}
          </IonCard>
        </IonContent>
      </IonPage>
    );
};

export default Login;
