export {
    resolve_triangle,
    is_triangle,
    triangle_type
};

function resolve_triangle(a, b, c) {
    if (!is_triangle(a,b,c)) {
        throw new Error("invalid triangle values");
    }
    return triangle_type(a, b, c);
}

function is_triangle (a, b ,c) {
    const arr = [a, b, c];
    if (!arr.every(is_number)) {
        return false;
    }
    if (!arr.every(is_positive)) {
        return false;
    }
    arr.sort((a,b) => a - b);
    if (arr[0] + arr[1] < arr[2]) {
        return false;
    }
    return true;
}

function triangle_type(a, b ,c) {
	if (a === b && a === c) {
		return "equilateral";
	}
	if (a !== b && a !== c && b !== c) {
		return "scalene";
	}
	return "isosceles";
}

function is_positive(num) {
    return num > 0;
}

function is_number(val) {
    return typeof val === 'number' && !isNaN(val) && isFinite(val);
}
