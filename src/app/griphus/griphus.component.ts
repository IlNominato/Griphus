import {Component, Inject, Injectable, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-griphus',
  templateUrl: './griphus.component.html',
  styleUrls: ['./griphus.component.css']
})
export class GriphusComponent implements OnInit{

  constructor() {

  }

  ngOnInit(): void {
  }

  _lettera!: string;
  database:string[][] = [[""],[""]];


  griphus(chiave:string):Array<number>{
    let n= 1000;
    let setPrimi = new Set<number>();
    let numeriPrimi = new Array<number>();
    let numeriPrimiGemelli = new Array<number>();
    for(let k = 2; k<= n; k++){
      setPrimi.add(k);
    }
    let rimossi = new Set<number>();
    setPrimi.forEach(function (k){
      for (let m = 2 * k; m <= n; m += k){
        rimossi.add(m);
        for(let i = 2; i<100; i++){
          rimossi.add(i);
        }

      }
    });
    rimossi.forEach(function (rem){
      setPrimi.delete(rem);
    });
    setPrimi.forEach(function (p){
      numeriPrimi.push(p);
    });
    for (let i = 0; i<numeriPrimi.length-1; i++){
      if(numeriPrimi[i+1]-numeriPrimi[i]==2){
        numeriPrimiGemelli.push(numeriPrimi[i]);
        numeriPrimiGemelli.push(numeriPrimi[i+1]);
      }
    }
    let matrix = new Array<number>();
    let pos = 0;
    for (let i = 0; i < numeriPrimiGemelli.length - 8; i += 8) {
      let somma = numeriPrimiGemelli[i] + numeriPrimiGemelli[i + 1] + numeriPrimiGemelli[i + 2]
        + numeriPrimiGemelli[i + 3] + numeriPrimiGemelli[i + 4] + numeriPrimiGemelli[i + 5]
        + numeriPrimiGemelli[i + 6] + numeriPrimiGemelli[i + 7];
      somma = somma / 12;
      let chiaveAt = chiave.charCodeAt(i / 8);
      if (somma >= chiaveAt) {
        pos = somma - chiaveAt;
      } else {
        pos = chiaveAt - somma;
      }
      matrix[pos]=numeriPrimiGemelli[i];
      matrix[pos*2]=numeriPrimiGemelli[i+1];
      matrix[pos/2]=numeriPrimiGemelli[i+2];
      matrix[pos/3]=numeriPrimiGemelli[i+3];
      matrix[pos*3]=numeriPrimiGemelli[i+4];
      matrix[pos/5]=numeriPrimiGemelli[i+5];
      matrix[pos-10]=numeriPrimiGemelli[i+6];
      matrix[pos+10]=numeriPrimiGemelli[i+7];
    }
    let filtered = matrix.filter(() => true);
    return filtered;
  }

  griphuscripta() {
    document.getElementById("frasecriptatatext")!.innerHTML="";
    let fraseDaCriptare:string=(document.getElementById("frasedacriptaretext")!as HTMLInputElement).value;
    let fraseCriptata:string="";
    for(let i=0; i<28; i++){
      let alfabeto:Array<string>=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "];
      this.database[0][i]=alfabeto[i];
      this.database[1][i]=String(this.griphus((document.getElementById("password")!as HTMLInputElement).value)[i]);
    }
    for(let i=0; i<fraseDaCriptare.length; i++){
        for(let k=0; k<38; k++){
          if(fraseDaCriptare.charAt(i).toLowerCase()===this.database[0][k]){
            fraseCriptata= fraseCriptata+this.database[1][k];
            break;
          }
      }
    }
    (document.getElementById("frasecriptatatext") as HTMLInputElement).value=fraseCriptata;


  }


  griphudescripta() {
    document.getElementById("frasedacriptaretext")!.innerHTML="";
    let fraseDaDecriptare:string=(document.getElementById("frasecriptatatext")!as HTMLInputElement).value;
    let fraseDecriptata:string="";
    for(let i=0; i<28; i++){
      let alfabeto:Array<string>=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "];
      this.database[0][i]=alfabeto[i];
      this.database[1][i]=String(this.griphus((document.getElementById("password")as HTMLInputElement).value)[i]);
    }
    for(let i=0; i<fraseDaDecriptare.length; i++){
      for(let k=0; k<38; k++){
        if(fraseDaDecriptare.substring(i,i+3)==this.database[1][k]){
          fraseDecriptata = fraseDecriptata+this.database[0][k];
          break;
        }
      }
    }

    (document.getElementById("frasedacriptaretext")! as HTMLInputElement).value=fraseDecriptata;

  }
  verificaLunghezzaP():number{
    let doIt:number=0;
    let password:string = (document.getElementById("password")as HTMLInputElement).value;
    if(password.length<7){
      alert("Attenzione! La password è inferiore a 7 caratteri!");
      doIt=1;
      return doIt
    }
    return doIt;
  }
  verificaLunghezzaPECripta(){
    let n:number=this.verificaLunghezzaP();
    if(n==0){
      this.griphuscripta();
    }
  }

  verificaLunghezzaPEDecripta() {
    let n: number = this.verificaLunghezzaP();
    if(n==0){
      this.griphudescripta();
    }

  }
}
