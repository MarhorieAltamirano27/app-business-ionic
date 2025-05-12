import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonFooter, IonGrid, IonRow, IonCol, IonImg, IonText, IonCard, IonCardContent } from '@ionic/react';
import { homeOutline, searchOutline, heart, cartOutline, personOutline } from 'ionicons/icons';
import './shop.css';

const ListOfWishes: React.FC = () => {
  return (
        <IonPage>
            {/*CABECERA*/}
            <IonHeader translucent>
                <IonToolbar color = "light">
                <IonTitle>Lista de deseos</IonTitle>
                <IonIcon icon = {personOutline} slot = "end" className = "ion-padding-end" />
                </IonToolbar>
            </IonHeader>
        </IonPage>
    );
};

export default ListOfWishes;