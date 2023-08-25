import { Component } from '@angular/core';
import { OnExit } from 'src/app/guards/exit.guard';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnExit{

  registerForm = this.formBuilder.group({
    email: [''],
    name: [''],
    lastName: [''],
    phone: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      province: [''],
      zip: ['']
    }),
    password: [''],
    confirmPassword: ['']
  });

  onSubmit(): void {
    console.log('Your form data : ', this.registerForm.value);
  }

  constructor (
    private formBuilder: FormBuilder,
  ) {}
   
  onExit() {
    const rta = confirm('¿Estás seguro de salir?');
    return rta;
  }
}
