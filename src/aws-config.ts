
const {
    VITE_REGION,
    VITE_USER_POOL_ID,
    VITE_USER_POOL_WEB_CLIENT_ID,
    VITE_AWS_ACCESS_KEY,
    VITE_AWS_SECRET_KEY
} = import.meta.env;

export default {
    REGION: VITE_REGION,
    USER_POOL_ID: VITE_USER_POOL_ID,
    USER_POOL_WEB_CLIENT_ID: VITE_USER_POOL_WEB_CLIENT_ID,
    DYNAMODB: {
        aws_table_name: 'dynamo-test',
        region: VITE_REGION,
        aws_remote_config: {
            accessKeyId: VITE_AWS_ACCESS_KEY,
            secretAccessKey: VITE_AWS_SECRET_KEY,
            region: VITE_REGION,
        },

    }
}