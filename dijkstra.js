let V;

function dijkstra(graph, source) {
    let distanceArray = [];
    let sptFound = [];

    V = graph.length;

    for (index in graph) {
        distanceArray[index] = Infinity;
        sptFound[index] = false;
    };

    distanceArray[source] = 0;

    for (vertex of graph) {
        let mdv = findVertexWithMinimumDistance(distanceArray, sptFound);

        sptFound[mdv] = true;

        for (let v = 0; v < V; v++) {
            if (
                !sptFound[v] && graph[mdv][v] &&
                distanceArray[mdv] !== Infinity &&
                distanceArray[mdv] + graph[mdv][v] < distanceArray[v]
            ) {
                distanceArray[v] = distanceArray[mdv] + graph[mdv][v];
            }
        }
    }

    return(distanceArray);
}

function findVertexWithMinimumDistance(distanceArray, sptSet) {
    let min = Infinity;
    let min_index;

    for (let v = 0; v < V; v++) {
        if (sptSet[v] === false && distanceArray[v] <= min) {
            min = distanceArray[v];
            min_index = v;
        }
    }

    return min_index;
}

let graph = [
    [0, 4, 0, 0, 0, 0, 0, 8, 0],
    [4, 0, 8, 0, 0, 0, 0, 11, 0],
    [0, 8, 0, 7, 0, 4, 0, 0, 2],
    [0, 0, 7, 0, 9, 14, 0, 0, 0],
    [0, 0, 0, 9, 0, 10, 0, 0, 0],
    [0, 0, 4, 14, 10, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 1, 6],
    [8, 11, 0, 0, 0, 0, 1, 0, 7],
    [0, 0, 2, 0, 0, 0, 6, 7, 0]
];

let shortestPathTree = dijkstra(graph, 0);

console.info(shortestPathTree);