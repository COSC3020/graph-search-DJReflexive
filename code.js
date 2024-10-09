
// graph is a adjacency matrix
function depthFirstSearch(graph, startNode, targetNode) {

    // If there is no node, or the node has been visitied, skip
    if (startNode == null || startNode.hasBeenVisited()) { return []; }


    let pathStack = [];
    let currentNode = startNode.getNode();

    // If the node is the target, return the pathStack
    if (startNode == targetNode) {
        pathStack.push(currentNode);

        return pathStack;
    }

    // Mark this node as visited
    startNode.setVisited();
    
    // Recursive call
    let edges = startNode.getEdges();
    for (let i = 0; i < edges.length; i++) {
        if (edges[i] == 1) {
            let buffer = depthFirstSearch(graph, graph[i], targetNode);

            if (buffer.length != 0) {
                pathStack.push(currentNode);

                pathStack.push(buffer);
                pathStack = pathStack.flat(Infinity);

                if (pathStack[pathStack.length-1] == targetNode.getNode()) { break; }
            }
        }
    }

    return pathStack.flat(Infinity);
}

class node {
    constructor(n, edges) {
        this.n = n;
        this.edges = edges
        this.isVisited = false;
    }

    getNode() {
        return this.n;
    }

    getEdges() {
        return this.edges;
    }

    hasBeenVisited() {
        return this.isVisited;
    }

    setVisited() {
        this.isVisited = true;
    }
}


// TODO: Testing...
test0Graph = [];
test0StartNode = test0Graph[1];
test0TargetNode = test0Graph[5];


test1Graph = [
    new node(0, [1,1,0,1]),
    new node(1, [1,1,0,0]),
    new node(2, [0,0,0,0]),
    new node(3, [0,0,1,0])
];
test1StartNode = test1Graph[0];
test1TargetNode = test1Graph[2];


test2Graph = [
    new node(0, [1,1,0,1,1,0]),
    new node(1, [1,1,0,0,0,1]),
    new node(2, [0,0,0,0,0,0]),
    new node(3, [0,0,1,0,1,1]),
    new node(4, [1,1,1,1,1,1]),
    new node(5, [1,0,0,1,1,0]),
];
test2StartNode = test2Graph[4];
test2TargetNode = test2Graph[2];


test3Graph = [
    new node(0, [1,1,0,1,1,0]),
    new node(1, [1,1,0,0,0,1]),
    new node(2, [0,0,0,0,0,0]),
    new node(3, [0,0,1,0,1,1]),
    new node(4, [1,1,1,1,1,1]),
    new node(5, [1,0,0,1,1,0]),
];
test3StartNode = test3Graph[2];
test3TargetNode = test3Graph[5];



console.log("test0: [" + depthFirstSearch(test0Graph, test0StartNode, test0TargetNode) + "]");
console.log("test1: [" + depthFirstSearch(test1Graph, test1StartNode, test1TargetNode) + "]");
console.log("test2: [" + depthFirstSearch(test2Graph, test2StartNode, test2TargetNode) + "]");
console.log("test3: [" + depthFirstSearch(test3Graph, test3StartNode, test3TargetNode) + "]");