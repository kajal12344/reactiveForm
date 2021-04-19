import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee1',
  templateUrl: './create-employee1.component.html',
  styleUrls: ['./create-employee1.component.css']
})
export class CreateEmployee1Component implements OnInit {
  employeeForm : FormGroup;

  validationMessages={
    'fullname':{
      'required':"Full Name is required",
      'minLength':"Full Name min length must be 2",
      'maxLength':"Full Name max length must be 10"
   },
   'email':{
    'required':"Email is required"
   },

   'skillname':{
    'required':"Skill Name is required"
   },

   'experience':{
   'required':"Full Name is required"
   },

   'proficiency':{
    'required':"proficiency is required"
   },
  };

  formErrors = {
    'fullname':'',
    'email':'',
    'skillname':'',
    'experience':'',
    'proficiency':''
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      fullname : ['',Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      email : ['',Validators.required],
      phone : ['',Validators.required],
      skills: this.fb.group({
        skillName: ['',Validators.required],
        experience: ['',Validators.required],
        experienceLevel: ['',Validators.required]
      })
    })
  }

  logValidationError(group:FormGroup):void{
   Object.keys(group.controls).forEach((key:string)=>{
     const abstractControl = group.get(key);
     if(abstractControl instanceof FormGroup){
       this.logValidationError(abstractControl);
     }
     else{
       if(abstractControl && !abstractControl.valid){
         const messages = this.validationMessages[key];

         for(const errorkey in abstractControl.errors){
           if(errorkey){
             this.formErrors[key] += messages[errorkey] + ' ';
           }
         }
       }
     }
   });
  }

   onSubmit():void{
     console.log(this.employeeForm.touched);
     console.log(this.employeeForm.value);
     console.log(this.employeeForm.controls.fullname.touched);
   }

   onLoadData():void{
    this.logValidationError(this.employeeForm);
    console.log(this.formErrors);

   }

}

