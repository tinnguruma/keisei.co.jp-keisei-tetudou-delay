//ページトップボタン処理
$(function() {
  var showFlag = false;
  var topBtn = $('#gotoTopBtn');	
  topBtn.css('bottom', '-100px');

  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      if (showFlag == false) {
	showFlag = true;
	topBtn.stop().animate({'bottom' : '25px'}, 300); 
      }
    } else {
      if (showFlag) {
	showFlag = false;
	topBtn.stop().animate({'bottom' : '-100px'}, 300); 
      }
    }
  });
  //スクロールしてトップ
  topBtn.click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });

	//スマホグローバルメニュー開閉
	$('#nav-toggle').click(function(){
		$('#header2017SP').toggleClass('open');
		$('#header2017SP').removeClass('open2');
		if($('#header2017SP').hasClass('open')){
			$('#header2017SP .grayBox').css("display", "block");
			$('#header2017SP .grayBox').animate({opacity:"0.5" }, 200);
		}
		else {
			$('#header2017SP .grayBox').animate({opacity:"0" }, 200);
			setTimeout('$("#header2017SP .grayBox").css("display", "none");', 200);
		}
	});
	$('#lang-toggle').click(function(){
		$('#header2017SP').removeClass('open');
		$('#header2017SP').toggleClass('open2');
		if($('#header2017SP').hasClass('open2')){
			$('#header2017SP .grayBox').css("display", "block");
			$('#header2017SP .grayBox').animate({opacity:"0.5" }, 200);
		}
		else {
			$('#header2017SP .grayBox').animate({opacity:"0" }, 200);
			setTimeout('$("#header2017SP .grayBox").css("display", "none");', 200);
		}
	});
	$('#header2017SP .grayBox').click(function(){
		$('#header2017SP').removeClass('open');
		$('#header2017SP').removeClass('open2');
		$('#header2017SP .grayBox').animate({opacity:"0" }, 200);
		setTimeout('$("#header2017SP .grayBox").css("display", "none");', 200);
	});

	//リストカレント切替
	$(".topInfoList li").click(function(){
    	$(".topInfoList li").removeClass("current");
    	$(this).addClass("current");
	});
	$(".subInfoList li").click(function(){
    	$(".subInfoList li").removeClass("current");
    	$(this).addClass("current");
	});
	$(".yearList li").click(function(){
    	$(".yearList li").removeClass("current");
    	$(this).addClass("current");
	});

});

(function(window, $){
  $(window).load(function(){
		//iframeのスクロールバー表示抑止
		var $frame = $('.iframeContent');
		if($frame.length > 0){
			var innerHeight = $frame.get(0).contentWindow.document.body.scrollHeight;
			var innerWidth = $frame.get(0).contentWindow.document.body.scrollWidth;
			$frame.css('height', innerHeight + 10 + 'px');
		}
  })
})(window, jQuery)


//リストカレントスマホ表示切替
//$(function(){
//	$(window).bind("load resize", init);
//		function init(){
//		var _width = $(window).width();
//		if(_width <= 800){
//			if($(".topInfoList li.all").hasClass("current")){
//				$(".topInfoList li").removeClass("current");
//				$(".topInfoList li.info").addClass("current");
//			}
//		}
//	}
//});
//透過PNG for IE
$(function() {
	if(navigator.userAgent.indexOf("MSIE") != -1) {
		$('img').each(function() {
			if($(this).attr('src').indexOf('.png') != -1) {
				$(this).css({
					'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + $(this).attr('src') + '", sizingMethod="scale");'
				});
			}
		});
	}
});


//カスタム検索コード
  (function() {
    var cx = '013791427121355772419:oarth1udctk';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();


//GETパラメータの取得
$.extend({
      getUrlParams: function () {
        if (1 < document.location.search.length) {
          var query = document.location.search.substring(1);
          var parameters = query.split('&');
          var result = new Object();
          for (var i = 0; i < parameters.length; i++) {
            var element = parameters[i].split('=');
            var paramName = decodeURIComponent(element[0]);
            var paramValue = decodeURIComponent(element[1]);
            result[paramName] = decodeURIComponent(paramValue);
          }
          return result;
        }
        return null;
      },
      getUrlParam: function (name) {
        var params = $.getUrlVars();
        if (params != null) {
          return $.getUrlVars()[name];
        } else {
          return null;
        }
      }
    });