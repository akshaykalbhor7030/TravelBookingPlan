import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router,RouterLink } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-list-users',
  imports: [NgFor,RouterLink],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent {
  users:any;
  constructor(private service:UserserviceService,private router:Router){

  }
  ngOnInit(){
    this.service.getUsers().subscribe((data)=>
    {
      this.users=data;
    });

    
  }
  public deleteUser(id:any){
    if(confirm('are you sure you want to delete this user ?')){
      this.service.deleteUser(id).subscribe(()=>{
        alert("record deleted successfully...!");
        this.router.navigate(['/users']);
      });
    }

}
}