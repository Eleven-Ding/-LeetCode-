class Scheduler {
  constructor() {
    this.count = 2; //并发数量
    this.arr = []; //事件
  }
  //不能直接new Promise
  addTask(time, str) {
    const fn = (resolve) => {
      setTimeout(() => {
        console.log(str);
        resolve();
      }, time * 1000);
    };

    this.arr.push(fn);
  }
  start() {
    let p = this.count;
    for (let i = 0; i < p; i++) {
      if (this.arr.length <= 0) return;
      let fn = this.arr.shift();
      new Promise((resolve) => {
        this.count--;
        fn(resolve);
      }).then(() => {
        this.count++;
        this.start();
      });
    }
  }
}

//实现一个调度并发器，最多允许两个任务进行处理
const scheduler = new Scheduler();

scheduler.addTask(1, "1"); //1s后输出1
scheduler.addTask(2, "2"); //2s后输出2
scheduler.addTask(1, "4"); //2s后输出4
scheduler.addTask(1, "3"); //3s后输出3
scheduler.start();
