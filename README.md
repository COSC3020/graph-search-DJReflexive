# Search in Graphs

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the start to the target (not
the list of nodes that you looked at during the search). If start and target are
the same, it should return a list with only that node. If there is no path from
the start to the target, it should return an empty list. Start with the template
I provided in `code.js` and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Bonus

Implement and analyze breadth-first search.


# My Runtime Analysis

When the depthFirstSearch() algorithm is first called, we see the base cases where if the starting node does not exist or has already been visited, it will return an empty array. There is an additional base case where if the starting node is the target node, it will terminate an return the node and terminate. All these base cases run in a constant time.

Since I am using an adjacency matrix for this algorithm, and that we are interested in the worst case scenerio, the worst case runtime for this algorithm is $\Theta(|V|^2)$ since we have to iterate through every vertex within the matrix (every node is checked).


# Sources

- https://www.geeksforgeeks.org/javascript-array-flat-method/: For documentation on what the .flat() function does for arrays.
- ChatGPT: For the help with getting started with testing. Note: I had to rewrite all the ChatGPT code because I couldn't understand it and I wanted to remove jsverify (though I still use jsverify.random to generate numbers).
- TA Ali: For the help in getting my node class to work with my test file.

# Plagiarism Ackowledgement

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.