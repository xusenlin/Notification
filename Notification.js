/**
 * Created by xusenlin on 2018/5/13.
 */
var NotificationStyle = '<style>.notification.right{right:16px}.notification{z-index:2049;display:flex;width:330px;padding:14px 26px 14px 13px;border-radius:8px;box-sizing:border-box;border:1px solid #ebeef5;position:fixed;background-color:#fff;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);transition:opacity .3s,transform .3s,left .3s,right .3s,top .4s,bottom .3s;overflow:hidden}.notification-group{margin-left:13px}.notification-title{font-weight:700;font-size:16px;color:#303133;margin:0}.notification-content{font-size:14px;line-height:21px;margin:6px 0 0;color:#606266;text-align:justify}.notification-closeBtn{position:absolute;top:10px;right:15px;cursor:pointer;color:#909399;font-size:20px}.notification-icon{width:32px;height:32px}</style>';
document.head.insertAdjacentHTML('beforeEnd',NotificationStyle);

function NotificationTopReset() {
    var N = document.querySelectorAll('.notification');
    var len = N.length;
    for (var i = 0; i < len ; i++) {
        N[i].style.top = 16 + (i * 117)+'px';
    }
}
//
var Notification = function (options) {

    var id = new Date().getTime()+''+Math.floor(Math.random()*10)+''+Math.floor(Math.random()*10)+''+Math.floor(Math.random()*10);

    var options = options || {};

    var N = document.querySelectorAll('.notification');
    var top = 16 + (N.length * 117);
    var html = '';
    html += '<div id="'+id+'" role="alert" style="top: '+top+'px"  class="notification right" >';
    html +=     '<div class="notification-icon"><?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1525865291658" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1049" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><defs><style type="text/css"></style></defs><path d="M512 96c-229.76 0-416 186.24-416 416s186.24 416 416 416 416-186.24 416-416-186.24-416-416-416zM577.248 665.056c-31.392 47.136-63.328 83.456-117.056 83.456-36.672-5.984-51.744-32.256-43.808-59.04l69.12-228.928c1.696-5.6-1.12-11.584-6.24-13.408-5.088-1.792-15.072 4.832-23.712 14.304l-41.792 50.272c-1.12-8.448-0.128-22.4-0.128-28.032 31.392-47.136 82.976-84.32 117.952-84.32 33.248 3.392 48.992 29.984 43.2 59.2l-69.6 230.048c-0.928 5.184 1.824 10.464 6.528 12.128 5.12 1.792 15.872-4.832 24.544-14.304l41.76-50.24c1.12 8.448-0.768 23.232-0.768 28.864zM567.936 366.048c-26.432 0-47.872-19.264-47.872-47.616s21.44-47.584 47.872-47.584 47.872 19.264 47.872 47.584c0 28.384-21.44 47.616-47.872 47.616z" p-id="1050" fill="#909399"></path></svg></div>';
    html +=     '<div class="notification-group">';
    html +=         '<h2 class="notification-title">'+options.title+'</h2>';
    html +=         '<div class="notification-content"><p>'+options.message+'</p></div>';
    html +=         '<div class="notification-closeBtn" onclick="onCloseNotification('+id+')">×</div>';
    html +=     '</div>';
    html += '</div>';

    document.body.insertAdjacentHTML('beforeEnd',html);

    if(options.duration != 0){
        setTimeout(function () {
            var thisDom = document.getElementById(id);
            if(thisDom){
                document.body.removeChild(thisDom);
                NotificationTopReset()
            }

        },options.duration?options.duration:3000)
    }

};

function onCloseNotification(id) {
    document.body.removeChild(document.getElementById(id));
    NotificationTopReset()
}


Notification({
    title:'通知标题',
    duration:0,
    message:'通知内容'
});
