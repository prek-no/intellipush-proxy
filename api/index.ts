import {VercelRequest, VercelResponse} from "@vercel/node";
import {allowCors} from "../lib/utils";

const { createProxyMiddleware } = require('http-proxy-middleware')

const apiProxy = createProxyMiddleware({
    target: "https://api.intellipush.com",
    changeOrigin: true
});

const handler = async (req: VercelRequest, res: VercelResponse) => {
    return apiProxy(req, res);
}

module.exports = allowCors(handler)
