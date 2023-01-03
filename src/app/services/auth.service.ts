import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userID?:string;
  constructor(private router:Router) { }
  
  getUid(){
    return this.userID
  }
  isAuthenticated(){
    const uid = localStorage.getItem('userID')
    if(uid) this.userID = uid
    return uid ? true : false
  }
  register(email:string,password:string){
          firebase.auth().createUserWithEmailAndPassword(email,password)
          .then((userdetails:any)=>{
            this.userID = userdetails.user.email
            localStorage.setItem('userID', userdetails.user.email)
            this.router.navigate(['/']);
            // M.toast({html: 'User saved successfully',classes:"green"})
          }).catch((err)=>{
            console.log(err)
            // M.toast({html: 'Error saving user',classes:"red"})
          })
  }
  login(email:string,password:string){
          firebase.auth().signInWithEmailAndPassword(email,password)
          .then((userdetails:any)=>{
            this.userID = userdetails.user.email
            localStorage.setItem('userID', userdetails.user.email)
            // M.toast({html: 'User signed successfully',classes:"green"})
            this.router.navigate(['/'])
          }).catch((err)=>{
            console.log(err)
            // M.toast({html: 'Error logging in',classes:"red"})
          })
  }
  logOut(){
    firebase.auth().signOut().then(()=>{
      this.userID = undefined;
      localStorage.removeItem('userID')
      this.router.navigate(['/']);
    })
  }
}
