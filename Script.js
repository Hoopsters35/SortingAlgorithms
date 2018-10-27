var ARR_SIZE = 100;
var sorters = {};

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Bubble sort
sorters.bubbleSort = function (array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j+1);
            }
        }
    }
    setTimeout(updateCanvas(array), 3000);
}

// Insertion sort
sorters.insertionSort = function(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if(array[j] < array[i]) {
                let k = j;
                while (k > 0 && array[k] > array[k-1]) {
                    swap(array, k, k-1);
                    k--;
                }
            }
        }
    }
}

// RADIX sort (3 types)

// Quick sort
sorters.quickSort = function (array, low, high) {
    if (low < high) {
        var alpha = partition(array, low, high);

        quickSort(array, low, alpha - 1);
        quickSort(array, alpha + 1, high);
    }
}

function partition(array, low, high) {
    var pivot = array[high];
    i = low - 1;

    for(j = low; j < high; j++) {
        if(array[j] <= pivot) {
            i++
            swap(array, i, j);
        }
    }
    swap(array, i+1, pivot);
    return (i + 1);
}
// Heap sort

// BOGO sort

// Shell sort
sorters.shellSort = function(array) {
    let gap = array.length / 2;
    while (gap > 0) {
        gap = 0;
    }
}

// Merge sort

// Counting sort

// Bucket sort


//Main script

document.getElementById("btnSort").addEventListener("click",
    () => {
        startSort();
    });
startSort = function() {
    for (sortFn of Object.entries(sorters)) {
        let arr = getRandArr();
        console.log(`Before ${sortFn[0]}`);
        console.log(arr);
        sortFn[1](arr);
        console.log(`After ${sortFn[0]}`);
        console.log(arr);
        console.log(`Array sorted: ${isSorted(arr)}`);
        console.log('---------------------------------');
    }
}
getRandArr = function() {
    let arr = []
    for (let i = 0; i < ARR_SIZE; i++) {
        arr.push(i);
    }
    shuffle(arr);
    return arr;
}

var shuffle = function(arr) {
    let curIndex = arr.length-1;
    while (curIndex > 0) {
        let newIndex = Math.floor(Math.random() * curIndex);
        let temp = arr[curIndex];
        arr[curIndex] = arr[newIndex];
        arr[newIndex] = temp;
        curIndex--;
    }
    updateCanvas(arr);
}
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

function updateCanvas(arr) {
    let canvas = document.getElementById("sortyboi");
    let ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#BB0000";
    ctx.lineWidth = 1000 / arr.length;
    let curSpot = ctx.lineWidth / 2;
    let heightUnit = 800/arr.length;
    for( let i = 0; i < arr.length; i++) {
        ctx.moveTo(curSpot,800);
        ctx.lineTo(curSpot, 800 - (heightUnit * arr[i]));
        ctx.stroke();
        curSpot += ctx.lineWidth;
    }
}