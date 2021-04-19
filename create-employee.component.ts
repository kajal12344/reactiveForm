import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
 employeeForm : FormGroup;
 fullNameCount=0;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      fullname : ['',Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      email : ['',[Validators.required]],
      phone : [''],
      skills: this.fb.group({
        skillName: [''],
        experience: [''],
        experienceLevel: ['']
      })
    })

    // this.employeeForm.get('fullname').valueChanges.subscribe((value:string)=>{
    //   this.fullNameCount= value.length;
    //   //console.log(this.fullNameCount);
    //   console.log(JSON.stringify(value));
    // });

    // this.employeeForm.valueChanges.subscribe((value:any)=>{
    //   this.fullNameCount= value.length;
    //   //console.log(this.fullNameCount);
    //   console.log(JSON.stringify(value));
    // });

    this.employeeForm.get('skills').valueChanges.subscribe((value:string)=>{
      this.fullNameCount= value.length;
      //console.log(this.fullNameCount);
      console.log(JSON.stringify(value));
    });

  }

  // onLoadData():void{
  //   this.employeeForm.setValue({
  //     fullname:"Kajal Shinde",
  //     email:"kajal1@gmail.com",
  //     skills:{
  //       skillName:"C#",
  //       experience:"1",
  //       experienceLevel:"Beginner"
  //     }
  //   })
  // }

  onLoadData():void{
    this.employeeForm.patchValue({
      fullname:"Kajal Shinde",
      email:"kajal1@gmail.com",
      // skills:{
      //   skillName:"C#",
      //   experience:"1",
      //   experienceLevel:"Beginner"
      // }
    })
  }

  onSubmit(){
    console.log(this.employeeForm.value);
  }

}
