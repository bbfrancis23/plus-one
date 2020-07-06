import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent  implements OnInit{

   adminId = '';
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void{
    this.getAdminId();
  }

  getAdminId(): void {
   this.profileService.getAdminId().subscribe( adminId => this.adminId = adminId);
  }
}
