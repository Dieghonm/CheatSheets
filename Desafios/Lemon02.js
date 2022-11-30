const records = [
  {id:"user_ana", name:'Ana'},
  {id:'user_joap', name: 'Joao'}
]

function indexarPelaChave(list, index) {
  let dicio = {}
  list.forEach(element => {
    dicio[element[index]] = element
  });
  return dicio
}


console.log(indexarPelaChave(records,'id'));