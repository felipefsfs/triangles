const db = [];

const model = Object.freeze({
    lengths: [],
    type: "",
    timestamp: (new Date()).getTime()
});

export {
    model,
    add,
    get_history
};

function add(lengths = [], type) {
    db.push({
        lengths,
        type,
        timestamp: (new Date()).getTime(),
    });
    return true;
}

function get_history(size = -1) {
    if (size > 0) {
        return db.slice(-size);
    }
    return db;
}