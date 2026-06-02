def dfs_n_queens(n):
    result = []
    if n<1:
        return result
    def dfs (row, column):
        lastQ = len(column) - 1;
        
        preQ=0
        while preQ<lastQ:
            if column[preQ] == column[lastQ]:
                return
                
            rowDiff = abs(preQ-lastQ)
            columnDiff = abs(column[preQ]-column[lastQ])
            if rowDiff == columnDiff:
                return
            preQ+=1
            
        if row==n:
            result.append(column[:])
            return
            
        col=0
        while col<n:
            column.append(col)
            dfs(row+1,column)
            column.pop()
            col+=1
            
    dfs(0, []);
    return result;

print(dfs_n_queens(4))
