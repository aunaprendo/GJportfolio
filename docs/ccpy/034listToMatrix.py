def adjacency_list_to_matrix(dictionary):
    cols=len(dictionary)
    matrix=[]
    for nodes in dictionary.values():
        row = [0] * cols
        for index in nodes:
            row[index]=1
        matrix.append(row)
        print(row)   
    return matrix
            
print(adjacency_list_to_matrix({
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [2]
}))
