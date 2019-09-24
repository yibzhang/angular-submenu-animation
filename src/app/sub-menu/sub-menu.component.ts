import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent implements OnInit {
  @Input()
  menuBtnLabel: string;
  @Input()
  subMenuBtnLabel: string[];

  private maxHeight;

  constructor() { }

  ngOnInit() {
  }

  showSubMenu(){
    this.maxHeight = (this.maxHeight == '0') ? '10em': '0';
  }
}