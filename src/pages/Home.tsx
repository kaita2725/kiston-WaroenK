import {IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonContent, IonSearchbar, IonItem, IonCard, IonCol, IonInput, IonModal, IonGrid, IonRow, IonFooter, IonInfiniteScroll, IonInfiniteScrollContent, IonText, IonTitle} from "@ionic/react";
import './Home.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination ,Grid, EffectCoverflow} from "swiper";
import "swiper/css/grid";
import { useState } from "react";
import {createOutline, text, trashOutline, closeCircleOutline} from "ionicons/icons";


const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  
    return (
        <IonPage>
          <IonHeader class="ion-no-border">
            <IonToolbar>
              <IonButtons slot="start" >
              <IonSearchbar id="caribarang" placeholder="Cari Barang" style={{marginTop:"10px", marginRight:"5px"}} />
                <IonButton routerLink="/tabs/TambahBarang"/>
              </IonButtons>
              {/* <IonButtons slot="end" >
                <IonButton routerLink="/tabs/TambahBarang">
                  <IonIcon size="large"  md={addOutline} ios={addOutline}/>
                </IonButton> */}
              {/* </IonButtons> */}
              <IonButtons slot="end" >
                <IonButton style={{marginTop:"10px", marginRight:"10px"}} fill="solid" color="danger" routerLink="/tabs/TambahBarang">
                  Reset
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            <IonHeader collapse="condense">
              <IonToolbar>
                
              </IonToolbar>
            </IonHeader>
            
            <Swiper
            effect={"coverflow"}
            spaceBetween={1}
            slidesPerView={1}
            grid={{
              rows: 3,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              // clickable: true, 
              dynamicBullets:true
            }}
            modules={[ Grid,Pagination,EffectCoverflow]}
      >
        {/* {shuffledata.map((data)=>( */}
          <SwiperSlide style={{padding:'0', margin:'0'}} >
          <IonItem lines="none" button color='light' style={{marginLeft:'10px',marginRight:'10px', minWidth:"92%", borderRadius:"10px"}}>
            <div style={{display:"flex"}}>
            <img style={{borderRadius:'100%',marginTop:'10px',marginBottom:'10px', marginRight:'auto',marginLeft:'auto',display:'block', height:"120px", width:"120px"}} src="assets/foto/beefTesting.jpg" alt="yoast seo"/>
            <div >
            <h6 style={{marginTop:'10px',marginLeft:'10px', fontSize:"12px",fontWeight:'bold', width:'100px'}}>nama item</h6>
            <p style={{marginTop:'5px',marginLeft:'10px' , fontSize:"12px",fontWeight:'bold'}}>jumlah item</p>
            <p className="hargacolor" style={{marginTop:'0px',marginLeft:'10px', fontSize:"10px",fontWeight:"bold"}}>harga item</p>
            <IonItem className='input' style={{marginBottom:"5px", marginLeft:"10px",width:"50px", paddingRight:"0"}}>
            <IonInput maxlength={2} value={0} ></IonInput>
            </IonItem>
            </div>
            </div>
            </IonItem>
          </SwiperSlide>
          <SwiperSlide>Slide2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperSlide>Slide 10</SwiperSlide>
          <SwiperSlide>Slide 11</SwiperSlide>

        {/* ))} */}
      
      </Swiper> 

      <IonCard color="primary">
      <div style={{display:'flex', height:'50px', marginLeft:"auto", marginRight:'auto', textAlign:'center', marginBottom:"auto",marginTop:"auto"}}>
      <h6 style={{marginLeft:'10px',marginRight:"5px",marginTop:'10px',paddingTop:"5px", fontSize:"15px", width:"50%",backgroundColor:"black",color:"white",borderRadius:"5px"}}>Total Harga</h6>
      <h6 style={{marginLeft:'5px',marginRight:"10px",marginTop:'10px',paddingTop:"5px", fontSize:"15px",color:'white', width:"50%",backgroundColor:"green", borderRadius:"5px"}}>Dummy Harga</h6>
      </div>
      <div style={{marginLeft:"auto", marginRight:'auto', textAlign:'center', marginBottom:'5px'}}>
      <IonButton onClick={()=>setShowModal(true)} color="light">Lihat Daftar Struk</IonButton>
      </div>
      </IonCard>
               
      <IonModal
          isOpen={showModal}
          initialBreakpoint={0.25}
          breakpoints={[0, 0.5, 1]}
          onDidDismiss={() => setShowModal(false)}>
          <h1 className="ion-no-padding" style={{textAlign:"center", fontWeight:"bold"}}>Struk Belanja</h1>
          <IonGrid className="ion-no-padding ion-no-margin" style={{maxHeight:"35px"}}>
            <IonRow>
              <IonCol>
                <div className="left">Total Barang : .....</div>
              </IonCol>
              <IonCol>
                <IonButtons className="right">
                  <IonButton color="dark">
                   Hapus Semua
                  </IonButton>
                </IonButtons>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonContent scrollEvents={true} className="modalContent">
          <IonItem lines="full" button color='primary' style={{marginTop:'10px',marginLeft:'10px',marginRight:'10px',marginBottom:"10px", borderRadius:'5px', paddingRight:"0"}}>
            
            <IonCol size="3">
            <img style={{borderRadius:'100%',margin:'auto',display:'block', height:"70px", width:"70px"}} src="assets/foto/beefTesting.jpg" alt="yoast seo"/>
            </IonCol>
            <IonCol size="9">
              <IonRow>
                <IonCol className="rowpadding" size="10">
                <h6 style={{position:'absolute',margin:"0",top:"10px",bottom:"0" ,fontSize:"12px",fontWeight:'bold', width:'100px'}}>nama item</h6>
                </IonCol>
                <IonCol  size="2">
                  <IonButtons style={{margin:"0"}} className="rightIcon ion-no-padding ion-no-margin">
                  <IonButton >
                    <IonIcon color="danger" icon={closeCircleOutline}/>
                  </IonButton>
                </IonButtons>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="9"  className="rowpadding">
                <p className="hargacolor" style={{position:'absolute',margin:"0",fontSize:"12px",fontWeight:'bold',bottom:"10px",}}>harga satuan item</p>
                </IonCol>
                <IonCol size="3" className="rowpadding">
                <p style={{width:"100px", fontSize:"12px",fontWeight:"bold", margin:'0'}}>... pcs/lusin</p>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="9" className="rowpadding">
                <p className="hargacolor" style={{margin:"0", fontSize:"12px",fontWeight:"bold", bottom:"0", position:"absolute"}}>harga item</p>
                </IonCol>
                <IonCol size="3" >
                </IonCol>
              </IonRow>
            </IonCol>
            </IonItem>
            
          </IonContent>
          
           
            <IonCard color="primary" className="bottomCard ion-no-margin">
            <div style={{display:'flex', height:'50px', marginLeft:"auto", marginRight:'auto', textAlign:'center', marginBottom:"auto",marginTop:"auto"}}>
            <h6 style={{marginLeft:'10px',marginRight:"5px",marginTop:'10px',paddingTop:"5px", fontSize:"15px", width:"50%",backgroundColor:"black",color:"white",borderRadius:"5px"}}>Total Harga</h6>
            <h6 style={{marginLeft:'5px',marginRight:"10px",marginTop:'10px',paddingTop:"5px", fontSize:"15px",color:'white', width:"50%",backgroundColor:"green", borderRadius:"5px"}}>Dummy Harga</h6>
            </div>
            <div style={{marginLeft:"auto", marginRight:'auto', textAlign:'center', marginBottom:'5px'}}>
            <h6 style={{marginLeft:'10px',marginRight:"10px",marginTop:'10px',paddingTop:"10px",paddingBottom:"10px", fontSize:"15px",color:'black', borderRadius:"5px",backgroundColor:"white", textAlign:"center"}}>Dummy Tanggal</h6>
            </div>
            </IonCard>

            
        </IonModal>
          </IonContent>
        </IonPage>
    );
};

export default Home;
