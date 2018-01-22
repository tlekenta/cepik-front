import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  visible: boolean;
  username: string;
  imageSource: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.username = this.userService.getUsername();
    this.imageSource = "../../../assets/img/letters/" + this.username.charAt(0).toUpperCase() + ".png";
  }

  changeUserPanelVisible(){
    this.visible = !this.visible;
  }

  logout(){
    this.userService.logout();
  }
}
