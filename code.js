
// Graph is an adjacency matrix
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
