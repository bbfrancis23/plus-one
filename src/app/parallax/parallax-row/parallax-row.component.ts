
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'parallax-row',
  templateUrl: './parallax-row.component.html',
})
export class ParallaxRowComponent implements OnInit {
  @Input() img = '';
  @Input() height = '';
  @Input() parallax = false;
  @Input() color = false;
  @Input() accent = false;

  constructor() { }

  ngOnInit(): void {
    this.parallax = this.parallax ? this.parallax : !!this.img;
    this.color = this.color ? this.color : false;
    this.accent = this.accent ? this.accent : false;

    console.log(this);
  }
}
