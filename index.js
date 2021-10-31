function myEach(collection, cb){
    let objValues;
    if (!Array.isArray(collection)) {
        objValues = Object.values(collection)
    }
    // for(const el of objValues){
    //    cb(el)
    // }
    for(const el of collection){
        cb(el)
    }
    return collection
}

// myEach([1,2,3], () => alert())