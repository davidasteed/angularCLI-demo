
// below code will make th pagination tutorial section work:

import { Component } from '@angular/core';
// import { AppService } from './app.service';
import { PaginatePipe, PaginationService } from 'ng2-pagination';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'

  // template: `
  //   <ul>
  //     <li *ngFor = "let item of collection | paginate: {
  //         itemsPerPage: 5, currentPage: p }"> ... </li>
  //   </ul>
  //   <pagination-controls (pageChange) = "p = $event"></pagination-controls>
  // `
})
export class AppComponent {
  appTitle: string = 'Welcome';

  appList: any[] = [{
    'ID': '1',
    'Name': 'One',
    'url': 'app/Images/image1.jpg'
  },
  {
    'ID': '2',
    'Name': 'Two',
    'url': 'app/Images/image2.jpg'
  }];
}


  // template: '<div>{{value}}</div>',
  // providers: [ AppService ]
// })
// export class AppComponent {
//   value: string = '';
//   constructor(private _AppService: AppService) {}
//   ngOnInit(): void {
//     this.value = this._AppService.getApp();
//   }
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app works!';
// }
