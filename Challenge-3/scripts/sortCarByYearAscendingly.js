function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  // for(let i = 0; i < cars.length; i++){
  //   for(let j = 0; j < cars.length - i - 1; j++){
  //     if(cars[j]["year"] > cars[j + 1]["year"]){
  //       let tmp = cars[j];
  //       cars[j] = cars[j + 1];
  //       cars[j + 1] = tmp;
  //     }
  //   }
  // }

  let swapped;
  do {
    swapped = false;

    for (let i = 0; i < result.length - 1; i++) {
      if (result[i]["year"] > result[i + 1]["year"]) {
        let tmp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
