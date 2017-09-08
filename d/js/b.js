!function () {
	var e = document.createElement("ins");
	e.id  = "newBridge";
	if (document.getElementById(e.id)) {
		return
	}
	var n = [{
		"inviteBox"     : {
			"skinIndex"  : 0, "startPage": 1, "customerStyle": {
				"acceptFontColor": "#000000",
				"backImg"        : "//sgoutong.baidu.com/static/style/images/e8e291c71ae14f0887df976e81a1bee1.gif",
				"acceptBgColor"  : "#fecb2e"
			}, "skinName": "自定义皮肤", "autoHide": 0, "reInvite": 1,
			"sendButton" : {"bgColor": "#2fd0b5", "fontColor": "#ffffff"}, "isShowText": 0, "skinType": 1,
			"buttonType" : 0, "autoInvite": 0, "stayTime": 30, "width": 680, "closeTime": 20, "isCustomerStyle": 1,
			"position"   : "middle", "inviteInterval": 30, "welcome": "<p>我们是行业风向标！点击咨询。</p>", "height": 320
		}, "webimConfig": {"skinIndex": 0, "skinType": 1}, "noteBoard": {
			"skinIndex" : 7, "skinType": 1, "displayCompany": 1, "cpyInfo": "", "skinName": "书香四溢", "displayLxb": 1,
			"position"  : "right-bottom", "itemsExt": [],
			"items"     : [{"name": "visitorName", "required": 0, "isShow": 1}, {
				"name": "visitorPhone", "required": 1, "isShow": 1
			}, {"name": "visitorEmail", "required": 0, "isShow": 0}, {
				"name": "visitorAddress", "required": 0, "isShow": 0
			}], "cpyTel": "", "isAlwaysDisplay": 2
		}, "isWebim"    : 1, "pageId": 0, "seekIcon": {
			"customerStyle": {"backImg": ""}, "skinIndex": 0, "skinType": 1, "iconType": 0, "isCustomerStyle": 0,
			"width"        : 0, "skinName": "默认皮肤", "groups": [{"groupName": "示例分组1", "groupId": 23492}],
			"displayLxb"   : 1, "groupStyle": {"bgColor": "#ffffff", "buttonColor": "#d6f3ff", "fontColor": "#008edf"},
			"position"     : "right-center", "height": 0
		}
	}], t = {
		"eid"        : "989741",
		"queuing"    : "<p><span style=\"font-family: 微软雅黑; color: rgb(64, 128, 130); font-size: 14pt;\"><span style=\"font-size: 14pt;\">欢迎光临！当前访客较多，您已在队列中，也可拨打4006-123-011咨询。</span><img src=\"//sgoutong.baidu.com/webim/resource/img/face/1e376a99d4059562772aad9ac065fd71.png\" data-face-id=\"1e376a99d4059562772aad9ac065fd71\"/></span><span style=\"font-family: 微软雅黑;\"></span></p>",
		"authToken"  : "bridge", "isWebim": 1, "userId": "989741", "platform": 0, "route": "1",
		"webimConfig": {"skinIndex": 0, "skinType": 1}, "siteId": "7773323", "online": "true", "authType": 4, "bid": "",
		"webRoot"    : "//p.qiao.baidu.com/cps/"
	}, s  = [];

	function g() {
		var c = window.location.href, d = 0, e = null;
		if (s) {
			for (var a = 0, b = s.length; a < b; a++) {
				if (s[a].url === c || -1 < c.indexOf(s[a].url)) {
					d = s[a].pageId;
					break
				}
			}
		}
		t.pageId = d;
		a        = 0;
		for (b = n.length; a < b; a++) {
			if (n[a].pageId === d) {
				f             = n[a].webimConfig;
				t.webimConfig = {skinIndex: f.skinIndex, skinType: f.skinType};
				return n[a]
			}
			0 === n[a].pageId && (e = n[a])
		}
		return e
	}

	e.config = g(), e.siteConfig = t, e.startTime = +new Date, document.body.insertBefore(e, document.body.firstElement || null);
	var i = document.createElement("script");
	i.src = "//sgoutong.baidu.com/embed/1504252092/asset/embed/pc_nb.js", i.setAttribute("charset", "UTF-8");
	var r = document.getElementsByTagName("head")[0] || document.body;
	r.insertBefore(i, r.firstElement || null)
}(this);