function clone(target) {        //浅拷贝
    let cloneTarget = {};       //建立空
    for (const key in target) {
        cloneTarget[key] = target[key];
    }
    return cloneTarget;
};
