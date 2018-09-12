/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var counter = 0;
    var prev_first_lover,
        pre_prev_first_lover,
        pre_pre_prev_first_lover;

    preferences.forEach(function(item, index, array) {

        prev_first_lover = array[item - 1];
        pre_prev_first_lover = array[prev_first_lover - 1];
        pre_pre_prev_first_lover = pre_prev_first_lover - 1;

        if (index === pre_pre_prev_first_lover) {
            counter++;
        }

    });

    return Math.trunc(counter/3);
};
