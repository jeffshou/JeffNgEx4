import { Component, OnInit } from '@angular/core';

import { TestingService } from 'src/app/services/testing.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit {

  constructor(private testingService: TestingService) { }

  ngOnInit() {
  }

  searchMe(event: any) {
    this.testingService.updateTestingName(event.target.value);
  }
}
