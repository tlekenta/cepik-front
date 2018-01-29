import { Component, Input, OnInit } from '@angular/core';
import { Authorisation } from '../../../../../model/cek/authorisation';
import { DriverAuthorisationService } from '../../../../../services/cek/driver-authorisation.service';

@Component({
  selector: 'app-delete-authorisation',
  templateUrl: './delete-authorisation.component.html',
  styleUrls: ['./delete-authorisation.component.css']
})
export class DeleteAuthorisationComponent implements OnInit {
  @Input() private authorisations: Authorisation[];
  private categories: Set<string> = new Set();
  private selectedCategory = '';
  private error = false;
  private success = false;
  private errorMsg = "";
  private successMsg = "Usunięto kategorię ";

  constructor(private service: DriverAuthorisationService) { }

  ngOnInit() {
    this.authorisations.forEach(auth => this.categories.add(auth.category));
  }

  delete() {
    this.successMsg += this.selectedCategory;
    this.authorisations.forEach(auth => {
      if(auth.category == this.selectedCategory) {
        this.service.delete(auth.id)
          .toPromise()
          .then(resp => {
            this.error = false;
            this.success = true;
            window.location.reload();
          })
          .catch(error => {
            if(error.status != 200) {
              this.errorMsg = error.error;
              this.error = true;
              this.success = false;
            } else {
              this.error = false;
              this.success = true;
              window.location.reload();
            }
          });
      }
    })
  }

}
