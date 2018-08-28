// import DivideBy2 from './Stack/DivideBy2';
import Queue from './Queue';


/* Stack */

/* 
var divideBy2 = new DivideBy2();
console.log(divideBy2.divideBy2(2131, 8));
 */

/* Queue */
var queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue("John");
queue.enqueue("Jack");
queue.print();
queue.enqueue("Camila");
queue.print();