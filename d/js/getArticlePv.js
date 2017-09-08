// JavaScript Document

var artlist_ids = "";
$(".artlist ul li").each(function(i, item) {
    var val = $(item).attr("val");
    if (artlist_ids == "") artlist_ids += val;
    else artlist_ids += "," + val;
});

function getJsonData(datas, id) {
    for (var n = 0; n < datas.length; n++)
        if (datas[n].id == id) return datas[n];
    return null;
}

$.ajax({
    url: jsonp_server + "/ajax/refresh.ashx?key=artlist&pkid=" + artlist_ids + "&callback=?&rnd=" + Math.floor(Math.random() * 9999),
    type: "get",
    dataType: "jsonp",
    success: function(data) {
        $(".artlist ul li").each(function(i, item) {
            var val = $(item).attr("val");
            var jsonData = getJsonData(data, val);
            if (jsonData == null) return;
            $(item).find(".rel .pv").html(jsonData.pv);
            $(item).find(".rel .time").html(jsonData.time);
        });
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        //alert(XMLHttpRequest.status);
        //alert(XMLHttpRequest.readyState);
        //alert(textStatus);
    }
});