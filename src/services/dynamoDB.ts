import AWS from "aws-sdk";
import awsConfig from "../aws-config";
AWS.config.update(awsConfig.DYNAMODB);
const docClient = new AWS.DynamoDB.DocumentClient();
//here we specify th query condition or the where clause, for instance if we
// have multiple table entries for a user_id and want to get all those items at
//once (in this case we don't, but for the sake of learning XD)
const result = docClient.query({
    TableName: 'Customers',
    // condition is: user_id must be equal to the value of expression attribute id
    KeyConditionExpression: "customer_id = :id",
    ExpressionAttributeValues: {
        ":id": "new"
    }
}, (err: any, data: any) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        return data;
    }
});

export { result };
