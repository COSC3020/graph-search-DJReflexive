// Helper class to track nodes
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