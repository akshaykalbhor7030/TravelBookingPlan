import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserserviceService } from '../../userservice.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
constructor(private service:UserserviceService){

}
addUser(userData:any){
  console.log(userData.value);
  this.service.addUser(userData.value).subscribe(
  (resp)=>{
window.alert("Data Added Successfully");
console.log(resp);
  },
  (err)=>{
console.log(err);
    }
  );

}
}