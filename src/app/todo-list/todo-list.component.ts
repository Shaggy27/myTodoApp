import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  cardRowArr:any
  cardColumnArr:any;
  outerText;
  innerText;
  tempCard;
  constructor() { }

  ngOnInit(): void {
    
  }

  public addToList() { 
    var outDupFlag = true;
    if (this.cardRowArr == undefined) {
      this.cardRowArr =  new Array<OuterCard>();
      this.cardRowArr.push({name:this.outerText});
      this.outerText = null;
    } 
    else { 
      console.log("lists")
        for(let i=0; i < this.cardRowArr.length; i++ ){
         
          if(this.cardRowArr[i].name == this.outerText){
            alert("Same list is already exist");
            outDupFlag = false;
          }else{
            continue;
          }
        }
        if(outDupFlag){
          this.cardRowArr.push({name:this.outerText}); 
          this.outerText = null;
        }
        
    } 
  } 

  addCard(){
    var cnt = this.cardRowArr.length + 1
    var obj = {name: "List " + cnt }
    this.cardRowArr.push(obj);
  }

  cardVal(crd){
    this.tempCard = crd
  }

  addInnerCard(){
     var dupFlag = false;
     var index = this.cardRowArr.indexOf(this.tempCard);
    if(this.cardRowArr[index].innerCard == undefined){
      this.cardRowArr[index].innerCard = [{name:this.innerText}];
      this.innerText = null;
    }else{
      for(let i = 0; i< this.cardRowArr[index].innerCard.length; i++ ){
          if(this.cardRowArr[index].innerCard[i].name ==this.innerText ){
            alert("Same task is already exist");
            dupFlag = true;
          }else{
            continue;
          }
      }
      if(!dupFlag){
        var obj = {name: this.innerText  }
        this.cardRowArr[index].innerCard.push(obj);
        this.innerText = null;
      }
    }
  }

  deleteInnerCard(card,innerCard){
    console.log("delete")
    var index = this.cardRowArr.indexOf(card);
    var innerIndex = this.cardRowArr[index].innerCard.indexOf(innerCard);
    this.cardRowArr[index].innerCard.splice( innerIndex,1)
  }

  deleteCard(crd){
    var index = this.cardRowArr.indexOf(crd);
    this.cardRowArr.splice(index,1)
  }
}

class OuterCard{
  name:any;
  innerCard:InnerCard[]
}

class InnerCard{
  name:String
}