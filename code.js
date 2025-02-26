function quicksort(arr) {
    let stack = [[0, arr.length - 1]];

    while (stack.length > 0) {
        let [left, right] = stack.pop();

        if (left >= right) continue;

        let pivot = arr[right];
        let i = left - 1;

        for (let j = left; j < right; j++) {
            if (arr[j] < pivot) {
                i++;
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp
            }
        }
        let tmp = arr[i + 1];
        arr[i + 1] = arr[right];
        arr[right] = tmp
        let pivotIndex = i + 1;

        stack.push([left, pivotIndex - 1]);
        stack.push([pivotIndex + 1, right]);
    }
    
    return arr;
}
