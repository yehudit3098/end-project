import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ExpertComponent } from './components/expert/expert.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthComponent } from './components/auth/auth/auth.component';
import { UpdateComponent } from './components/update/update.component';
import { PageEnterComponent } from './page-enter/page-enter.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MaterialExampleModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { ChartModule } from 'angular2-chartjs';
import { MatStepperModule } from '@angular/material/stepper';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PaymentComponent } from './components/payment/payment.component';

// import { NgChartsModule } from 'ng2-charts';

const materialModules: any[] = [
  MatTableModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatTabsModule,
  MaterialExampleModule,
  MatCheckboxModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ExpertComponent,
    LoginComponent,
    RegisterComponent,
    UpdateComponent,
    AuthComponent,
    PageEnterComponent,
    StatisticsComponent,
    ScheduleComponent,
    FooterComponent,
    PaymentComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ChartModule,
    MatStepperModule,
    ...materialModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
