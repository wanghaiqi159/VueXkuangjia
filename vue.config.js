module.exports={
    lintOnSave: false,
    publicPath:'/',
    // 修改静态资源路径
    outputDir:'dabao',
    // 打包生成文件夹
    configureWebpack:{
        externals: {
            "BMap": "BMap"
        },
        resolve:{
            alias:{
                'assets':"@/assets",
                'components':"@/components",
                'views':"@/views",
            }
        }
    },
    //配置跨域
    devServer:{
        hot: true, //热加载
        host: '0.0.0.0', //ip地址
        port: 9000, //端口
        https: false, //false关闭https，true为开启
        open: true, //自动打开浏览器
        proxy:{
            '/api':{
                target:"配置跨域地址",
                ws:true,
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            },
            '/test': { //测试
                target: 'xxx'
            },
            '/pre': { //预发布
                target: 'xxx'
            },
            '/pro': { //正式
                target: 'xxx'
            }
        }
    }

}