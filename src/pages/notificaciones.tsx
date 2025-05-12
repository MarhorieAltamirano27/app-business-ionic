import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonFooter, IonGrid, IonRow, IonCol, IonImg, IonText, IonCard, IonCardContent } from '@ionic/react';
import { homeOutline, searchOutline, heart, cartOutline, personOutline } from 'ionicons/icons';
import './notificaciones.css';

const ListOfWishes: React.FC = () => {
  return (
    <IonPage>
        {/*CABECERA*/}
        <IonHeader translucent> 
            <IonToolbar color = "light">
                <IonTitle>Carrito de compras</IonTitle>
                <IonIcon icon = {personOutline} slot = "end" className = "ion-padding-end" />
            </IonToolbar>   
        </IonHeader>

        {/*CUERPO*/}
        <IonContent fullscreen color = "light" >
            <div className="noti-header" style={{ backgroundImage: `url("../assets/img/headder.jpg")` }}>
                <IonText className="noti-count">1 Artículo</IonText>           
            </div>

            {/*Producto en la lista*/}
            <IonCard className="noti-card">
                <IonGrid>
                    <IonRow>
                        <IonCol size = "4">
                            <IonImg src = {"../assets/img/imagenn.png"}/>
                        </IonCol>
                        <IonCol size = "8">
                            <IonCardContent>
                                <IonText color = "dark">
                                    <p style={{ fontSize: '12px', fontWeight: 'bold', border: '1px solid black', display: 'inline-block', padding: '2px 4px'}}>
                                        S/. 1,000.00
                                    </p>
                                </IonText>
                                <IonText>
                                    <h2 style={{ fontSize: '14px', fontWeight: 'bold', margin: '4px 0'}}>
                                        Celular Samsung Galaxy S25 Ultra 5G 12GB Bronce
                                    </h2>
                                        <p style={{ fontSize: '12px', color: '#666'}}>Samsung</p>
                                </IonText>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCard>
        </IonContent>
</IonPage>
    );
};

export default ListOfWishes;