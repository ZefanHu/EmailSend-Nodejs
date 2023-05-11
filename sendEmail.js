// Depends on tencentcloud-sdk-nodejs version 4.0.3 or higher
const tencentcloud = require("tencentcloud-sdk-nodejs-ses");

const SesClient = tencentcloud.ses.v20201002.Client;

// 实例化一个认证对象，入参需要传入腾讯云账户 SecretId 和 SecretKey，此处还需注意密钥对的保密
// 代码泄露可能会导致 SecretId 和 SecretKey 泄露，并威胁账号下所有资源的安全性。以下代码示例仅供参考，建议采用更安全的方式来使用密钥，请参见：https://cloud.tencent.com/document/product/1278/85305
// 密钥可前往官网控制台 https://console.cloud.tencent.com/cam/capi 进行获取
const clientConfig = {
    credential: {
        secretId: "AKIDQAgvtZz32lHfqlmW0FEoDNJ2Ts5Zoopc",
        secretKey: "f2IPIxPgjcJm25tZ2JeoiR1Wt8KTcnnd",
    },
    region: "ap-guangzhou",
    profile: {
        httpProfile: {
            endpoint: "ses.tencentcloudapi.com",
        },
    },
};

// 实例化要请求产品的client对象,clientProfile是可选的
const client = new SesClient(clientConfig);

async function sendEmail() {
    const params = {
        "FromEmailAddress": "prodigy@goodstudy.site",
        "ReplyToAddresses": "2202004343@stu.jxufe.edu.cn",
        "Destination": [
            "1371738978@qq.com"
        ],
        "Template": {
            "TemplateID": 22261,
            "TemplateData": "{\"pwd\":\"123456\"}"
        },
        "Subject": "鸟类知识服务系统登陆验证"
    };

    try {
        const data = await client.SendEmail(params);
        return data;
    } catch (error) {
        throw error;
    }
}

module.exports = sendEmail;
