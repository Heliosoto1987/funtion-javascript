"use strict";

const boxSizing = 'content-box';

function sizeCalulator(width, padding, borderSize){
  switch (boxSizing){
    case 'border-box':
      console.log('El tamaño de la caja es ' + width + '*' + width)
    break;
    case 'content-box':
      console.log('El tamaño de la caja es ' + (width + (padding * 2) + (borderSize * 2)) + '*' + ((padding * 2) + (borderSize * 2)));
    break;
    default:
      console.log('Esperando datos')

  }
}

const holita = sizeCalulator(150, 30, 50);

