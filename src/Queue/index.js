export default function Queue() {
    var items = [];

    this.enqueue = function(ele) {
        items.push(ele);
    }

    this.dequeue = function() {
        return items.shift();
    }

    this.front = function() {
        return items[0];
    }

    this.isEmpty = function() {
        return items.length === 0;
    }

    this.size = function() {
        return items.length;
    }

    this.clear = function() {
        items = [];
    }

    this.print = function() {
        console.log(items.toString());
    }
}