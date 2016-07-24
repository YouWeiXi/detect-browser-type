import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.onRendered(function helloOnRendered() {
  var Sys = {};
  var ua = navigator.userAgent.toLowerCase();
  var s;
  (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
  (s = ua.match(/rv:([\d.]+)/)) ? Sys.ie = s[1] :
  (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
  (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
  (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
  (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

  //以下进行测试
  //目前只进行IE类型的辨别
  //meteor不支持 IE7 IE8(没有提示), IE9有提示
  if (Sys.ie === '7.0' || Sys.ie === '8.0' || Sys.ie === '9.0') {
    document.write('本站暂不支持IE: ' + Sys.ie + '版本');
  }
  // if (Sys.firefox) document.write('Firefox: ' + Sys.firefox);
  // if (Sys.chrome) document.write('Chrome: ' + Sys.chrome);
  // if (Sys.opera) document.write('Opera: ' + Sys.opera);
  // if (Sys.safari) document.write('Safari: ' + Sys.safari);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
