import 'dotenv/config';

import { PutItemCommand, ScanCommand  } from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";

import { ddbClient } from "./libs/ddbClient.js";

const params = {
    TableName: "triangles"
};

const scan_params = {
    ...params,
    FilterExpression: "timestamp_ts > :ts",
    ExpressionAttributeValues: {
        ":ts": { N: "0" }
    },
    ProjectionExpression: "timestamp_ts, lengths, result_type"
};

const triangle_obj = {
    lengths: [],
    result_type: "",
    timestamp_ts: (new Date()).getTime()
};

export {
    triangle_obj,
    get_history,
    add
};

async function get_history() {
    try {
        const data = await ddbClient.send(new ScanCommand(scan_params));
        return data.Items.map(unmarshall);
    } catch (err) {
        console.log("Error", err);
    }
}

async function add(lengths, result_type) {
    const add_params = {
        ...params,
        Item: marshall({
            lengths,
            result_type,
            timestamp_ts: (new Date()).getTime()}),
    };
    try {
        const data = await ddbClient.send(new PutItemCommand(add_params));
        return data["$metadata"].httpStatusCode;
    } catch (err) {
        console.log("Error", err);
    }
}
