export const milesToKm = 1.60934;

export const convertDistance = (distance, units) => {
    var result = distance;
    if (units == 'mi') {
        result = distance / milesToKm;
    }
    return Math.round(result);
}