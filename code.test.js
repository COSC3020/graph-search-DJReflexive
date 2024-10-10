
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



// Custom Testing:
const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const graphSize = 250; // Sufficiently large graph for testing
const numOfTests = 100000; // Sufficiently enough tests to run


// Generates node with 
const nodeGenerator = jsc.suchthat(jsc.nat(graphSize-1), n => n >= 0);
const graphGenerator = jsc.bless({
    generator: jsc.integer(graphSize).generator.map(size => {
        return Array.from({ length: size }, (_, idx) => {
            // Generate an array of 0s and 1s of length `size`
            const edges = jsc.array(jsc.nat(1), size).generator;
            return new node(idx, edges);
          });
    })
});




const test =
    jsc.forall(graphGenerator, nodeGenerator, nodeGenerator, 
                    (graph, startNodeIndex, targetNodeIndex) => {
        if (startNodeIndex >= graph.length || targetNodeIndex >= graph.length) {
            return true; // Invalid indices pass the test, these are out of bounds
        }
        
        const startNode = graph[startNodeIndex];
        const targetNode = graph[targetNodeIndex];


        const result = depthFirstSearch(graph, startNode, targetNode);

        // 1. if startNode is targetNode, result is [startNode]
        if (startNode == targetNode) {
            return result.length === 1 && result[0] === startNode.getNode();
        }

        // 2. if no path exists, result is []
        const allEdges = graph.map(node => node.getEdges()).flat();
        if (!allEdges.includes(1)) {
            return result.length === 0;
        }

        // 3. if valid path exists, last elem should be the targetNode
        return result[result.length-1] === targetNode.getNode();
    });

jsc.assert(test, { tests: numOfTests });
