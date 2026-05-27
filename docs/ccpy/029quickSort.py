def quick_sort(array):
    if len(array) <= 1:
        return array

    pivot = array[0]
    greater = []
    less = []
    equal = []

    for value in array:
        if value > pivot:
            greater.append(value)
        elif value < pivot:
            less.append(value)
        else:
            equal.append(value)

    return quick_sort(less) + equal + quick_sort(greater)
print(quick_sort([87, 11, 23, 18, 18, 23, 11, 56, 87, 56]))