import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Driver } from '../../../../model/cek/driver';
import { DriverService } from '../../../../services/cek/driver.service';
import { DrivingLicenceService } from '../../../../services/cek/driving-licence.service';
import { DrivingLicence } from '../../../../model/cek/driving-licence';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {
  private driverId: number;
  private driver: Driver;
  private licenses: DrivingLicence[];

  constructor(private route: ActivatedRoute,
              private service: DriverService,
              private licenceService: DrivingLicenceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.driverId = params['id'];
      this.service.getById(this.driverId)
        .toPromise()
        .then(resp => {
          this.driver = resp;
          this.licenceService.getAll()
            .toPromise()
            .then(resp => {
              this.licenses = resp.filter(lic => lic.driver.id == this.driverId);
            });
        });
    });
  }

}
