import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mostraNumeriP() {
    document.getElementById("griphus")!.style.display="none";
    document.getElementById("numeriprimi")!.style.display="block";
  }

  mostraGriphus() {
    document.getElementById("numeriprimi")!.style.display="none";
    document.getElementById("griphus")!.style.display="block";
  }
}

