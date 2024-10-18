import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/compartidos/header/header.component';
import { FooterComponent } from 'src/app/compartidos/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qrscaner',
  templateUrl: './qrscaner.component.html',
  styleUrls: ['./qrscaner.component.scss'],
  standalone: true,
  imports: [IonicModule,HeaderComponent,FooterComponent,
     FormsModule, CommonModule]
})
export class QrscanerComponent  {



}
