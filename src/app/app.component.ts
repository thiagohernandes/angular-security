import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  constructor(private httpClient: HttpClient) { }

  metodoUm(): void {
    this.httpClient.get("https://jsonplaceholder.typicode.com/users").subscribe(
      success => {
        console.log("Successfully Completed");
        console.log(success);
      }
    );
  }

  metodoDois(): void {
    this.httpClient.get("https://jsonplaceholder.typicode.com/user12").subscribe(
      success => {
        console.log("Successfully Completed");
        console.log(success);
      }
    );
  }

  registarTokenSimples(): void {
    localStorage.setItem('meu-token','123456-xyz');
  }

}
