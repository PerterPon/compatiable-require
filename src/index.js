
/*
  compatibleRequire
  Author: PerterPon<PerterPon@gmail.com>
  Create: Fri Sep 16 2018 15:48:20 GMT+0800
*/

const compatibleRequire = (path) => {

    const requiredModule = require(path);
    // TypeScript中模块需指定为commonjs，并且采用export default的方式导出。
    let targetModule = null;

    // babel和ts编译均会带上__esModule标志位
    if (true === requiredModule.__esModule && requiredModule.default != void(0)) {
        targetModule = requiredModule.default;
    } else {
        targetModule = requiredModule;
    }

    return targetModule;

}

module.exports = compatibleRequire;
