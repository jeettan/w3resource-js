function diagonalMatrix(matrix) {


    if (matrix[0][1] == 0 && matrix[0][2] == 0 && matrix[1][0] == 0 && matrix[1][2] == 0 && matrix[2][0] == 0 && matrix[2][1] == 0) {

        console.log("Diagonal matrix")
    } else {

        console.log("not diagonal matrix")
    }

}

diagonalMatrix([[1, 0, 0], [0, 2, 0], [0, 0, 3]])

diagonalMatrix([[1, 0, 0], [0, 2, 3], [0, 0, 3]])