import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { SinglePropertyComponent } from './single-property/single-property.component';
import { Page404Component } from './page404/page404.component';
import { SingleAgentComponent } from './single-agent/single-agent.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './services/user.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message'
import { MessagesModule } from 'primeng/messages';
import { ProfileComponent } from './profile/profile.component';
import { SellComponent } from './sell/sell.component';
import { PropertyComponent } from './property/property.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertiesComponent } from './properties/properties.component';
import { DemandeComponent } from './demande/demande.component';
import { SidebarComponent } from './content_admin/sidebar/sidebar.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { ProductService } from './services/productservice';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingComponent,
    SinglePropertyComponent,
    Page404Component,
    SingleAgentComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    ProfileComponent,
    SellComponent,
    PropertyComponent,
    LoginComponent,
    DashboardComponent,
    PropertiesComponent,
    DemandeComponent,
    SidebarComponent,
    HeaderAdminComponent,
    SidebarAdminComponent,
    HomeDashboardComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    MessageModule,
    MessagesModule,
    DialogModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    FileUploadModule,
    InputTextModule,
    InputTextareaModule,
    RatingModule,
    TagModule,
    ButtonModule,
    RippleModule,
    DropdownModule

  ],
  providers: [
    UserService,
    ProductService,
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

