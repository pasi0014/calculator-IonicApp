import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  heros = new Array();

  formInfo = this.formBuilder.group({
    numberFor100: ['', [Validators.required, Validators.min(0), Validators.max(100),Validators.nullValidator] ],
    numberFor50: ['', [Validators.required, Validators.min(0), Validators.max(100),Validators.nullValidator]],
    numberFor20: ['', [Validators.required, Validators.min(0), Validators.max(100),Validators.nullValidator]] ,
    numberFor10: ['', [Validators.required, Validators.min(0), Validators.max(100),Validators.nullValidator]],
    numberFor5: ['', [Validators.required, Validators.min(0), Validators.max(100),Validators.nullValidator]],
    numberFor2: ['', [Validators.required, Validators.min(0), Validators.max(100),Validators.nullValidator]],
    numberFor1: ['', [Validators.required, Validators.min(0), Validators.max(100),Validators.nullValidator]],
    numberFor025: ['', [Validators.required, Validators.min(0), Validators.max(100),Validators.nullValidator]],
    numberFor010: ['', [Validators.required, Validators.min(0), Validators.max(100),Validators.nullValidator]],
    numberFor005: ['', [Validators.required, Validators.min(0), Validators.max(100),Validators.nullValidator]],
  });

    secondFormGroup = this._formBuilder.group({
      creditMoney: ['', Validators.required]
    });
 
    thirdFormGroup = this._formBuilder.group({
      moneyBefore:['', Validators.required]
    })

  constructor(private formBuilder:FormBuilder, private _formBuilder: FormBuilder) { }

    ngOnInit(){
      this.secondFormGroup.controls.creditMoney.patchValue(this.creditMoney);
      this.thirdFormGroup.controls.moneyBefore.patchValue(this.moneyBefore);
    }


  model:any = {};

  public numberFor100:number;
  public numberFor50:number;
  public numberFor20:number;
  public numberFor10:number;
  public numberFor5:number;
  public numberFor2:number;
  public numberFor1:number;
  public numberFor025:number;
  public numberFor010:number;
  public numberFor005:number;

  public creditMoney:number;
  public moneyBefore:number;
  public result:number;

 public submit(){
   console.log(this.formInfo.value);
 }

 public calculateSum(){
  console.log(this.result);
  console.log(this.secondFormGroup.value);
  
  
  this.result = this.result + this.creditMoney;
  this.heros.push(this.creditMoney);
  console.log(this.result);
  console.log(this.heros);

}

public finalCalculations(){
console.log(this.thirdFormGroup.value);
console.log(this.result);


this.result = this.result - this.moneyBefore;
this.heros.push(this.moneyBefore);
console.log(this.result);
console.log(this.heros);


}

  proceed(){
    this.result = (this.numberFor100 * 100) + (this.numberFor50 * 50) + (this.numberFor20 * 20) + (this.numberFor10 * 10) + (this.numberFor5 * 5) + (this.numberFor2 *2) + (this.numberFor1 * 1) + (this.numberFor025 * 0.25) + (this.numberFor010 * 0.1) + (this.numberFor005 * 0.05);
    console.log(this.result);
    this.heros.push(this.result);
    console.log(this.heros);
  }

  public clear(){
    this.result = null;
    this.formInfo.reset();
    this.heros = [];
  }
}


