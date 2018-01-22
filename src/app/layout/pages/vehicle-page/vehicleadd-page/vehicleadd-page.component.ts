import { Component, OnInit } from '@angular/core';
import { QuestionControlService } from '../../../../services/question-control.service';

@Component({
  selector: 'app-vehicleadd-page',
  templateUrl: './vehicleadd-page.component.html',
  styleUrls: ['./vehicleadd-page.component.css']
})
export class VehicleaddPageComponent implements OnInit {
  questions: any[];

  constructor(private questionService: QuestionControlService) { }

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
  }

}
