def setZeroes(matrix):
    m = len(matrix)
    n = len(matrix[0])
    rows = set()
    cols = set()
    for i in range(m):
        for j in range(n):
            if matrix[i][j] == 0:
                rows.add(i)
                cols.add(j)
    for i in rows:
        for j in range(n):
            matrix[i][j] = 0
    for i in cols:
        for j in range(m):
            matrix[j][i] = 0
    return matrix