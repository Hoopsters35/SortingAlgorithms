//Main script

// Bubble sort

// Insertion sort

// RADIX sort (3 types)

// Quick sort
var quickSort = function quickSort(array, low, high) {
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
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    var temp = array[i+1];
    array[i + 1] = array[pivot];
    array[pivot] = temp;
    return (i + 1);
}
// Heap sort

// BOGO sort

// Shell sort

// Merge sort

// Counting sort

// Bucket sort
