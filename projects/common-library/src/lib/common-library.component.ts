import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-commonLibrary',
  template: `
    <p>
      common-library works!
    </p>
  `,
  styles: [
  ]
})
export class CommonLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
