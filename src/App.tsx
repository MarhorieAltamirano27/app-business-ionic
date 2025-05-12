import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import ListOfWishes from './pages/ListOfWishes';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
<<<<<<< HEAD
        <Route exact path="/listOfWishes">
          <ListOfWishes />
        </Route>
        <Route exact path="/">
          <Redirect to="/listOfWishes" />
        </Route>
=======
        {/* Ubicación */}
        <Route exact path="/" component={SplashLoader} />
        <Route path="/SplashPage" component={SplashPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/inicio" component={Inicio} exact />
        <Route path="/productdetail" component={ProductDetail} />
        {/* Redirección */}
        <Redirect to="/" />
>>>>>>> d347245abcdbb79fa479a62e79d8d90dab81fc4b
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;