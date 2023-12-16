import { Component, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent {
  currentSnapshotParams!: any;
  currentQueryParams!: any;

  constructor(private route: ActivatedRoute) {
    this.currentSnapshotParams = this.route.snapshot.params['id'];

    this.route.queryParamMap
      .subscribe((params) => {
          this.currentQueryParams = { ...params };
          console.log(this.currentQueryParams.params);
          console.log(this.currentQueryParams.params.ads);
        }
      );
  }
}
