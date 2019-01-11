import { Component } from '@angular/core';
import { post } from '../models/postClass';
import { R3TargetBinder, StylesCompileDependency } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'test-app-angular';
  inputThing: string;
  labelThing: string;
  listThings: post[] = [];
  showInput: boolean = false;
  transferThing: post;
  

  first: number;
  second: number;
  third: number;

  voting(index: number){
    if(this.listThings[index].vote == ":|")
    {
      this.listThings[index].vote = ":)"
    }
    else if(this.listThings[index].vote == ":)")
    {
      this.listThings[index].vote = ":("
    }
    else if(this.listThings[index].vote == ":(")
    {
      this.listThings[index].vote = ":|"
    }
  }

  setMyStyle(index: number){
    

    let style = {
      
      'background-color': this.listThings[index].hueNumbers
    }
    return style;
  }

  
  keyDownFunction(event){
    if(event.keyCode == 13)
    {
      this.addItem();
    }
  }


  newPost(){
    this.showInput = true;
  }

  cancel(){
    this.showInput = false;
  }

  addItem(){
    if(!this.inputThing)
    {
      alert("No post!")
    }
    else if (!this.labelThing)
    {
      alert("No title!")
    }
    else
    {
      this.transferThing = new post;


      this.transferThing.postBody = this.inputThing;
      this.transferThing.postTitle = this.labelThing;
      this.transferThing.vote = ":|"
      this.transferThing.hueNumbers = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
      this.transferThing.currentTime = new Date();

      this.listThings.push(this.transferThing);
      
      this.inputThing = "";
      this.labelThing = "";

      this.showInput = false;
    }

  }
}
