export const DIRECTION = {
    /** RIGHT */
    RIGHT: 0,
    /** BOTTOM */
    BOTTOM: 1,
    /** LEFT */
    LEFT: 2,
    /** TOP */
    TOP: 3,
};

function minusVec(p1, p2) {
    return [p1[0] - p2[0], p1[1] - p2[1]]
}

function distanceVec(vec) {
    return vec[0] * vec[0] + vec[1] * vec[1];
}

export function getDirectionNearestPoint(dirs, point, dimension) {
    let dir;
    let d = Infinity;
    dirs.forEach(t => {
        const dcurr = distanceVec(minusVec(point, dimension[t]));
        if(dcurr < d) {
            d = dcurr;
            dir = t;
        }
    })
    return dir
}
