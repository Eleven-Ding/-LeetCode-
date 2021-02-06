class EventBus {
  constructor() {
    this.events = new Map();
  }
  //添加事件
  addEventListener(type, fn) {
    if (typeof fn !== "function") {
      return new Error("函数");
    }
    //先检查是否添加过
    const handler = this.events.get(type);
    //如果没有添加过，直接添加
    if (!handler) {
      this.events.set(type, fn);
    } else {
      //已经添加过了
      //只有一个
      if (Array.isArray(handler)) {
        handler.push(fn);
      } else {
        this.events.set(type, [handler, fn]);
      }
    }
  }

  //触发事件
  emit(type, ...args) {
    //先获取这个type的事件
    const handler = this.events.get(type);

    //如果没有
    if (!handler) {
      return;
    }
    //如果是函数 则直接执行
    if (!Array.isArray(handler)) {
      handler.apply(this, args);
    } else {
      for (let i = 0; i < handler.length; i++) {
        handler[i].apply(this, args);
      }
    }
  }
  //移除事件
  remove(type, fn) {
    console.log(fn);
    const handler = this.events.get(type);
    if (!handler) {
      return;
    }
    //如果handler是一个数组，则找到里面的那个
    if (Array.isArray(handler)) {
      const index = handler.findIndex((item) => {
        return item == fn || item.fn == fn;
      });

      if (index !== -1) {
        handler.splice(index, 1);
      }
      if (handler.length === 1) {
        this.events.set(type, handler[0]);
      }
    } else {
      if (handler == fn) {
        this.events.delete(type);
      }
    }
  }

  once(type, fn) {
    function on() {
      this.remove(type, fn);
      fn.apply(this, arguments);
    }
    on.fn = fn;
    this.addEventListener(type, on);
  }
}

const bus = new EventBus();
function handler1() {
  setTimeout(() => {
    console.log(arguments);
    console.log("handler1");
  }, 1000);
}
function once() {
  console.log("once");
}
once.prototype = {
  a: "aaa",
};
bus.once("click", once);
bus.addEventListener("click", handler1);
bus.addEventListener("click", function () {
  console.log("我是第二个click监听者", arguments);
});
// bus.remove("click", handler1);

bus.emit("click", "name", "age");
bus.emit("click", 233);
