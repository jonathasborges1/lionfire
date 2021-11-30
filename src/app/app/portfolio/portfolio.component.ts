import {Component, OnInit, ViewChild} from '@angular/core';
import  Typewriter from 't-writer.js';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.maquina-escrever');
    const options =  {
      //loop: true,
      loop: false,
      typeSpeed: 100,
      typeColor: '#00e4f5',
      animateCursor: true,
      cursorColor: '#00e4f5',
    }
    const options2 =  {
      //loop: true,
      loop: false,
      typeSpeed: 50,
    }

    const writer = new Typewriter(target, options);
    const writer2 = new Typewriter(target, options2);
    const writer3 = new Typewriter(target, options2);

    writer
      .changeTypeColor('white')
      .type('O ')
      .then(writer2.start.bind(writer2))
      .start()

    writer2
      .changeTypeColor('#00e4f5')
      .type(' Web Designer ')
      .then(writer3.start.bind(writer3))

    writer3
      .changeTypeColor('white')
      .type('100% instruido  para desenvolver o seu ambiente online com as melhores tecnologias do mercado atual')
  }

}
