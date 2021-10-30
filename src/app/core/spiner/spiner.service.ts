import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinerService {

  public stateLoadingSpiner:StateLoadingSpiner;
  public isLoading:boolean = false;
  isLoadingChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.isLoadingChange.subscribe((value) => {
			this.isLoading = value;
    });
    this.stateLoadingSpiner = new StateLoadingSpiner();
  }

  showSpiner(){
    this.isLoadingChange.next(true)
    this.stateLoadingSpiner = new StateLoadingSpiner(this.isLoading);
  }

  hideSpiner(){
    this.isLoadingChange.next(false)
    this.stateLoadingSpiner = new StateLoadingSpiner(this.isLoading);
  }
}

export class StateLoadingSpiner {
  public isLoading: boolean;
  constructor(isLoading?:boolean){
    this.isLoading = isLoading == null ? false:isLoading;
  }
}
