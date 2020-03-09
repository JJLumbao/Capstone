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
    constructor(public afAuth: AngularFireAuth, private router: Router) { }

    ngOnInit() {
    }

    async login(){
      const { username, password } = this
      try { 
          const res= await this.afAuth.auth.signInWithEmailAndPassword(username + '@gmail.com', password)
          if(res){
            Swal.fire({
              title: `Welcome`,
              text: `Logged in successfully`,
              icon: `success`
          }).then(()=>{
            this.router.navigate(['tabs/Summary'])
          })
          }
      }catch(err) {
        console.dir(err)
        if(err.code === "auth/user-not-found"){
          console.log("User not found")
        }
    }
  }
}
