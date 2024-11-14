function countReachableNodes(N, M, edges) {
    const graph = Array.from({ length: N + 1 }, () => []);
    
    edges.forEach(([u, v]) => {
        graph[u].push(v);
        graph[v].push(u);
    });

    const visited = Array(N + 1).fill(false);

    function dfs(node) {
        visited[node] = true;
        let count = 0;

        for (const next of graph[node]) {
            if (!visited[next]) { 
                count += 1 + dfs(next);
            }
        }
        
        return count;
    }
    return dfs(1);
}

const N = 3;
const M = 2;
const edges = [
    [1, 2],
    [1, 3]
];
console.log(countReachableNodes(N, M, edges));