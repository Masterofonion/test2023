import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RegData } from 'src/app/model/regdata';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  regForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
  });
  constructor(private authService: AuthService, private fb: FormBuilder) {}
  onSubmit() {
    if (this.regForm.valid) {
      console.log('submited');
      this.authService.login(this.regForm.value as RegData);
    }
  }
  getErrorMessage(inputName: string) {
    if (this.regForm.get(inputName)?.hasError('required')) {
      return 'Обязательное поле';
    }
    if (this.regForm.get(inputName)?.hasError('minlength')) {
      return 'Имя пользователя должно содержать больше 4 символов';
    }

    return this.regForm.get(inputName)?.hasError('email')
      ? 'Некорректный электронный адрес'
      : '';
  }
}
