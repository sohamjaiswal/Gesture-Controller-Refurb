const exec = require('child_process').exec;
const {command} = require(`../../utils/commands`);

function move(data){
  console.log('move ->', data)
  key = `move_${data.direction}`
  exec(`${command(key)}`)
}

module.exports = {
  move: move
}
