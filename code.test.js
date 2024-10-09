import { node } from './code.node.js'; 


// My custom jsverify testing

const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');


// TODO: Instantiate node class




// Test checks what happens when graph is empty
const test0Graph = [];
// Start at node 1, try find node 5. (These nodes don't exist in test0Graph)
const test0 = depthFirstSearch(test0Graph, test0Graph[1], test0Graph[5])



// Basic Test with 4x4 matrix
const test1Graph = [
    new MyNode(0, [1,1,0,1]),     
    new node(1, [1,1,0,0]),
    new node(2, [0,0,0,0]), // Node with no edges
    new node(3, [0,0,1,0])
];
// Start at node 0, try to find node 2
const test1 = depthFirstSearch(test1Graph, test1Graph[0], test1Graph[2]);



// Basic Test with 6x6 matrix
const test2Graph = [
    new node(0, [1,1,0,1,1,0]),
    new node(1, [1,1,0,0,0,1]),
    new node(2, [0,0,0,0,0,0]), // Node with no edges
    new node(3, [0,0,1,0,1,1]),
    new node(4, [1,1,1,1,1,1]), // Node with all edges to other nodes
    new node(5, [1,0,0,1,1,0]),
];
// Start at node 4, try to find node 2
const test2 = depthFirstSearch(test2Graph, test2Graph[4], test2Graph[2]);



// This test shows what happens when the target node is not found
const test3Graph = [
    new node(0, [1,1,0,1,1,0]),
    new node(1, [1,1,0,0,0,1]),
    new node(2, [0,0,0,0,0,0]), // Node with no edges
    new node(3, [0,0,1,0,1,1]),
    new node(4, [1,1,1,1,1,1]), // Node with all edges to other nodes
    new node(5, [1,0,0,1,1,0]),
];
// Start at node 2, try to find node 5. (Cannot reach node 5)
const test3 = depthFirstSearch(test3Graph, test3Graph[2], test3Graph[5]);




// Expected results:
jsc.assert(test0 == [], { tests: 250 });
jsc.assert(test1 == [0,3,2], { tests: 250 });
jsc.assert(test2 == [4,0,1,5,3,2], { tests: 250 });
jsc.assert(test3 == ["This value should crash"], { tests: 250 });

