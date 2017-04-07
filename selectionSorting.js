/*jshint esversion: 6*/

function selectionSorting(arr) {

  var holder = null;

  for(var i = 0; i < arr.length; i++) {
    var minimumIndex = i;

    for(var h = i + 1; h < arr.length - 1; h++) {
      if(arr[h] < arr[minimumIndex]) {
        minimumIndex = h;
      }
    }
    holder = arr[i];
    arr[i] = arr[minimumIndex];
    arr[minimumIndex] = holder;
    // console.log('index ' + arr.findIndex(minimumIndex));
    //arr.splice()
    console.log('minimum ', minimumIndex);
    console.log('holder ', holder);
    console.log('updated array ', arr);
  }

  return arr;
}

module.exports = selectionSorting;