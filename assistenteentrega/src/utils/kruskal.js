function find(parents, node) {
  if (parents[node] !== node) {
    parents[node] = find(parents, parents[node]);
  }
  return parents[node];
}

function kruskal(nodes, edges) {
  const tempEdges = [...edges]
  const n = nodes.length;
  const parents = {};
  const result = [];

  for (const node of nodes) {
    parents[node.id] = node.id;
  }

  tempEdges.sort((a, b) => a.weight - b.weight);

  for (const edge of tempEdges) {
    const startParent = find(parents, edge.start);
    const endParent = find(parents, edge.end);

    if (startParent !== endParent) {
      result.push(edge);
      parents[startParent] = endParent;

      if (result.length === n - 1) {
        break;
      }
    }
  }

  return result;
}

export default kruskal