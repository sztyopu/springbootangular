import { Component, OnInit } from '@angular/core';
import { LoginFormService } from 'src/app/services/login-form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/**
 * loginFormService -- reactive from for validating signdata
 */
export class LogInComponent implements OnInit {

  constructor(public loginFormService: LoginFormService) { }

  ngOnInit() {
  }

  onNoClick() {
    console.log('close');
  }

  onSubmit() {
    console.log('sign in');
  }

}
