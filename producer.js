'use strict'

const uuid = require('uuid').v4;
const { Producer } = require('sqs-producer');

const producer = Producer.create({
  queueUrl: 'https://sqs.us-east-2.amazonaws.com/137827170068/packages.fifo',
  region: 'us-east-2'
});

let counter = 0;

setInterval(async () => {

  const message = {
    id: uuid(),
    body: `${counter++} package is ready for pick up`
  };

  try{
    const response = await producer.send(message);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}, 5000)