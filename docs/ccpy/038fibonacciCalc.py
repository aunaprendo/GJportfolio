def fibonacci(n):
    if n < 0:
        return undefined
    if n <= 1:
        return n
        
    sequence = [0, 1]
    
    i=2
    while i <= n:
        sequence.append(sequence[i - 1] + sequence[i - 2])
        i+=1
        
    return sequence[n]

print(fibonacci(15))

