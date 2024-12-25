function diagonal(matrix) {

    for (i = 0; i < matrix.length; i++) {

        for (j = i + 1; j < matrix.length; j++) {

            if (matrix[i][j] == '0') {

                continue;
            } else {

                return false;
            }
        }
    }

    return true;

}

console.log(diagonal([[1, 0, 0], [0, 2, 0], [0, 0, 3]]));
