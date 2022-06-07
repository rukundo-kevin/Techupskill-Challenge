function manipulateStudentRecord(obj, operation, prop, newValue) {
    if (operation === 'set') {
        obj[prop] = newValue;
    } else if (operation === 'unset') {
        delete obj[prop];
    } else if (operation === 'get') {
        return obj[prop];
    }
}