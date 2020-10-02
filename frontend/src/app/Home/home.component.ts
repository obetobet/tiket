import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  
export class HomeComponent implements OnInit {

  li: any;
  lis = [];
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get('http://localhost:3001/tiket/kat_tiket')
      .subscribe(Response => {

        // If response comes hideloader() function is called 
        // to hide that loader  
        if (Response) {
          hideloader();
        }
        console.log(Response)
        // process.exit()
        this.li = Response;
        // this.lis = this.li.list;
      });
    function hideloader() {
      // document.getElementById('loading').style.display = 'none';
    }
  }
} 
