import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { EvaluacionPage } from '../pages/evaluacion/evaluacion';
import { GeneralPage } from '../pages/general/general';
import { InfraestructuraPage } from '../pages/infraestructura/infraestructura';
import { ParticipacionPage } from '../pages/participacion/participacion';
import { ProgramasPage } from '../pages/programas/programas';
import { RecursoshumanosPage } from '../pages/recursoshumanos/recursoshumanos';
import { RecursosmaterialesPage } from '../pages/recursosmateriales/recursosmateriales';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    EvaluacionPage,
    GeneralPage,
    InfraestructuraPage,
    ParticipacionPage,
    ProgramasPage,
    RecursoshumanosPage,
    RecursosmaterialesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    EvaluacionPage,
    GeneralPage,
    InfraestructuraPage,
    ParticipacionPage,
    ProgramasPage,
    RecursoshumanosPage,
    RecursosmaterialesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
