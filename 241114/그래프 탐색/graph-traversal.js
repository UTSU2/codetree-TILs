const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = input[0].split(' ').map(Number);
const graph = Array.from(Array(n+1), ()=>[]);
let visited = Array(n+1).fill(false);
let vertexCnt = 0;

for (let i = 1; i<=m; i++){
    const [v1, v2] = input[i].trim().split(' ').map(Number);
    graph[v1].push[v2];
    graph[v2].push[v1];
}

function dfs(vertex) {
    graph[vertex].forEach(currV =>{
        if(!visited[currV]){
            visited[currV] = true;
            vertexCnt++;
            dfs(currV);
        }
    });
}

visited[1] = true;
dfs(1);
console.log(vertexCnt);