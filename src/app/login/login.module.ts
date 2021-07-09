import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MatcomModule } from '../matcom/matcom.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatcomModule,
    FormsModule

  ],
  providers: [AuthService]
})
export class LoginModule { }
