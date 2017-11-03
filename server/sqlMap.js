// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'INSERT INTO `test`.`personal` (`name`, `personalname`, `password`, `sex`, `Jurisdiction`, `createdate`, `lastdate`) VALUES (?, ?, ?, ?, ?, ?, ?)',
    select: 'SELECT * FROM `test`.`personal` where Virtualdel = 1 and name = ?',
    UPDATE: 'UPDATE `test`.`personal` SET `password`=? WHERE `id`=?',
  },
  menu: {
    add: '',
    select: '',
    UPDATE: '',
  }
}

module.exports = sqlMap
