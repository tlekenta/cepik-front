import { Component, Input, OnInit } from '@angular/core';
import { PenaltyPointsForm } from '../../../../../model/cek/form/penalty-points-form';
import { PenaltyPointsService } from '../../../../../services/cek/penalty-points.service';

@Component({
  selector: 'app-add-penalty-points',
  templateUrl: './add-penalty-points.component.html',
  styleUrls: ['./add-penalty-points.component.css']
})
export class AddPenaltyPointsComponent implements OnInit {
  @Input() private driverId: number;
  private pointsForm: PenaltyPointsForm = new PenaltyPointsForm();

  private error = false;
  private success = false;
  private errorMsg = "";
  private successMsg = "Dodano punkty karne";

  constructor(private service: PenaltyPointsService) { }

  ngOnInit() {
    this.pointsForm.driverId = this.driverId;
  }

  add(){
    this.service.save(this.pointsForm)
      .toPromise()
      .then(resp => {
        this.error = false;
        this.success = true;
        window.location.reload();
      })
      .catch(error => {
        this.errorMsg = error.error;
        this.error = true;
        this.success = false;
      })
  }

}
