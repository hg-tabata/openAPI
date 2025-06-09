/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* 新しいユーザーの作成
*
* userInput UserInput 
* no response value expected for this operation
* */
const createUser = ({ userInput }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userInput,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* 特定ユーザーの取得
*
* id String 
* returns User
* */
const getUserById = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* ユーザー一覧の取得
*
* returns List
* */
const getUsers = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createUser,
  getUserById,
  getUsers,
};
