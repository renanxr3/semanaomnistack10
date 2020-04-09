module.exports = function parseStringAsArrayy(arrayAsString) {
    return arrayAsString.split(",").map(tech => tech.trim());
}