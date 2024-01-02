//using const and let instead of var
//const is used for variables that will not change
//let is used for variables that will change

export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
  }
  
export function getLast() {
    return ' is okay';
  }
  
export function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();
  
    return combination;
  }