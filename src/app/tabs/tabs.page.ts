import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

    username: string = ""
    password: string = ""
  
    constructor(
      public afAuth: AngularFireAuth,
      public user: UserService,
      public router: Router
      ) { }


  ngOnInit() {
  }

  async logout() {
    
    try {
      const res = await this.afAuth.signOut();
      this.user.clearUser();
      this.router.navigate(["/login"]);
    } 
    
    catch(err) {
      console.dir(err);
      alert("logout failed");
    }

  }

}
