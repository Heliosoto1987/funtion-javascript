"use strict";

const boxSizing = 'border-box';

function sizeCalulator(width, padding, borderSize){
  switch (boxSizing){
    case 'border-box':
      console.log('El tamaño de la caja es ' + width + '*' + width)
    break;
    case 'content-box':
      console.log('El tamaño de la caja es ' + (width + (padding * 2) + (borderSize * 2)) + '*' + (width + (padding * 2) + (borderSize * 2)));
    break;
    default:
      console.log('Esperando datos')

  }
}

const prueba = sizeCalulator(200, 35, 46)

