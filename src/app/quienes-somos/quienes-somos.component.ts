import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  isSubmitted = false

  onSubmit(data:any) {
    console.log(data)
    return this.http.post("https://formspree.io/f/xrgdbyqr", 
      {
          name: data.name,
          email: data.email,
          phone: data.phone
      }
    ).subscribe(
      res => {
        console.log(res)
        alert(`Datos enviados correctamente. ¡Te contactaremos pronto, ${data.name}!`)
        this.isSubmitted = true
    })
  }
}
