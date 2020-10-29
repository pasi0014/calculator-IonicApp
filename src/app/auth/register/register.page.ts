import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';





@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
    ) { }

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
    // confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5)])

  })

  formSignIn(){
    this.router.navigate(['/login']);
  }

  async onSubmit(){
    console.log(this.form.value);
    const loading = await this.loadingCtrl.create({message: "Processing...",duration: 2000});
    await loading.present();
    // this.authService.register(this.form.value).subscribe(
    //   async () => {
    //     const toast = await this.toastCtrl.create({ message: 'User Created', duration: 2000, color: "dark"});
    //     await toast.present();
    //     loading.dismiss();
    //     this.form.reset();
    //   },
    //   async () => {
    //     const alert = await this.alertCtrl.create({message: 'There is an error', buttons: ['OK']});
    //     loading.dismiss();
    //     await alert.present();
    //   }
    // )
  }

}
