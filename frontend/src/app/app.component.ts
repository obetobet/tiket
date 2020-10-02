import { Component, Input, OnInit} from '@angular/core';
import pegawaidata from '../assets/pegawai.json';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  constructor() {

  }

  ngOnInit(): void {
  }
} 
