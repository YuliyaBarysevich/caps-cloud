'use strict'

const { Consumer } = require('sqs-consumer')

const app = Consumer.create({
  queueUrl: 'https://sqs.us-east-2.amazonaws.com/137827170068/packages.fifo',
  handleMessage: async (message) => {
    console.log(message.Body);
  }
})

app.start();