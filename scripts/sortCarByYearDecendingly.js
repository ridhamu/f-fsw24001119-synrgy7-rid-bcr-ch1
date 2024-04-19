function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  //do while
  let swapped;
  do {
    swapped = false;

    for (let i = 0; i < result.length - 1; i++) {
      if (result[i]["year"] < result[i + 1]["year"]) {
        let tmp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
