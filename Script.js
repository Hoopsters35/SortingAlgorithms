//Main script


// Bubble sort
var bubbleSort = function bubbleSort(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[i+1] < array[i]) {
                var temp = array[i];
                array[i+1] = array[i];
                array[i] = temp;
            }
        }
    }
}

// Insertion sort

// RADIX sort (3 types)

// Quick sort

// Heap sort

// BOGO sort

// Shell sort

// Merge sort

// Counting sort

// Bucket sort
