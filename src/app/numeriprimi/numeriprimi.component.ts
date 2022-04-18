import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeriprimi',
  templateUrl: './numeriprimi.component.html',
  styleUrls: ['./numeriprimi.component.css']
})
export class NumeriprimiComponent implements OnInit {
  n: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  cambiaRange3() {
    this.n = 1000000;
  }

  cambiaRange2() {
    this.n = 10000;
  }

  cambiaRange1() {
    this.n = 100;
  }

  stampaPrimi = (x: number) => {
    let setPrimi = new Set<number>();
    let numeriPrimi = new Array<number>();
    let numeriPrimiGemelli = new Array<number>();
    for (let k = 2; k <= this.n; k++) {
      setPrimi.add(k);
    }
    let rimossi = new Set<number>();

    setPrimi.forEach((k) => {
      for (let m = 2 * k; m <= this.n; m += k) {
        rimossi.add(m);
      }
    });
    rimossi.forEach((rem) => {
      setPrimi.delete(rem);
    });
    setPrimi.forEach(function (p) {
      numeriPrimi.push(p);
    });
    for (let i = 0; i < numeriPrimi.length - 1; i++) {
      if (numeriPrimi[i + 1] - numeriPrimi[i] == 2) {
        numeriPrimiGemelli.push(numeriPrimi[i]);
        numeriPrimiGemelli.push(numeriPrimi[i + 1]);
      }
    }
    if (x == 0) {
      document.getElementById("numeriprimitext")!.innerHTML = numeriPrimi.toString();
    }
    if (x == 1) {
      document.getElementById("numeriprimiGtext")!.innerHTML = numeriPrimiGemelli.toString();

    }
  }
}
