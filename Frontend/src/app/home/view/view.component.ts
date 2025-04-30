import { Component } from '@angular/core';
import { UserserviceService } from '../../userservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  users:any;
  constructor(private service:UserserviceService, private route:ActivatedRoute){

  }
  ngOnInit():void{
    let id=Number(this.route.snapshot.paramMap.get('id'));
    console.log("in component:",id);
    this.service.viewUsers(id).subscribe((data)=>
    {
      console.log(data);
      this.users=data;
    });
  }
}
