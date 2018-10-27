//Main script
var ARR_SIZE = 100;

document.getElementById("btnSort").addEventListener("click",
    () => {
        let arr = getRandArr();
        console.log(arr);
        //startSort(arr);
    });
startSort = (arr) => {
    for (fn of sortArrs) {
        fn(arr);
    }
}
//var sortArrs = [bubbleSort];
getRandArr = function() {
    let arr = []
    for (let i = 0; i < ARR_SIZE; i++) {
        arr.push(i);
    }
    shuffle(arr);
    return arr;
}

var shuffle = function(arr) {
    let curIndex = arr.length;
    while (curIndex > 0) {
        let newIndex = Math.floor(Math.random() * curIndex);
        let temp = arr[curIndex];
        arr[curIndex] = arr[newIndex];
        arr[newIndex] = temp;
        curIndex--;
    }
}

// Bubble sort

// Insertion sort

// RADIX sort (3 types)

// Quick sort

// Heap sort

// BOGO sort

// Shell sort

// Merge sort

// Counting sort

// Bucket sort
