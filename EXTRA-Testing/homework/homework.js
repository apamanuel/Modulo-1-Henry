const layout = [
  [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
  [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
  [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
  [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
  [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
];

function checkSeatStatus(row,number) {
  if(typeof row !== 'string') throw new TypeError('First parameter is not a string');
  if(typeof number !== 'number') throw new TypeError('Second parameter is not a number');
  const seat = getSeat(row, number);
  return seat.booked;
};

function getRowNumber(row){
  return row.charCodeAt(0) - 65;
};

function book(row,number){
  if(checkSeatStatus(row,number)) return 'Seat in '+ row + number + ' is already booked';
  else{
    const seat = getSeat(row, number);
    seat.booked = true;
    return 'Seat in '+ row + number + ' successfully booked';
  };  
};

function getSeat(row,number){
  let rowNumber = getRowNumber(row);
  let arrayRow = layout[rowNumber];
  let seat = arrayRow[number];
  return seat;
};




//No modificar
module.exports = {
  checkSeatStatus,getRowNumber,book
}
