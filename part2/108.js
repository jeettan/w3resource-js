function dotproduct() {

    let arrayA =
        [[[2, 3, 4], [1, 5, 9], [3, 4, 9]],
        [[5, 6, 7], [4, 3, 22], [1, 6, 2]],
        [[7, 6, 5], [2, 2, 5], [1, 6, 5]]
        ]

    let arrayB =
        [[[5, 6, 7], [8, 54, 93], [2, 5, 3]],
        [[5, 6, 4], [2, 1, 22], [6, 5, 4]],
        [[7, 2, 5], [2, 24, 5], [3, 2, 1]]
        ]

    let arrayC = [[[], [], []], [[], [], []], [[], [], []]]

    for (i = 0; i < arrayA.length; i++) {

        for (j = 0; j < arrayA[0].length; j++) {

            for (k = 0; k < arrayA[0][0].length; k++) {

                arrayC[i][j][k] = arrayA[i][j][k] + arrayB[i][j][k]

            }
        }
    }

    console.log(arrayC);
}

dotproduct()




