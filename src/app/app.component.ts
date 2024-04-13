import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegisterComponent,PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api-test';
  islogin:boolean=false;
  islogin2:boolean=false;
  islog(){
    this.islogin=true;
  }
  islog2(){
    this.islogin=false;
    this.islogin2=true;
  }



}
