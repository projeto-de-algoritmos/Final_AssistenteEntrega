import dijkstra from './dijkstra';

// import { Container } from './styles';

const findBestRoute = (mapa, items) => {
  const { nodes, edges } = mapa;
  
  let origem = "BSB"
  const rota = []

  for(var item of items){
    rota.push(dijkstra(mapa, origem, item.endereco))
    origem = item.endereco
  } 

  let ordemCidades = []

  for (var objeto of rota) {
    const { path } = objeto
    for(var cidade of path){
      if(!ordemCidades.includes(cidade)){
        ordemCidades.push(cidade)
      }
    }
  }

  ordemCidades = ordemCidades.map((item, index) => ({
    id: index,
    sigla: item
  }))

  console.log(ordemCidades)
  return ordemCidades
  // console.log('mst', mst)
}

export default findBestRoute;