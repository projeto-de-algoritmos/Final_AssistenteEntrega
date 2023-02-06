function dijkstra(graph, startNodeId, endNodeId) {
  let nodes = graph.nodes;
  let edges = graph.edges;

  let unvisitedNodes = nodes.slice();
  let distances = {};
  let previousNodes = {};

  nodes.forEach(node => {
      distances[node.id] = Infinity;
      previousNodes[node.id] = null;
  });

  distances[startNodeId] = 0;

  while (unvisitedNodes.length) {
      let currentNode = getNodeWithSmallestDistance(unvisitedNodes, distances);

      if (currentNode.id === endNodeId) {
          return {
              path: getPath(previousNodes, startNodeId, endNodeId),
              distance: distances[endNodeId]
          };
      }

      let neighbors = getNeighbors(nodes,currentNode, edges);
      neighbors.forEach(neighbor => {
          let edge = getEdge(currentNode, neighbor, edges);
          let distance = distances[currentNode.id] + edge.weight;

          if (distance < distances[neighbor.id]) {
              distances[neighbor.id] = distance;
              previousNodes[neighbor.id] = currentNode.id;
          }
      });

      removeNode(currentNode, unvisitedNodes);
  }

  return {
      path: [],
      distance: Infinity
  };
}

function getNodeWithSmallestDistance(nodes, distances) {
  return nodes.reduce((acc, node) => {
      if (distances[acc.id] > distances[node.id]) {
          return node;
      }
      return acc;
  });
}

function getNeighbors(nodes, node, edges) {
  return edges.reduce((acc, edge) => {
      if (edge.start === node.id) {
          let neighbor = getNodeById(edge.end, nodes);
          acc.push(neighbor);
      } else if (edge.end === node.id) {
          let neighbor = getNodeById(edge.start, nodes);
          acc.push(neighbor);
      }
      return acc;
  }, []);
}

function getEdge(node1, node2, edges) {
  return edges.find(edge => (edge.start === node1.id && edge.end === node2.id) ||
      (edge.start === node2.id && edge.end === node1.id));
}

function removeNode(node, nodes) {
  let index = nodes.indexOf(node);
  nodes.splice(index, 1);
}

function getNodeById(id, nodes) {
  return nodes.find(node => node.id === id);
}

function getPath(previousNodes, startNodeId, endNodeId) {
  let path = [];
  let currentNodeId = endNodeId;

  while (currentNodeId !== startNodeId) {
      path.unshift(currentNodeId);
      currentNodeId = previousNodes[currentNodeId];
  }

  path.unshift(startNodeId);

  return path;
}

export default dijkstra