const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');



// Helper class to track nodes
// This class is in this file because I couldn't get it to run
//      in a seperate file. Me and TA Ali were trying to work 
//      with it, but ultimately put the class into this file.
class node {
    constructor(n, edges) {
        this.n = n;
        this.edges = edges;
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

// Helper function to generate a new node to check
function generateNode(size) {
    return jsc.random(0, size-1)
}

// Helper function to generate a new graph
function generateGraph(size) {
    let graph = []

    for (let i = 0; i < size; i++) {
        let edges = []
    
        for (let j = 0; j < size; j++) {
            edges.push(jsc.random(0, 1))
        }
    
        graph.push(new node(i, edges))
    }

    return graph
}

// Helper function to check if path is valid
function isValidPath(path, graph) {
    for (let i = 0; i < path.length-1; i++) {
        let node = path[i]
        let edgesList = graph[node].getEdges()

        // Check if edge to next node in the path exists
        if (!edgesList[path[i+1]]) {
            console.log("TEST FAILED: Given path is not valid...");
            return false;
        }
    }

    return true; // if it gets through the whole path, path is valid
}





// Custom Testing:
const graphSize = 250; // 250: Sufficiently large graph for testing
const numOfTests = 1000000; // 1000000: Sufficiently enough tests to run

const startNodeIndex = generateNode(graphSize);
const targetNodeIndex = generateNode(graphSize);
const graphGenerator = generateGraph(graphSize);
        
if (startNodeIndex >= graphGenerator.length || 
    targetNodeIndex >= graphGenerator.length) {
    return true; // Invalid indices pass the test, these are out of bounds
}

const startNode = graphGenerator[startNodeIndex];
const targetNode = graphGenerator[targetNodeIndex];

const result = depthFirstSearch(graphGenerator, startNode, targetNode);



// Loop to test multiple times
for (let i = 0; i < numOfTests; i++) {
    // if valid path exists, and target node was found, return true
    if (result.length != 0) {
        const checkValid = isValidPath(result, graphGenerator);
        const checkTargetWasFound = result[result.length-1] === targetNode.getNode();
        
        if (checkValid && checkTargetWasFound) {
            console.assert(checkValid && checkTargetWasFound, "Tests have failed...");
        }
        else if (!checkValid) {
            throw "The given path was not valid..."
        }
        else if (!checkTargetWasFound) {
            throw "The target was not found..."
        }
        else {
            throw "Some unknown error!!!"
        }
    }
}
