const http = require('http'), //http
		fs  = require('fs'), //数据流
		cheerio = require('cheerio'), //js 中jq
		articalPath = './actical', //文章保存地址
		imgPath = './img', // 图片保存地址
		fetchLimt = process.argv[2]||50 ;//查询条数

		console.log(process.argv);
		if(!fs.existsSync(articalPath)){
			fs.mkdirSync(articalPath);
		}

		if(!fs.existsSync(imgPath)){
			fs.mkdirSync(imgPath);
		}

		//抓取新闻
		let fetched = 0;
		let fetchNews = function(id,fullPath) {
			if(fetched > fetchLimt){
				fetched = 0;
				console.log(`抓取完成${fetchLimt}条数据`);
				return process.exit();
			}
			let articalUrl = fullPath || `http://www.cnbeta.com/articles/${x}.htm`; 
			let html = '';
			res.setEncoding('utf-8');
			res.on('data', function(chunk) {
      	html += chunk;
    	});
		}

 