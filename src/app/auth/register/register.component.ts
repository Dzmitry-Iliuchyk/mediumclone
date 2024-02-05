import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.initializeForm();
    console.log('register loaded');
  }
  initializeForm() {
    this.form = this.fb.group({
      username:['',Validators.required],
      email:[''],
      password:['']
    })

  }
  onSubmit() {
    console.log(this.form.value);
  }
}
