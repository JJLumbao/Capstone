import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    username: string = ""
    password: string = ""
    res: any ={}
    constructor(public afAuth: AngularFireAuth, private router: Router) { }

    ngOnInit() {
    }

    async login(){
      const { username, password } = this
      try { 
          const res= await this.afAuth.auth.signInWithEmailAndPassword(username + '@gmail.com', password)
          console.log(res)
          if(res.user){
            Swal.fire({
                title: `Welcome`,
                text: `Logged in successfully`,
                icon: `success`
            }).then(()=>{
              this.router.navigate(['tabs/Summary'])
            })
          }
      }catch(err) {
        Swal.fire({
          title: `Error`,
          text: `Invalid Username or Password!`,
          icon: `error`
        }).then(()=>{
          this.router.navigate([''])
        })
        if(err.code === "auth/user-not-found"){
          Swal.fire({
            title: `Error`,
            text: `User not found!`,
            icon: `error`
          }).then(()=>{
            this.router.navigate([''])
          })
        }
    }
  }
}
