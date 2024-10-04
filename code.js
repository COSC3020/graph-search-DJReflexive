
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

                if (pathStack.at(pathStack.length-1) == targetNode) { break; }
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

test0Graph = [
    new node(0, [1,1,0,1]),
    new node(1, [1,1,0,0]),
    new node(2, [0,0,0,0]),
    new node(3, [0,0,1,0])
];

test0StartNode = test0Graph[0];
test0TargetNode = test0Graph[2];

console.log(depthFirstSearch(test0Graph, test0StartNode, test0TargetNode));