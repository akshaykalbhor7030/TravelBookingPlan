import { Component } from '@angular/core';
import { UserserviceService } from '../../userservice.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-updateuser',
  imports: [FormsModule],
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.css'
})
export class UpdateuserComponent {
  users:any;
  id:any=0;
constructor(private service:UserserviceService,private route:ActivatedRoute,private router:Router){

}
ngOnInit():void{
  this.id=Number(this.route.snapshot.paramMap.get('id'));
  this.service.viewUsers(this.id).subscribe((data)=>
    {
    console.log(data);
    this.users=data;
  });
}
public updateUser(userData:any){

  this.service.updateUser(this.id,userData.value).subscribe(
    (resp)=>{
window.alert("Data updated Successfully");
this.router.navigate(['/users'])
    },
    (err)=>{
  console.log(err);
      }
    );
  }
  }