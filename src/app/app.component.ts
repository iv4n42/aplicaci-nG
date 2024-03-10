import { RequestService } from './services/request.service';
import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor ( private serviceWhether : RequestService){}
  title = 'API';
  lat =  23.07;
  lon = -82.22;
  key = 'a59395b8fbace28eb18c35700ec85ce9';
  clima :  any= [];
  showData = false;
 
  ngOnInit () {
    this.serviceWhether.getWhether(this.lat,this.lon,this.key).subscribe((data :  any) => {
      this.clima = data 
    
    })
  }
  refreshTime () {this.serviceWhether.getWhether(this.lat,this.lon,this.key).subscribe((data :  any) => {
    this.showData = false
    this.clima = data 
  
  })

  }
}
