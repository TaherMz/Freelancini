import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  public piedata: Object[];
  public legendSettings: Object;
  @Input() dateDebut :string;
  @Input() dateFin :string;
  ngOnInit(): void {
    
    function date(date:string){
      var date1=new Date(parseInt(date.substr(6,10)) , parseInt(date.substr(3,5)), parseInt(date.substr(0,2)));
      var dateactuelle=new Date();
      var time_diff=Number(date1.getTime()-dateactuelle.getTime());
      var days_Diff=time_diff / (1000 * 3600 * 24);
      return days_Diff;
    }
  this.piedata = [
    { x: 'avancement', y: date(this.dateDebut), text: 'avancement' },
    { x: 'reste à faire', y: date(this.dateFin), text: 'reste à faire' }
  ];
    this.legendSettings = {
    visible: true
    };
  }

}
