def transpose(matrix):
    row = len(matrix)
    cols = len(matrix[0])
    transpose = [[0]*row for _ in range(cols)]
    for i in range(row):
        for j in range(cols):
            transpose[j][i] = matrix[i][j]
        return transpose