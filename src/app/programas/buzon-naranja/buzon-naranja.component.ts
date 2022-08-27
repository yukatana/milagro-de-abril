import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-buzon-naranja',
  templateUrl: './buzon-naranja.component.html',
  styleUrls: ['./buzon-naranja.component.css']
})
export class BuzonNaranjaComponent implements OnInit {
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  isSubmitted = false

  onSubmit(data:any) {
    console.log(data)
    return this.http.post('https://formspree.io/f/mvoygwrw', 
      {
        message: data.message
      }
    ).subscribe(
      res => {
        console.log(res)
        alert(`Datos enviados correctamente. ¡Gracias por contar tu historia!`)
        this.isSubmitted = true
    })
  }
}
