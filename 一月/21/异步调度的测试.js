//实现一个调度并发器，最多允许两个任务进行处理
class Scheduler {
  constructor() {
    this.count = 2; //并发数量
    this.arr = []; //事件
  }
  //不能直接new Promise
  addTask(time, str) {
    const fn = () => {
      return new Promise((resolve) => {
        this.count--;
        setTimeout(() => {
          console.log(str);
          resolve(str);
        }, time * 1000);
      });
    };

    this.arr.push(fn);
  }
  start() {
    for (let i = 0; i < this.count; i++) {
      if (this.arr.length <= 0) return;
      let fn = this.arr.shift();
      fn().then((res) => {
        this.count++;
        this.start();
      });
    }
  }
}
const scheduler = new Scheduler();

scheduler.addTask(1, "1"); //1s后输出1
scheduler.addTask(2, "2"); //2s后输出2
scheduler.addTask(1, "4"); //2s后输出4
scheduler.addTask(1, "3"); //3s后输出3
scheduler.addTask(3, "5"); //5s后输出3
scheduler.start();
