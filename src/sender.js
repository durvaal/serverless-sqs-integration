'use strict';

const AWS = require('aws-sdk');

const sqs = new AWS.SQS({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

module.exports.handler = async () => {
  try {
    const messageBody = { 
      hello: 'world',
    };
    const sendParams = {
      QueueUrl: process.env.QUEUE_URL,
      MessageBody: JSON.stringify(messageBody)
    };
  
    await sqs.sendMessage(sendParams).promise();
  } catch (error) {
    console.log(error);
  }
};
