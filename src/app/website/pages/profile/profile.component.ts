import { Component } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user: User | null = null;

  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.authService.user.subscribe(
      (user) => { this.user = user; }
    )
  }
}
