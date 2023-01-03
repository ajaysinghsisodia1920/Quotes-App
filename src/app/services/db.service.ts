import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/firestore'
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private authService:AuthService,private router:Router) { }

  saveQuote(quote:string){
    firebase.firestore().collection('quotes').add({
      text:quote,
      by:this.authService.getUid(),
    })
    .catch(err=>{
      console.log(err);
    })
  }

  getAllQuotes(){
    return firebase.firestore().collection('quotes').get()
  }
}
