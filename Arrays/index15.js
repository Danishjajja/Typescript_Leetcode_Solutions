// Given a square matrix mat, return the sum of the matrix diagonals.
// Only include the sum of all the elements on the primary diagonal and all the elements on
//  the secondary diagonal that are not part of the primary diagonal.
function matrixfuntion(matrix) {
    var sum = 0;
    // diagonal
    for (var i = 0; i < matrix.length; i++) {
        var e = matrix[i];
        if (i == 0) {
            for (var j = 0; j < e.length; j++) {
                var el = e[j];
                if (j == 0) {
                    sum += el;
                }
            }
        }
        else if (i == 1) {
            for (var j = 0; j < e.length; j++) {
                var el = e[j];
                if (j == 1) {
                    sum += el;
                }
            }
        }
        else if (i == 2) {
            for (var j = 0; j < e.length; j++) {
                var el = e[j];
                if (j == 2) {
                    sum += el;
                }
            }
        }
        else {
            for (var j = 0; j < e.length; j++) {
                var el = e[j];
                if (j == 3) {
                    sum += el;
                }
            }
        }
    }
    // reverse diagonal
    for (var i = matrix.length - 1; i >= 0; i--) {
        var e = matrix[i];
        if (i == 0) {
            for (var j = e.length - 1; j >= 0; j--) {
                var el = e[j];
                if (j == e.length - 1 && e.length / 2 == 0) {
                    sum += el;
                }
                else {
                    sum += 0;
                }
            }
        }
        else if (i == 1) {
            for (var j = e.length - 1; j >= 0; j--) {
                var el = e[j];
                if (j == e.length - 2 && e.length / 2 == 0) {
                    sum += el;
                }
                else {
                    sum += 0;
                }
            }
        }
        else if (i == 2) {
            for (var j = e.length - 1; j >= 0; j--) {
                var el = e[j];
                if (j == e.length - 3 && e.length / 2 == 0) {
                    sum += el;
                }
                else {
                    sum += 0;
                }
            }
        }
        else {
            for (var j = e.length - 1; j >= 0; j--) {
                var el = e[j];
                if (j == e.length - 4 && e.length / 2 == 0) {
                    sum += el;
                }
                else {
                    sum += 0;
                }
            }
        }
    }
    return sum;
}
console.log(matrixfuntion([[5]]));
console.log(matrixfuntion([[1, 2, 3], [3, 4, 5], [5, 4, 2]]));
console.log(matrixfuntion([[1, 2, 3, 4], [3, 4, 5, 2], [5, 4, 2, 6], [5, 4, 2, 6]]));
