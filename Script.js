//Main script
document.getElementById("btnSort").addEventListener("click",
    () => {
        startSort(sortArrs)
    });
startSort = (arr) => {
    for (fn of sorters) {
        fn(arr);
    }
}
var sortArrs = [bubbleSort];

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
