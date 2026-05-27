def selection_sort(array):
    position = 0

    while position < len(array):
        start = position
        small = array[position]
        index = position

        while start < len(array):
            if array[start] < small:
                small = array[start]
                index = start
            start += 1

        if array[position] != small:
            del array[index:index + 1]
            array.insert(position, small)

        position += 1

    return array


print(selection_sort([10, 100, 2, 15, 12]))

#alt: array[position], array[index] = array[index], array[position]