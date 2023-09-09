import {VercelRequest, VercelResponse} from "@vercel/node";
import {allowCors} from "../lib/utils";
import {createProxyMiddleware} from "http-proxy-middleware";


const apiProxy = createProxyMiddleware({
    target: "https://api.intellipush.com",
    changeOrigin: true,
    pathRewrite: {
        "^/api": "", // strip "/api" from the URL
    },
});

const handler = async (req: VercelRequest, res: VercelResponse) => {
    return apiProxy(req, res);
}

module.exports = allowCors(handler)
