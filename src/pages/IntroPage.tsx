import React from 'react';
import { IonSlides, IonSlide, IonContent, IonPage, IonButton, IonIcon } from '@ionic/react';
import './IntroPage.css'
// Optional parameters to pass to the swiper instance.
// See https://swiperjs.com/swiper-api for valid options.
const IntroPage: React.FC = () => {

    const slideOpts = {
    initialSlide: 0,
    speed: 400
};

return(
<IonPage >
  <IonContent fullscreen class="ion-padding background-image" scroll-y="false" >
    <IonSlides pager={true} options={slideOpts}>
      
      <IonSlide>
        <div className='slide'>
          <img src="assets/foto/welkam.jpg"/>
            <h1><b>Selamat Datang</b></h1>
                <p>Perkenalkan! kami adalah <b>WaroenK</b>. Sebuah final project agar kami dapat lulus dari mata kuliah Mobile Cross-Platform</p><br></br>
        </div>
      </IonSlide>

      <IonSlide>
        <div className='slide'>
          <img src="assets/foto/default.png"/>
            <h1><b>Apa itu WaroenK?</b></h1>
                <p> <b>WaroenK</b> adalah sebuah aplikasi yang dapat digunakan oleh toko kelontong atau toko kecil dengan fungsi melakukan perhitungan 
                total harga barang belanjaan yang harus dibayar pembeli.</p><br></br>
        </div>
      </IonSlide>

      <IonSlide>
      <div className='slide'>
        <h1></h1><br></br>
        <h2>Siap untuk Menggunakan <b>WaroenK?</b></h2>
            <IonButton> Login <IonIcon slot="end" name="arrow-forward"></IonIcon>
            </IonButton>
            <IonButton > Daftar <IonIcon slot="end" name="arrow-forward"></IonIcon>
            </IonButton>
            <IonButton fill="clear"> Skip as Guest <IonIcon slot="end" name="arrow-forward"></IonIcon>
            </IonButton>
            </div>
      </IonSlide>
      

    </IonSlides>
  </IonContent>
</IonPage>
)};

export default IntroPage;