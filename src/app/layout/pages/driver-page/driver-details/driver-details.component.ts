import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Driver } from '../../../../model/cek/driver';
import { DriverService } from '../../../../services/cek/driver.service';
import { DrivingLicenceService } from '../../../../services/cek/driving-licence.service';
import { DrivingLicence } from '../../../../model/cek/driving-licence';
import { DriverAuthorisationService } from '../../../../services/cek/driver-authorisation.service';
import { Authorisation } from '../../../../model/cek/authorisation';
import { PenaltyPoints } from '../../../../model/cek/penalty-points';
import { PenaltyPointsService } from '../../../../services/cek/penalty-points.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {
  private driverId: number;
  private driver: Driver;
  private licenses: DrivingLicence[];
  private authorisations: Authorisation[];
  private points: PenaltyPoints[];

  constructor(private route: ActivatedRoute,
              private service: DriverService,
              private licenceService: DrivingLicenceService,
              private authService: DriverAuthorisationService,
              private ppService: PenaltyPointsService) { }

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
          this.authService.getAll()
            .toPromise()
            .then(resp => {
              this.authorisations = resp.filter(auth => auth.driver.id == this.driverId);
            });
          this.ppService.getAll()
            .toPromise()
            .then(resp => {
              this.points = resp.filter(point => point.driver.id == this.driverId);
            });
        });
    });
  }

}
