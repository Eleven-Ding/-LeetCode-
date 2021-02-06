//定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，
//调用 min、push 及 pop 的时间复杂度都是 O(1)。

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  //当前最小值
  this.min = Number.MIN_SAFE_INTEGER;
  this.minIndex = -1;''
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
 
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const p = this.stack.pop();
  this.minIndex = p.preMinIndex;
  return p.val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  if (this.stack.length === 1) {
    return this.stack[0].val;
  }
  //返回minIndex 的值
  const p = this.stack[minIndex];
  this.minIndex = p.preMinIndex;
  return p.val;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
