const core = require('@actions/core');
const github = require('@actions/github');

try {
  // 获取当前工作目录
  console.log(`Current working directory: ${process.cwd()}`);

  // 获取 action.yml 中 input 类定义的变量
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();

  // 输出 action.yml 中 output 类定义的变量
  core.setOutput("time", time);

  // 获取触发工作流的事件的 JSON 有效载荷
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message); // 报错
}
