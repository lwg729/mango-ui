import Mock from 'mockjs'
Mock.mock('http://localhost:8080/user',{
  'name': '@name',  //随机生成姓名
  'email': '@email', //随机生成邮件
  'age|1-10': 5, //年龄在1-10岁之间
})
Mock.mock('http://localhost:8080/menu',{
  'id': '@increment', //自增
  'name': 'menu',  //名字为menu
  'order|1-20': 5,//排序在1-20之间
})
Mock.mock('http://localhost:8080/login',{
  'token': '454546a4s'
})
