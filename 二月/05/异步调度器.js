function Scheduler() {
  this.limit = 2;
  this.task = [];
}

Scheduler.prototype.addTask = function (time, value) {
  //将时间包装 然后装进this.task
  this.task.push((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve();
    }, time * 1000);
  });
};
Scheduler.prototype.start = function () {
  let len = this.limit;
  for (let i = 0; i < len; i++) {
    if (this.task.length == 0) return;
    //执行一个就减少一个
    const fn = this.task.shift();
    this.limit--;
    new Promise((resolve) => {
      fn(resolve);
    }).then((_) => {
      this.limit++;
      this.start();
    });
  }
};

const scheduler = new Scheduler();

scheduler.addTask(1, "1"); //1s后输出1
scheduler.addTask(2, "2"); //2s后输出2
scheduler.addTask(1, "4"); //2s后输出4
scheduler.addTask(1, "3"); //3s后输出3
scheduler.start();
