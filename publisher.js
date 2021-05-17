'use strict'

const AWS = require('aws-sdk');
const faker = require('faker')
AWS.config.update({ region: 'us-east-2'});
var sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-east-2:137827170068:packages.fifo';

const fakeOrder = {
  orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: `${faker.address.cityName()}, ${faker.address.stateAbbr()}`
}

const payload = {
  Message: JSON.stringify(fakeOrder),
  TopicArn: topic
};

// sns is a instance from the AWS SNS module
// and it gives us the ability to publish a message
// with details from up above (payload)
setInterval( async () => {
  sns.publish(payload).promise()
  .then(data => {
    console.log(data);
  })
  .catch(console.error);
}, 5000)