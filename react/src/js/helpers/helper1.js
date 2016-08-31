export default function calculateNextHeadPoint(opts) {
    const {headPoint, direction: dir, boundaries, wrapEnabled} = opts;
    let {x, y} = headPoint;
    let {x: maxX, y: maxY} = boundaries;

    if (dir === 'right') {
        const wrap = x === maxX;
        if (wrap && !wrapEnabled) return;

        return {
            x: wrap ? 0 : x + 1,
            y
        };
    }

    if (dir === 'left') {
        const wrap = x === 0;
        if (wrap && !wrapEnabled) return;

        return {
            x: wrap ? maxX : x - 1,
            y
        };
    }

    if (dir === 'up') {
        const wrap = y === 0;
        if (wrap && !wrapEnabled) return;

        return {
            x,
            y: wrap ? maxY : y - 1
        };
    }

    if (dir === 'down') {
        const wrap = y === maxY;
        if (wrap && !wrapEnabled) return;

        return {
            x,
            y: wrap ? 0 : y + 1
        };
    }

};
