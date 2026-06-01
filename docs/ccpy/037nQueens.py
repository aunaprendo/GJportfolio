def dfs_n_queens(n):
    if n<1:
        return []

For example, if there is a 4x4 board, one valid arrangement is:

[1, 3, 0, 2]
That means that in row 0, the queen is placed in column 1; in row 1, the queen is placed in column 3; in row 2, the queen is placed in column 0; and in row 3, the queen is placed in column 2.

Visually, this arrangement looks like:

. Q . .
. . . Q
Q . . .
. . Q .
Where Q represents a queen and . represents an empty square.

In this lab, you will implement the N-Queens problem solver using the depth-first search approach.



The function should return a list of solutions; each solution is itself a list of length n, where the element at index i is the column index (0-based) of the queen in row i.
ss than 1, the function should return an empty list.
Waiting: 3. The function should return a list of solutions, where each solution is a list of length n.
Waiting: 4. dfs_n_queens(1) should return [[0]].
Waiting: 5. dfs_n_queens(2) should return [].
Waiting: 6. dfs_n_queens(3) should return [].
Waiting: 7. dfs_n_queens(4) should return [[1, 3, 0, 2], [2, 0, 3, 1]].
Waiting: 8. dfs_n_queens(5) should return [[0, 2, 4, 1, 3], [0, 3, 1, 4, 2], [1, 3, 0, 2, 4], [1, 4, 2, 0, 3], [2, 0, 3, 1, 4], [2, 4, 1, 3, 0], [3, 0, 2, 4, 1], [3, 1, 4, 2, 0], [4, 1, 3, 0, 2], [4, 2, 0, 3, 1]].
Waiting: 9. len(dfs_n_queens(5)) should be 10.