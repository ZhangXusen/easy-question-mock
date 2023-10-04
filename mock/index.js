/*
 * @Description:
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-09-02 21:17:52
 * @LastEditors: 小国际
 * @LastEditTime: 2023-10-04 16:20:41
 */
const question = require("./question");
const stat = require("./stat");
const user = require("./user");

const mockList = [...question, ...user, ...stat];

module.exports = mockList;
