import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TestingState } from 'src/app/store/testing.reducer';
import { TestingService } from 'src/app/services/testing.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnDestroy{
  

  private subscription: any;
  private name = '';

  constructor( private testingService: TestingService) { 

    this.subscription = testingService.getTestingName().subscribe(state => {

      this.name = state.toLowerCase();
    });
   // this.currentSearchCriteria = this.store.select('TestingState');
    
  }


  ngOnInit() {
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
