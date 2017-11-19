import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-balint',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title;
  private cica: string = 'kutya';

  ngOnInit(): void {
    var that = this;
    let f = function() {
      that.cica = new Date().toISOString();
      setTimeout(f,1000);
    }

    f();
    
    this.title = 5;
    this.title = { "a": "b" };
    console.log("X");
    console.log(this.title);
    console.log(this.title.a);
    console.log(this.title['a']);
    let a: object = {};
  }

}
