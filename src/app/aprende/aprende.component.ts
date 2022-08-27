import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aprende',
  templateUrl: './aprende.component.html',
  styleUrls: ['./aprende.component.css']
})
export class AprendeComponent implements OnInit {
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  isSubmitted = false

  onSubmit(data:any) {
    console.log(data)
    return this.http.post('https://formspree.io/f/mwkzprbw', 
      {
          email: data.email
      }
    ).subscribe(
      res => {
        console.log(res)
        alert(`Datos enviados correctamente. ¡De ahora en adelante, recibirás nuestras noticias y actualizaciones!`)
        this.isSubmitted = true
    })
  }
}
