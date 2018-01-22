import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  visible: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  changeUserPanelVisible(){
    this.visible = !this.visible;
  }

  logout(){
    this.userService.logout();
  }
}
