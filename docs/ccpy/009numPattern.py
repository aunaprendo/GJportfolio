def number_pattern(n):
    integers=[]
    if not isinstance(n, int):
        return "Argument must be an integer value."
    elif n<1:
        return "Argument must be an integer greater than 0."
    else:
        for num in range(1, n+1):
            integers.append(str(num))
    joined_integers = ' '.join(integers)
    return joined_integers
	         
print(number_pattern(4))
