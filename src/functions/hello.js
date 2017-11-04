/*jshint esversion: 6 */
import { success, failure, notAllowed } from "./../libs/response-lib";
// import AWS from "aws-sdk";
// const SNS = new AWS.SNS();

export async function world(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false; // More info: http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
  // const { somePathParameter } = event.pathParameters;
  // const {
  //   bodyParam1,
  //   bodyParam2,
  //   bodyParam3,
  // } = JSON.parse(event.body);
  console.log(JSON.stringify(event))
  return callback(null, success('world'));
}
