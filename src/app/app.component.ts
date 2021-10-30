import { ChangeDetectorRef, Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SpinerService } from './core/spiner/spiner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public isLoading:boolean = false;
  private ngUnsubscribe = new Subject();

  constructor(
    private spinerService:SpinerService,
    private cdr:  ChangeDetectorRef
  ){
    this.spinerService.isLoadingChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe((stateLoadSpiner) => {
      this.isLoading = stateLoadSpiner;
      this.cdr.detectChanges();
  });
  }
}
