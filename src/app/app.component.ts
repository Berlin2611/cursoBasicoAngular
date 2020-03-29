import { Component } from '@angular/core';
import { PostServices } from './posts.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [PostServices]
})
export class AppComponent {
  title : string;
  email : string;
  hobbies : string[];
  showHibbies : boolean;
  posts :IPost[];
  
  constructor(private postService:PostServices){
    this.title = "Angular App";
    this.email = "juli.mora@correo.com";
    this.hobbies = ['run', 'write', 'drink'];
    this.showHibbies = false;
    this.postService.getPost().subscribe(posts=>{
      this.posts = posts;   
    })
  }
  showHobbies(){
    this.showHibbies = !this.showHibbies;
  }

  newHobby(hobby){
    this.hobbies.push(hobby.value);
    hobby.value = '';
    return false;

  }
 
}
interface IPost {
  id: string;
  title: string;
  body : string;
}
