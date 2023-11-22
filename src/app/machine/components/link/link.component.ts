import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
  @Input()
  link?: string;
  @Input()
  skip: boolean = false;
  @Input()
  exact: boolean = false;

}
