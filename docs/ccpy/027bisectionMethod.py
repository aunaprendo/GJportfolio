def square_root_bisection(number, tolerance = 0.01, max_interations = 25):
    if number<0:
        raise ValueError('Square root of negative number is not defined in real numbers')
		
    elif number == 0 or number == 1:
        print(f'The square root of {number} is {number}')
        return number

    interations=0 
    high = max(1.0, number)
    low=0.0
    mid=0.0
	
    while (high-low)>tolerance and interations<max_interations:
        mid=(high+low)/2
        squared= pow(mid,2)
        if squared>number:
            high=mid
            interations+=1
        else:
            low=mid
            interations+=1
    if interations == max_interations:
        print(f'Failed to converge within {max_interations} iterations')
        return None

    else: 
        print(f'The square root of {number} is approximately {mid}')
        return mid	

print(square_root_bisection(0.001, 1e-7, 50))
