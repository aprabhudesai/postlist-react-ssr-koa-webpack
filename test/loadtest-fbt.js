const loadtest = require('loadtest');
var beautify_html = require('js-beautify').html;

const options1 = {
  url: 'http://localhost:8088',
  maxRequests: 10,
  concurrency: 5,
  statusCallback: statusCallback1
};

function statusCallback1(error, result, latency) {
  console.log('##### 1 #####');
  console.log(beautify_html(result.body));
}

const promise1 = new Promise((resolve, reject) => {
  loadtest.loadTest(options1, function(error, result) {
    if (error) {
      reject();
      return console.error('Got an error: %s', error);
    }
    console.log('Tests for ENGLISH ran successfully');
    resolve();
  });
});

function statusCallback2(error, result, latency) {
  console.log('##### 2 #####');
  console.log(beautify_html(result.body));
}

const options2 = {
  url: 'http://localhost:8088/?locale=fr_FR',
  maxRequests: 10,
  concurrency: 5,
  statusCallback: statusCallback2
};

const promise2 = new Promise((resolve, reject) => {
  loadtest.loadTest(options2, function(error, result) {
    if (error) {
      reject();
      return console.error('Got an error: %s', error);
    }
    console.log('Tests For FRENCH ran successfully');
    resolve();
  });
});

const options3 = {
    url: 'http://localhost:8088/?locale=ja_JP',
    maxRequests: 10,
    concurrency: 5,
    statusCallback: statusCallback2
  };
  
const promise3 = new Promise((resolve, reject) => {
  loadtest.loadTest(options3, function(error, result) {
    if (error) {
      reject();
      return console.error('Got an error: %s', error);
    }
    console.log('Tests for JAPANESE ran successfully');
    resolve();
  });
});

function parallelLoadTest() {
  return Promise.all(promise1, promise2, promise3).then(() => console.log('DONE'));
}

parallelLoadTest();
