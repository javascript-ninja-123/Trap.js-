const Trap = require('./Trap');

// console.log(Trap.compact$([1,1,1,2,3,4,5,6,6,6,6,6]))
// console.log(Trap.intersection$([1,2,3],[1,3,5]))
// console.log(Trap.difference$([1,2,3],[1,3,5]))
// console.log(Trap.deepInteraction$(
// [{
//   name:'sung',
//   age:25
// }],
// [
//   {
//     name:'yeah',
//     age:25
//   },
//   {
//     name:'man',
//     age:25
//   },
//   {
//     name:'so',
//     age:256
//   }
// ],
// 'age'
// ))
// console.log('ss')
// console.log(Trap.deepDifference$(
// [{
//   name:'sung',
//   age:25
// }],
// [
//   {
//     name:'yeah',
//     age:25
//   },
//   {
//     name:'man',
//     age:25
//   },
//   {
//     name:'so',
//     age:256
//   }
// ],
// 'age'
// ))
// console.log(Trap.map$(x => x +5, [1,2,3,4,5]))
// console.log(Trap.filter$(x=> x < 3, [1,2,3,4,5]))
// console.log(Trap.mapAndFilter$(x => x * 3, x => x  <  5, [1,2,3,4,5]))
// console.log(Trap.filterAndMap$(x => x < 3, x => x* 5, [1,2,3,4,5,6,7]))
// console.log(Trap.findFirst$(3,[1,2,3,3,3,3,4,5]))
// console.log(Trap.findLast$(3,[1,2,3,3,3,3,4,5]))
// console.log(Trap.findAll$(3,[1,2,3,3,3,3,4,5]))
// console.log(Trap.max$([
//   {name:'sungmin yi', age:20},
//   {name:'sungmin si', age:30},
//   {name:'MantoMan yo',age:70},
//   {name:'MantoMan yo',age:80},
//   {name:'MantoMan yo',age:120},
//   {name:'MantoMan yo',age:40},
//   {name:'MantoMan yo',age:40}
// ],'age'));
// console.log(Trap.min$([
//   {name:'sungmin yi', age:20},
//   {name:'sungmin si', age:30},
//   {name:'MantoMan yo',age:70},
//   {name:'MantoMan yo',age:80},
//   {name:'MantoMan yo',age:120},
//   {name:'MantoMan yo',age:40},
//   {name:'MantoMan yo',age:40}
// ],'age'));
// console.log(Trap.pluck$([  {name:'sungmin yi', age:20},
//   {name:'sungmin si', age:30},
//   {name:'MantoMan yo',age:70},
//   {name:'MantoMan yo',age:80},
//   {name:'MantoMan yo',age:120},
//   {name:'MantoMan yo',age:40},
//   {name:'MantoMan yo',age:40}],'name'))
//   console.log(Trap.sortBy$([  {name:'sungmin yi', age:20},
//     {name:'sungmin si', age:30},
//     {name:'MantoMan yo',age:70},
//     {name:'MantoMan yo',age:80},
//     {name:'MantoMan yo',age:120},
//     {name:'MantoMan yo',age:40},
//     {name:'MantoMan yo',age:40}],'age','bottom'))
//     const ages =Trap.indexBy$([{name:'sungmin yi', age:20},
//       {name:'sungmin si', age:30},
//       {name:'MantoMan yo',age:70},
//       {name:'MantoMan yo',age:80},
//       {name:'MantoMan yo',age:120},
//       {name:'MantoMan yo',age:40},
//       {name:'MantoMan yo',age:40}],'age');
//     console.log(Trap.shuffle$([1,2,3,4,5,6]))
//
//     console.log(Trap.pure$([0, 1, false, 2, '', 3,'A']))
