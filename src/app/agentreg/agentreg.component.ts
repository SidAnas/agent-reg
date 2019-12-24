import { Component, OnInit } from '@angular/core';

declare var $: any;
declare const M;

@Component({
  selector: 'app-agentreg',
  templateUrl: './agentreg.component.html',
  styleUrls: ['./agentreg.component.css']
})
export class AgentregComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.jquery_code();
    // this.jqueryz_code();
  }
  jquery_code() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, Option);
    });
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, Option);
    });
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, Option);
    });

  }

  // jqueryz_code(){
  //   $(document).ready(function(){
  //     $('.sidenav').sidenav();
  //   });
  // }

}
