'use strict';

module.exports.handler = (event) => {
  try {
    console.log('Message Event -->  ', JSON.stringify(event));
    for (const record of event.Records) {
      console.log('Message Body -->  ', record.body);
      // Do something
    }
  } catch (error) {
    console.log(error);
  }
};
