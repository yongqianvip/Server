


// https://github.com/RubyLouvre/algorithmbook/issues/22
// 来自【司徒正美】大神



// 冒泡排序
//这个方法非常常用，其他章节都会用到，以后就省略不写
function swap(array, a, b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}


function bubbleSort1(array) {
    var n = array.length
    for (var i = 1; i < n; i++) {
        for (var j = 0; j < n - 1; j++) {
            if (array[j] > array[j + 1]) { //注意这里的索引变量都是j
                swap(array, j, j + 1)
            }
        }
    }
}

function bubbleSort2(array) {
    var n = array.length;
    for (var i = 1; i < n; i++) {
        var hasSort = true;
        for (var j = 0; j < n - 1; j++) {
            if (array[j] > array[j + 1]) { //注意这里的索引变量都是j
                swap(array, j, j + 1);
                hasSort = false
            }
        }
        if (hasSort) {
            break;
        }
    }
}
function bubbleSort3(array) {
    var n = array.length, k = n - 1, swapPos = 0;
    for (var i = 1; i < n; i++) {
        var hasSort = true;
        for (var j = 0; j < k; j++) {
            if (array[j] > array[j + 1]) { //注意这里的索引变量都是j
                swap(array, j, j + 1);
                hasSort = false;
                swapPos = j; //记录交换位置，直接到内部循环最后一个被交换的元素
            }
        }
        if (hasSort) {
            break;
        }
        k = swapPos;//重写内部循环的最后边界
    }
}
function cocktailSort(array) {
    var left, right, index, i;
    left = 0;//数组起始索引
    right = array.length - 1;//数组索引最大值
    index = left//临时变量

    //判断数组中是否有多个元素
    while (right > left) {
        var isSorted = false;
        //每一次进入while循环都会找出相应范围内最大最小的元素并分别放到相应的位置
        //大的排到后面
        for (i = left; i < right; i++) {//从左向右扫描
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                index = i;//记录当前索引
                isSorted = true
            }
        }
        right = index;//记录最后一个交换的位置
        //小的放到前面
        for (i = right; i > left; i--) {//从最后一个交换位置从右往左扫描
            if (array[i] < array[i - 1]) {
                swap(array, i, i - 1);
                index = i;
                isSorted = true
            }
        }
        left = index;//记录最后一个交换的位置
        if (!isSorted) {
            break
        }
    }
}
function shuffle(a) {
    var len = a.length;
    for (var i = 0; i < len - 1; i++) {
        var index = parseInt(Math.random() * (len - i));
        var temp = a[index];
        a[index] = a[len - i - 1];
        a[len - i - 1] = temp;
    }
}
function test(sortFn) {
    var array = []
    //向数组写入10000个数据 前1000倒序 ， 后9000顺序。
    for (var i = 0; i < 10000; i++) {
        if (i <= 1000) {
            array[i] = 1000 - i;
        } else {
            array[i] = i;
        }
    }
    console.log("========")
    var start = new Date - 0;
    sortFn(array);
    console.log("部分有序的情况", sortFn.name, new Date - start)
    shuffle(array);
    start = new Date - 0;
    sortFn(array);
    console.log("完全乱序的情况", sortFn.name, new Date - start)
}

test(bubbleSort1)
test(bubbleSort2)
test(bubbleSort3)
test(cocktailSort)
























// 选择排序
function selectSort(array) {
  var n = array.length;
  for (var i = 0; i < n; i++) {
    var minIndex = i; //保存当前最小数的索引
    for (var j = i + 1; j < n; j++) { //每次只从i的后一个位置开始查找
      if (array[j] < array[minIndex]) {
        minIndex = j;   
      }
    }
    if (i !== minIndex) {
      swap(array, i, minIndex)
    }
  }
}


// 插入排序
function insertSort2(array) {
    var n = array.length
    for (var i = 1; i < n; i++) { //［i,n－1］是无序区
        var target = array[i];
        if (target < array[i - 1]) { //减少无效的内部循环
            var j = i;
            while (j > 0 && array[j - 1] > target) {
                array[j] = array[j - 1]; // 前面的覆盖后面的
                j--;
            }
            array[j] = target; //放入坑位
        }
    }
}



















// 希尔排序
function shellSort(array) {
    //生成增量序列 3x+1 [1, 4, 13, 40, 121, 364, 1093, 3280, 9841] 
    var n = array.length,
        gaps = [1],
        gap = 1;
    while (true) {
        gap = gap * 3 + 1
        if (gap >= n) { //不能大于数组长度
            break
        }
        gaps.push(gap)
    }
    while (gap = gaps.pop()) {
        //对每个子数组进行排序
        for (var g = 0; g < gap; g++) {
            //****************正常的插入排序***************
            for (var i = g + gap; i < n; i += gap) {
                var target = array[i]; //从无序区取元素
                if (target < array[i - gap]) {
                    //无序区的元素比有序区的小
                    var j = i;
                    while (j > 0 && array[j - gap] > target) {
                        array[j] = array[j - gap]; //将前面的元素覆盖后面的
                        j -= gap;//不是－1而是－gap
                    }
                    array[j] = target;
                }
            }
            //****************正常的插入排序***************
        }
    }
};

function shellSort2(array) {
    //希尔序列 [1, 2, 4, 9, 19, 39, 78, 156, 312, 625, 1250, 2500, 5000] 
    var n = array.length,
        gaps = [],
        gap = n;
    while (gap != 1) {
        gap = gap >> 1; //相当于 Math.floor(n/2)
        gaps.unshift(gap)
    }
    while (gap = gaps.pop()) {
        //对每个子数组进行排序
        for (var g = 0; g < gap; g++) {
            //****************正常的插入排序***************
            for (var i = g + gap; i < n; i += gap) {
                var target = array[i]; //从无序区取元素
                if (target < array[i - gap]) {
                    //无序区的元素比有序区的小
                    var j = i;
                    while (j > 0 && array[j - gap] > target) {
                        array[j] = array[j - gap]; //将前面的元素覆盖后面的
                        j -= gap;//不是－1而是－gap
                    }
                    array[j] = target;
                }
            }
            //****************正常的插入排序***************
        }
    }
};
function getSedgewickSeq(n) {
    var startup1 = 0, startup2 = 2, array = [];
    for (var i = 0; i < n; i++) {
        if (i % 2 == 0) {
            array[i] = 9 * Math.pow(4, startup1) - 9 * Math.pow(2, startup1) + 1;
            startup1++;
        } else {
            array[i] = Math.pow(4, startup2) - 3 * Math.pow(2, startup2) + 1;
            startup2++;
        }
        if (array[i] >= n) {
            break;
        }
    }
    return array
}

function shellSort3(array) {
    //生成增量序列 [1, 5, 19, 41, 109, 209, 505, 929, 2161, 3905, 8929, 16001] 
    var n = array.length,
        gaps = getSedgewickSeq(n),
        gap = 1;
    while (gap = gaps.pop()) {
        //对每个子数组进行排序
        for (var g = 0; g < gap; g++) {
            //****************正常的插入排序***************
            for (var i = g + gap; i < n; i += gap) {
                var target = array[i]; //从无序区取元素
                if (target < array[i - gap]) {
                    //无序区的元素比有序区的小
                    var j = i;
                    while (j > 0 && array[j - gap] > target) {
                        array[j] = array[j - gap]; //将前面的元素覆盖后面的
                        j -= gap;//不是－1而是－gap
                    }
                    array[j] = target;
                }
            }
            //****************正常的插入排序***************
        }
    }
}

test(shellSort)
test(shellSort2)
test(shellSort3)






















// 归并排序
function mergeArray(a, b) {
    //n, m分别为a,b的最后索引; i为a的索引，j为b的索引，k为c的索引
    var n = a.length - 1, m = b.length - 1, i = 0, j = 0, k = 0, c = []
    while (i <= n && j <= m) {
        //先比较两个数组等长的部分，看谁的元素较小，谁就先进c数组
        c[k++] = a[i] < b[j] ? a[i++] : b[j++];
    }
    //可能a数组长些，那么将a数组剩下的元素一古脑儿全部扔进去
    while (i <= n) {
        c[k++] = a[i++];
    }
    //也可能是b数组长些，那么b数组的剩下的元素扔进去
    while (j <= m) {
        c[k++] = b[j++];
    }
    return c
}
function mergeArrayByIndex(a, begin, end, begin2, end2) {
    //n, m分别为a,b的最后索引; i为a的索引，j为b的索引，k为c的索引
    var n = end, m = end2, i = begin, j = begin2, k = 0, c = []
    while (i <= n && j <= m) {
        //先比较两个数组等长的部分，看谁的元素较先，谁就先进c数组
        c[k++] = a[i] < a[j] ? a[i++] : a[j++];
    }
    //可能a数组长些，那么将a数组剩下的元素一古脑儿全部扔进去
    while (i <= n) {
        c[k++] = a[i++];
    }
    //也可能是b数组长些，那么b数组的剩下的元素扔进去
    while (j <= m) {
        c[k++] = a[j++];
    }
    return c
}
function mergeSort(array, toMerge) {
    //如果数组还可以分割，并且处于分割模式
    if (array.length > 1 && toMerge !== true) {
        var top = array;
        var mid = array.length >> 1;
        top.left = array.slice(0, mid)
        top.right = array.slice(mid);
        top.left.top = top
        top.right.top = top;
        // console.log(top.left, top.right, "分割")
        mergeSort(top.left)
        mergeSort(top.right)
        //如果数组只剩下一个或者处于合并模式
    } else if (array.length === 1 || toMerge) {
        if (array.top && !array.merged) { //如果左边合并了右边，那么右边就不用再合并左边
            var isLeft = array === array.top.left;
            var neighbor = isLeft ? array.top.right : array.top.left;
            if (neighbor.length === 1 || neighbor.sorted) {
                var temp = mergeArray(array, neighbor)
                neighbor.merged = true;//表明已经
                // console.log(temp, "合并")
                for (var i = 0, n = temp.length; i < n; i++) {
                    array.top[i] = temp[i]
                }
                array.top.sorted = true
                mergeSort(array.top, true)
            }
        }
    }
}

function mergeSortObject(array) {
    function sort(obj, toMerge) {
        //如果数组还可以分割，并且处于分割模式
        var { array, begin, end } = obj;
        var n = end - begin;
        if (n !== 0 && toMerge !== true) {
            var mid = begin + ((end - begin) >> 1);
            obj.left = {
                begin: begin,
                end: mid,
                array: array,
                top: obj,
            }
            obj.right = {
                begin: mid + 1,
                end: end,
                array: array,
                top: obj,
            }
            sort(obj.left)
            sort(obj.right)
            //如果数组只剩下一个或者处于合并模式
        } else if (n === 0 || toMerge) {
            if (obj.top && !obj.merged) { //如果左边合并了右边，那么右边就不用再合并左边
                var top = obj.top;
                var isLeft = obj === top.left;
                var neighbor = isLeft ? top.right : top.left;
                if ((neighbor.end == neighbor.begin) || neighbor.sorted) {
                    var temp = mergeArrayByIndex(array, begin, end, neighbor.begin, neighbor.end)
                    neighbor.merged = true;//表明已经
                    var b = top.begin;
                    for (var i = 0, n = temp.length; i < n; i++) {
                        array[b + i] = temp[i]
                    }
                    top.sorted = true
                    sort(top, true)
                }
            }
        }
    }
    sort({
        array: array,
        begin: 0,
        end: array.length - 1
    })
    return array
}


function mergeSortObject2(array) {
    function sort(obj, toMerge) {
        //如果数组还可以分割，并且处于分割模式
        var { array, begin, end } = obj;
        var n = end - begin;
        if (n !== 0 && toMerge !== true) {
            var mid = begin + ((end - begin) >> 1);
            obj.left = {
                begin: begin,
                end: mid,
                array: array,
            }
            obj.right = {
                begin: mid + 1,
                end: end,
                array: array,
            }
            sort(obj.left)
            sort(obj.right)
            var temp = mergeArrayByIndex(array, begin, mid, mid + 1, end)
            for (var i = 0, n = temp.length; i < n; i++) {
                array[begin + i] = temp[i]
            }
        }
    }
    sort({
        array: array,
        begin: 0,
        end: array.length - 1
    })
    return array
}

function mergeSortSimple(array) {
    //如果数组还可以分割，并且处于分割模式
    function sort(array, begin, end) {
        //如果数组还可以分割，并且处于分割模式
        if (begin !== end) {
            var mid = begin + ((end - begin) >> 1);
            sort(array, begin, mid);
            sort(array, mid + 1, end);
            var temp = mergeArrayByIndex(array, begin, mid, mid + 1, end);
            for (var i = 0, n = temp.length; i < n; i++) {
                array[begin + i] = temp[i];
            }
        }
    }
    sort(array, 0, array.length - 1);
    return array
}

function shellSort(array) {
    //生成增量序列 3x+1 [1, 4, 13, 40, 121, 364, 1093, 3280, 9841] 
    var n = array.length,
        gaps = [1],
        gap = 1;
    while (true) {
        gap = gap * 3 + 1
        if (gap >= n) { //不能大于数组长度
            break
        }
        gaps.push(gap)
    }
    while (gap = gaps.pop()) {
        //对每个子数组进行排序
        for (var g = 0; g < gap; g++) {
            //****************正常的插入排序***************
            for (var i = g + gap; i < n; i += gap) {
                var target = array[i]; //从无序区取元素
                if (target < array[i - gap]) {
                    //无序区的元素比有序区的小
                    var j = i;
                    while (j > 0 && array[j - gap] > target) {
                        array[j] = array[j - gap]; //将前面的元素覆盖后面的
                        j -= gap;//不是－1而是－gap
                    }
                    array[j] = target;
                }
            }
            //****************正常的插入排序***************
        }
    }
};



test(bubbleSort3)
test(shellSort)
test(mergeSort)
test(mergeSortObject)
test(mergeSortObject2)
test(mergeSortSimple)





// 刚才我们是从上到下进行归产排序，我们的思路总是想着左边要合并右边。如果们一开始就把数组的每一个元素都当成一个微型数组，然后两两合并，再继而四四合并，一直它的长度靠近原数组长度。这样排序就完成了。

// image link  https://user-images.githubusercontent.com/190846/75106024-8c576200-5654-11ea-8c0b-c6c07a10cc1c.png
// 归并排序更好的图示 https://blog.csdn.net/zhuzuwei/article/details/80603708

function mergeArray(a, first, mid, last, temp) {
  var i = first, j = mid + 1;
  var m = mid, n = last;
  var k = 0;
  while (i <= m && j <= n) {
    if (a[i] <= a[j]) {
      temp[k++] = a[i++];
    } else {
      temp[k++] = a[j++];
    }
  }
  while (i <= m) {
    temp[k++] = a[i++];
  }
  while (j <= n) {
    temp[k++] = a[j++];
  }
  for (i = 0; i < k; i++) {
    a[first + i] = temp[i];
  }
}
function mergeSort(array) {// 进行两两归并
  var n = array.length;
  var temp = new Array(n)// 一次性的分配辅助空间
    //定义微型数组的长度，初始为1
  for (var sz = 1; sz < n; sz = sz + sz) {
    //定义微型数组的索引low
    for (var low = 0; low < n - sz; low += sz + sz) {
      mergeArray(array, low, low + sz - 1, 
         Math.min(low + sz + sz - 1, n - 1), temp);
    }
  }
}
















// 三路快排
// 快排是二路划分的算法。如果待排序列中重复元素过多，也会大大影响排序的性能。这时候，如果采用三路划分，则会很好的避免这个问题。

// https://blog.csdn.net/lw_power/article/details/77986602
// https://blog.csdn.net/jlqCloud/article/details/46939703

function quickSort3Ways(arr, left, right) {
    if (left >= right) {
        return;
    }

    var lt = left;
    var gt = right;
    var i = left + 1;
    var pivot = arr[left];
    while (i <= gt) {
        if (arr[i] < pivot) {
            swap(arr, i++, lt++);

        } else if (arr[i] > pivot) {
            swap(arr, i, gt--);
        } else { // arr[i]==v
            i++;
        }
    }
    quickSort3Ways(arr, left, lt - 1);
    quickSort3Ways(arr, gt + 1, right);

}

function quick(a) {
    if (a.length > 0) {
        quickSort3Ways(a, 0, a.length - 1);
    }
}
//4 1 3 0 2 5 9 8 6 7
var array = [4, 1, 7, 6, 9, 2, 8, 0, 3, 5]
quick(array)
console.log(array)


















// 双基准快速排序
// 与上面的三路快排功率差不多，它也是用来改善数组重复元素够多的情况

//inspired by https://blog.csdn.net/limenglin0927/article/details/18077923
function quickSortDualPivot(array, left, right) {
    if (right <= left) return;

    var pivot1 = array[left];
    var pivot2 = array[right];

    if (pivot1 > pivot2) {
        swap(array, left, right);
        pivot1 = array[left];
        pivot2 = array[right];
        //sort(array, left, right);
    } else if (pivot1 == pivot2) {
        while (pivot1 == pivot2 && left < right) {
            left++;
            pivot1 = array[left];
        }
    }

    var i = left + 1;
    var lt = left + 1;
    var gt = right - 1;

    while (i <= gt) {

        if (array[i] < pivot1) {
            swap(array, i++, lt++);
        } else if (pivot2 < array[i]) {
            swap(array, i, gt--);
        } else {
            i++;
        }

    }

    swap(array, left, --lt);
    swap(array, right, ++gt);
    quickSortDualPivot(array, left, lt - 1);
    quickSortDualPivot(array, lt + 1, gt - 1);
    quickSortDualPivot(array, gt + 1, right);
}

function quick(a) {
    if (a.length > 0) {
        quickSortDualPivot(a, 0, a.length - 1);
    }
}
//4 1 3 0 2 5 9 8 6 7
var array = [4, 1, 1, 7, 6, 9, 5, 2, 8, 0, 3, 5]
quick(array)
console.log(array)
















// 最大组合数问题
// 给一个非负整数数组，让它排序后合并后得到的数字最大，比如[3, 30, 34, 5, 9]排序成[9, 5, 34, 3, 30]，得到的数9534330为最大。

// 思路：我们先比较相邻两个数，它们组合后的两个方式的大小，

 [3, 30, 34, 5, 9].
        sort(function(a, b) {
            var v1 = Number(a + "" + b)
            var v2 = Number(b + "" + a);
            var ret = v1 > v2 ? 1 : (v1 === v2 ? 0: -1)
            return -1 * ret;
        })












// 计数排序
function countSort(arr) {
    var max = arr[0], min = arr[0], n = arr.length;
    for (var i = 0; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    var size = max - min + 1;
    var buckets = new Array(size).fill(0);
    //遍历所有桶
    for (var i = 0; i < n; i++) {
        buckets[arr[i] - min]++
    }
    for (var i = 1; i < size; i++) {
        //求前缀和
        buckets[i] += buckets[i - 1];
    }
    var ret = [];//逆向遍历源数组（保证稳定性）
    for (var i = n - 1; i >= 0; i--) {
        buckets[arr[i] - min]--;
        ret[buckets[arr[i] - min]] = arr[i];
    }
    return ret;
}

console.log(countSort([1, 0, 3, 1, 0, 1, 1]))
console.log(countSort([0, 5, 3, 2, 2]))
console.log(countSort([-2, -5, -45]))


















// 快排
function swap(array, a, b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}
function quickSort(array) {
    function QuickSort(array, left, right) {
        if (left < right) {
            var index = partition3(array, left, right);
            QuickSort(array, left, index - 1);
            QuickSort(array, index + 1, right);
        }
    }
    QuickSort(array, 0, array.length - 1);
    return array
}

function partition(array, left, right) {//分治函数
    var pivot = array[right];
    var pivotIndex = right;
    while (left < right) {
        while (left < right && array[left] <= pivot) {
            // 1.  防止越界需要left < right
            // 2. array[left] <= pivot 因为可能存在相同元素，
            left++; //找到比pivot大
        }
        while (left < right && array[right] >= pivot) {
            right--; //找到比pivot小
        }
        swap(array, left, right);
    }
    //最后一个比pivot大的left元素要与pivot相交换
    swap(array, left, pivotIndex);
    return left; //返回的是中间的位置
}
function partition2(array, left, right) {//分治函数
    var pivot = array[right];
    var pivotIndex = right;
    while (left < right) {
        while (left < right && array[left] <= pivot) {
            // 1.  防止越界需要left < right
            // 2. array[left] <= pivot 因为可能存在相同元素，
            left++; //找到比pivot大
        }
        array[right] = array[left]
        while (left < right && array[right] >= pivot) {
            right--; //找到比pivot小
        }
        array[left] = array[right]
    }
    //最后一个比pivot大的left元素要与pivot相交换
    array[right] = pivot
    return right; //返回的是中间的位置
}

function partition3(arr, left, right) {
    var cur = left; //找大数
    var prev = cur - 1; //找小数
    var key = arr[right];
    while (cur <= right) {
        if (arr[cur] <= key && ++prev != cur)
            swap(arr, prev, cur);
        cur++;
    }
    return prev;
}
console.log(quickSort([4, 1, 7, 6, 9, 2, 8, 0, 3, 5]))
console.log(quickSort([1, 0, 3, 1, 0, 1, 1]))
console.log(quickSort([0, 5, 3, 2, 2]))
console.log(quickSort([-2, -5, -45]))
