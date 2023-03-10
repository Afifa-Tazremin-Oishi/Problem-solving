
    function getMinMax(arr, n)
    {
        minmax = new  Array();
        var i;
        var min;
        var max;
 
        /*If there is only one element then return it as min and max both*/
        if (n == 1) {
            minmax.max = arr[0];
            minmax.min = arr[0];
            return minmax;
        }
 
        /* If there are more than one elements, then initialize min
    and max*/
        if (arr[0] > arr[1]) {
            minmax.max = arr[0];
            minmax.min = arr[1];
        } else {
            minmax.max = arr[1];
            minmax.min = arr[0];
        }
 
        for (i = 2; i < n; i++) {
            if (arr[i] > minmax.max) {
                minmax.max = arr[i];
            } else if (arr[i] < minmax.min) {
                minmax.min = arr[i];
            }
        }
 
        return minmax;
    }
 
    /* Driver program to test above function */
     
        var arr = [10, 1000, 1, 59, 10, 120, 4, -1, 30];
        var arr_size = 6;
        minmax = getMinMax(arr, arr_size);
        document.write("Minimum element is " ,minmax.min +"<br>");
        document.write("Maximum element is " , minmax.max);
 