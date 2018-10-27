var ARR_SIZE = 100;
var sorters = {};

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//Bad sort
function badSort(array) {
    let n = array.length();
    setInterval(()=>{
        updateCanvas(array);
        moveToEnd(array, n);
        n--;
    }, 100);
}

function moveToEnd(array, n) {
    if (n>0) {
        let num = -1;
        let index = -1;
        for (let i = 0; i < n; i++) {
            if (array[i] > num) {
                num = array[i];
                index = i;
            }
        }
    }
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
}

// Insertion sort
sorters.insertionSort = function(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if(array[j] >= array[i]) {
                //Insert arr[i] to the left of arr[j]
                for (let k = j; k <= i; k++) {
                    swap(array, k, i);
                }
            }
        }
    }
}

// RADIX sort (3 types)

// Quick sort
sorters.quickSort = function (array) {
    let low = 0;
    let high = array.length - 1;
    qSort(array, low, high);
}

function qSort(array, low, high) {
    if (low < high) {
        let alpha = partition(array, low, high);

        qSort(array, low, alpha - 1);
        qSort(array, alpha + 1, high);
    }
}

function partition(array, low, high) {
    let pivot = array[high];
    i = low;

    for(j = low; j <= high; j++) {
        if(array[j] <= pivot) {
            swap(array, i, j);
            i++
        }
    }
    return (i - 1);
}
// Heap sort
sorters.heapSort = function(array) {
    buildHeap(array, 0);
    sortHeap(array);
}
function buildHeap(array, top) {
    let leftIndex = 2 * top + 1;
    if (leftIndex < array.length) {
        buildHeap(array, leftIndex);
        let rightIndex = leftIndex + 1;
        if (rightIndex < array.length) {
            buildHeap(array, rightIndex);
        }
    }
    siftDown(array, top, array.length - 1);
}
function siftDown(array, top, last) {
    let leftIndex = 2 * top + 1;
    if (leftIndex <= last) {
        let smallestIndex = leftIndex;
        let rightIndex = leftIndex + 1;
        if (rightIndex <= last && array[rightIndex] < array[smallestIndex]) {
            smallestIndex = rightIndex;
        }
        if (array[top] > array[smallestIndex]) {
            swap(array, top, smallestIndex);
            siftDown(array, smallestIndex, last);
        }

    }
}
function sortHeap(array) {
    let last = array.length - 1;
    while (last > 0) {
        swap(array, 0, last);
        siftDown(array, 0, --last);
    }
    array.reverse();
}

// BOGO sort

// Shell sort
sorters.shellSort = function(array) {
    let gap = Math.floor(array.length / 2);
    for (let gap = Math.floor(array.length/2); gap > 0; gap = Math.floor(gap/=2)) {
        for (i = gap; i < array.length; i++) {
            for (let j = i; j>=gap && array[j-gap] > array[j]; j -= gap) {
                swap(array, j-gap, j);
            }
        }
    }
}

// Merge sort
//TODO: Justin
sorters.mergeSort = function(array) {
    let l = 0;
    let r = array.length - 1;
    mSort(array, l, r);
}

function mSort(array, l, r) {
    if (l < r) {
        let m = Math.floor((l + r) / 2);
        mSort(array, l, m);
        mSort(array, m+1, r);
        merge(array, l, m, r);
    }
}

function merge(array, l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;

    let left = [], right = [];
    for (let i = 0; i < n1; i++) {
        left[i] = array[l+i];
    }
    for (let j = 0; j < n1; j++) {
        right[j] = array[m+j+1];
    }

    let i = 0, j = 0, k = 1;
    while (i < n1 && j < n2) {
        if (left[i] <= right[i]) {
            array[k] = left[i];
            i++;
        } else {
            array[k] = right[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        array[k] = left[i];
        i++;
        k++;
    }

    while (j < n2) {
        array[k] = right[j];
        j++;
        k++;
    }
}

// Counting sort

// Bucket sort


//Main script

document.getElementById("btnSort").addEventListener("click",
    () => {
        startSort();
    });
startSort = function() {
    // for (sortFn of Object.entries(sorters)) {
    //     let arr = getRandArr();
    //     window.setTimeout(updateCanvas(arr), 1);
    //     console.log(`Before ${sortFn[0]}`);
    //     console.log(arr);
    //     sortFn[1](arr);
    //     console.log(`After ${sortFn[0]}`);
    //     console.log(arr);
    //     console.log(`Array sorted: ${isSorted(arr)}`);
    //     console.log('---------------------------------');
    // }
    let arr = getRandArr();
    updateCanvas(arr);
    window.setTimeout(() => {
        console.log(`Before Bubble Sort`);
        console.log(arr);
        sorters.bubbleSort(arr);
        console.log(`After Bubble Sort`);
        console.log(arr);
        console.log(`Array sorted: ${isSorted(arr)}`);
        console.log('---------------------------------');
    }, 1000);
}
getRandArr = function() {
    let arr = [];
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
        swap(arr, curIndex, newIndex);
        curIndex--;
    }
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
    canvas.width = canvas.width;
    ctx.strokeStyle = "#BB0000";
    ctx.lineWidth = 800 / arr.length;
    let curSpot = ctx.lineWidth / 2;
    let heightUnit = 600/arr.length;
    for( let i = 0; i < arr.length; i++) {
        ctx.moveTo(curSpot,600);
        ctx.lineTo(curSpot, 600 - (heightUnit * arr[i]));
        ctx.stroke();
        curSpot += ctx.lineWidth;
    }
}