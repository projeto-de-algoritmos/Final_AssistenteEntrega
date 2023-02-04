function kruskal(graph) {
  const nodes = graph.nodes;
  const edges = graph.edges;

  // Criação de um array de pares ordenados
  const sortedEdges = edges.sort((a, b) => a.weight - b.weight);

  // Criando uma estrutura de dados de conjunto
  const sets = [];
  nodes.forEach((node, i) => {
    sets[node.id] = i;
  });

  // Função para encontrar o pai de um nó
  function findSet(id) {
    while (id !== sets[id]) {
      sets[id] = sets[sets[id]];
      id = sets[id];
    }
    return id;
  }

  // Função para unir dois conjuntos
  function union(u, v) {
    sets[findSet(u)] = sets[findSet(v)];
  }

  const mst = [];
  let numEdges = 0;
  for (let i = 0; numEdges < nodes.length - 1; i++) {
    const edge = sortedEdges[i];
    const u = edge.start;
    const v = edge.end;

    if (findSet(u) !== findSet(v)) {
      mst.push(edge);
      numEdges++;
      union(u, v);
    }
  }

  return mst;
}


export default kruskal