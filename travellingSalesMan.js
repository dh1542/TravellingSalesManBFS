var adjacentMatrix = [  [0,     7,	10,	4,	7,	10,	6,	8,	12,	15,	8,	13,	17,	16,	14,	19,	13,	10],
                        [7,	    0,	3,	5,	4,  3,	9,	7,	5,	8,	11,	6,	10,	9, 11,	13,	6,	9],
                        [10,	3,	0,	8,	7,	6,	12,	10,	6,	5,	14,	9,	7,	10, 14,	10,	3,	12],
                        [4,	    5,	8,	0,	3,	6,	4,	4,	8,	11,	6,	9,	13,	12, 10,	16,	9,	6],
                        [7,	    4,	7,	3,	0,	3,	5,	3,	5,	8,	7,	6,	10,	9, 7,	13,	6,	5],
                        [10,	3,	6,	6,	3,	0,	6,	4,	2,	5,	8,	3,	7,	6, 8,	10,	3,	6],
                        [6,	    9,	12,	4,	5,	6,	0,	2,	6,	9,	2,	7,	11,	10, 8,	14,	9,	4],
                        [8,	    7,	10,	4,	3,	4,	2,	0,	4,	7,	4,	5,	9,	8, 6,	12,	7,	2],
                        [12,	5,	6,	8,	5,	2,	6,	4,	0,	3,	8,	3,	5,	4, 8,	8,	3,	6],
                        [15,	8,	5,	11,	8,	5,	9,	7,	3,	0,	11,	6,	4,	7, 11,	5,	2,	9],
                        [8,	    11,	14,	6,	7,	8,  2,	4,	8,	11,	0,	5,  9,	8, 6,	12,	11,	2],
                        [13,	6,	9,	9,	6,	3,	7,	5,	3,	6,	5,	0,	4,	3, 5,	7,	6,	3],
                        [17,	10,	7,	13,	10,	7,	11,	9,  5,	4,	9,	4,	0,	3, 7,	3,	4,	7],
                        [16,	9,	10,	12,	9,	6,	10,	8,	4,  7,	8,	3,	3,	0, 4,	3,	7,	6],
                        [14,	11,	14,	10,	7,	8,	8,	6,	8,	11,	6,	5,	7,	4, 0,	6,	11,	4],
                        [19,	13,	10,	16,	13,	10,	14,	12,	8,	5,	12,	7,	3,	3, 6,	0,	7,	10],
                        [13,	6,	3,	9,	6,	3,	9,	7,	3,	2,	11,	6,	4,	7, 11,	7,	0,	9],
                        [10,	9,	12,	6,	5,	6,	4,	2,	6,	9,	2,	3,	7,	6, 4,	10,	9,	0]];





















var cost = 0;


function nearestNeighbour(startingNode, numberOfNodes){
    let visited = initVisitedArray(numberOfNodes);

    // visit starting node
    visited[startingNode] = true;
    


    let path = []
    let pathCost = 0;
    let currentNode = startingNode;
    let currentLowest = 99999999999;
    let currentNearestNode;

    // find shortest path to next unvisited vertex
    while(!checkIfAllNodesWereVisited(visited)){
        
        for(let i = 0; i < adjacentMatrix[currentNode].length; i++){
            
            if(!visited[i]){
                
                let distanceToNode = adjacentMatrix[currentNode][i]; 
                
                if(distanceToNode < currentLowest){
                    
                    currentLowest = distanceToNode;
                    currentNearestNode = i;
                }
            }
        }
        pathCost += currentLowest;
        
        


        
        currentNode = currentNearestNode;
        visited[currentNode] = true;
        path.push(currentNode + 1);
        currentLowest = 999999999;
        

    }
    console.log(currentNode)
    // add path form last node to beginning node 
    pathCost += adjacentMatrix[currentNode][startingNode]

    
    console.log("path: " + path)
    console.log("costs: " + pathCost)
    
}


/**
 * Initializes visited array and sets all nodes as univisited
 * @param {int} length 
 * @returns 
 */
function initVisitedArray(length){
    let visited = [];
    for(let i = 0; i < length; i++){
        visited.push(false);
    }
    return visited;
}

function checkIfAllNodesWereVisited(visited){
    for(let i = 0; i < visited.length; i++){
        if(!visited[i]){
            return false;
        }
    }
    return true;
}



nearestNeighbour(0, 18)

