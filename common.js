function vuxalert(n, i, b) { 
    var r, u;
    r = '<div class="weui_dialog_alert" style="position: fixed; z-index: 2000; display: none;margin-left:15%;margin-right:15%">';
    r += '<div class="weui_mask"><\/div>';
    r += '<div class="weui_dialog">';
    r += '<i class="weui_close"><svg t="1540783423798" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="s="http://www.w3.org/2000/svg" p-" p-id="1931" xmlns:xlink="k="http://www.w3.org/1999/xlink" wi" width="25" height="25"><path style="fill:#666;" d="M176.661601 817.172881C168.472798 825.644055 168.701706 839.149636 177.172881 847.338438 185.644056 855.527241 199.149636 855.298332 207.338438 846.827157L826.005105 206.827157C834.193907 198.355983 833.964998 184.850403 825.493824 176.661601 817.02265 168.472798 803.517069 168.701706 795.328267 177.172881L176.661601 817.172881ZM795.328267 846.827157C803.517069 855.298332 817.02265 855.527241 825.493824 847.338438 833.964998 839.149636 834.193907 825.644055 826.005105 817.172881L207.338438 177.172881C199.149636 168.701706 185.644056 168.472798 177.172881 176.661601 168.701706 184.850403 168.472798 198.355983 176.661601 206.827157L795.328267 846.827157Z" p-id="1932"></path></svg></i>';
    r += '<div class="weui_dialog_hd"><strong class="weui_dialog_title"><\/strong><\/div>';
    r += '<div class="weui_dialog_bd" style="color:#000;padding-top:20px;padding-bottom:10px;"><\/div>';
    r += '<div class="weui_dialog_ft">';
    r += '<a href="javascript:;" class="weui_btn_dialog primary">好<\/a>';
    r += "<\/div>";
    r += "<\/div>";
    r += "<\/div>";
    $(".weui_dialog_alert").length > 0 ? $(".weui_dialog_alert .weui_dialog_bd").empty() : $("body").append($(r));
    u = $(".weui_dialog_alert");
    u.show();
    u.find(".weui_dialog_bd").html(n);
    u.find(".weui_btn_dialog").html(b ? b : "好的");
    u.find(".weui_btn_dialog").off("click").on("click", function() { u.hide();
        i && i() });
    u.find(".weui_close").off("click").on("click", function() { u.hide(); }); 
}

function _clipboard(){
	if(typeof Clipboard == 'undefined' || typeof clipboard_text == 'undefined' || !clipboard_text || clipboard_text == '') return;

	$('body').attr('data-clipboard-text', clipboard_text);

	var clipboard = new Clipboard('body');
	clipboard.on('success', function(e) {
		if (e.trigger.disabled == false || e.trigger.disabled == undefined) {
			e.trigger.disabled = true;
			setTimeout(function() {
				e.trigger.disabled = false;
			}, 2000);
		}
	});
}

// 公告滚动js
function _gggd(){
    if(!document.getElementById("moocBox")) return false;
    var area = document.getElementById('moocBox');  
    var iliHeight = 20;
    var speed = 10;
    var time;  
    var delay= 3000;  
    area.scrollTop=0;  
    area.innerHTML+=area.innerHTML;
    function startScroll(){  
        time=setInterval(function(){  
            if(area.scrollTop % iliHeight==0){
                clearInterval(time);  
                setTimeout(startScroll,delay);  
            }else{  
                area.scrollTop++;  
                if(area.scrollTop >= area.scrollHeight/2){  
                    area.scrollTop =0;  
                }  
            }  
        },speed);  
        area.scrollTop++;  
    }    
    setTimeout(startScroll,delay);
}

function bottomPadding(){
    if(!document.getElementById) return false;
    if(!document.getElementById("videoBotAd")) return false;
    var videoBotAd = document.getElementById("videoBotAd"); 
    if(videoBotAd.style.display == "block"){
        var newBlank = document.createElement("div");
        newBlank.style.height = "90px";     
        document.body.appendChild(newBlank);
    }
}


// 点赞
function _goodZan(){
	var goodzan = document.getElementById("goodZan");

	var goodsrc = goodzan.getAttribute("src");

	goodzan.setAttribute("class", "zan_icon niceIn");
	var addnum = document.createElement("div");
	addnum.setAttribute("class", "add_num add_animate");
	addnum.innerHTML = "<span style=' color: #a46a26;'>+1</span>";
	document.querySelector(".zan_div").appendChild(addnum);
	setTimeout(function(){
		document.querySelector(".zan_div").removeChild(addnum);
		goodzan.setAttribute("class", "zan_icon");
	},1000);

	if(goodsrc.indexOf("zan_icon.png") != -1){
		goodzan.setAttribute("src", urls +"static/img/zan_on_icon.png");
		if(document.getElementById("poorZan").getAttribute("src") == urls +"static/img/zanno_on_icon.png"){
			document.getElementById("poorZan").setAttribute("src", urls +"static/img/zanno_icon.png");
			document.getElementById("poorZan").setAttribute("class", "zanno_icon");
		}
	}
}

function _poorZan(){
	var poorzan = document.getElementById("poorZan");
	var poorsrc = poorzan.getAttribute("src");

	poorzan.setAttribute("class", "zanno_icon niceIn");
	var reducenum = document.createElement("div");
	reducenum.setAttribute("class", "add_num add_animate");
	reducenum.innerHTML = "<span style=' color: #999;'>-1</span>";
	document.querySelector(".zanno_div").appendChild(reducenum);
	setTimeout(function(){
		document.querySelector(".zanno_div").removeChild(reducenum);
		poorzan.setAttribute("class", "zanno_icon");
	},1000);

	if(poorsrc.indexOf("zanno_icon.png") != -1){
		poorzan.setAttribute("src", urls +"static/img/zanno_on_icon.png");
		if(document.getElementById("goodZan").getAttribute("src") == urls +"static/img/zan_on_icon.png"){
			document.getElementById("goodZan").setAttribute("src", urls +"static/img/zan_icon.png");
			document.getElementById("goodZan").setAttribute("class", "zan_icon");
		}
	}
}

// 收藏效果
function clickCollect(){
	var like = document.querySelector('.heart');
	like.style.backgroundPosition = "";
	var D = like.getAttribute("rel");
	if(D === 'like'){
		like.setAttribute("class", "heart heartAnimation");
		like.setAttribute("rel", "unlike");
	}else{
		like.setAttribute("class", "heart");
		like.setAttribute("rel", "like");
		like.style.backgroundPosition = "left";
	}
}

//点击
function goToShare(){
	var shareDiv = document.createElement("div");
	shareDiv.setAttribute("class", "layer_share_div");
	var sharecon = '<div class="divshare_con">'+
					'<div class="divshare_infor">'+
					/*'<p style="font-size: 16px;">分享给三位好友进来观看</p>'+*/
					'<h3 style="font-size: 20px; line-height: 40px;">分享赢支付宝红包！</h3>'+
					'</div>'+
					'<div class="divshare_btn">'+
					'<button class="cancel" onclick="clickCancel()">算了</button>'+
					'<button class="sure" onclick="go_share()">去分享</button>'+
					'</div>'+
					'</div>';
	shareDiv.innerHTML = sharecon;
	document.body.appendChild(shareDiv);
	//getShareHeight();	
}
function getShareHeight(){
	var H = $(".divshare_con").height();
	$(".divshare_con").css("marginTop",-H/2 + "px");
}
function clickCancel(){
	var layer_share =document.querySelector(".layer_share_div");
	document.body.removeChild(layer_share);
}
function go_share(){
	$.get('api/shareurl.php?vid='+vid,function(res){
        window.location.href = res.url;                        
    },'json');
}

// 点击评论弹出提示
function discussPointer(){
	var pointer = document.createElement("div");
	pointer.setAttribute("class", "pointer_div");
	var pointSpan = document.createElement("span");
	pointSpan.innerHTML = "新访客不能评论，请播放3部以上视频！";
	if($(".pointer_div").length > 0){
		$(".pointer_div").empty();
	}else{
		pointer.appendChild(pointSpan);
		document.body.appendChild(pointer);
		setTimeout(function(){
			pointSpan.innerHTML = "";
			document.body.removeChild(pointer);
		},2000);
	}
}
// 点击下载弹出提示
function downloadPointer(){
	var pointer = document.createElement("div");
	pointer.setAttribute("class", "pointer_div");
	var pointSpan = document.createElement("span");
	pointSpan.innerHTML = "播放完成 才能缓存下载哦！";
	if($(".pointer_div").length > 0){
		$(".pointer_div").empty();
	}else{
		pointer.appendChild(pointSpan);
		document.body.appendChild(pointer);
		setTimeout(function(){
			pointSpan.innerHTML = "";
			document.body.removeChild(pointer);
		},2000);
	}	
}

//点击加载更多视频
function loadingMore(){
	var listC = document.getElementById("video_list");

	$.post('api/video_api.php', {vid:_vids}, function(res){
		if(res.code){
			$.each(res.data, function(k,v){
		    	video_titles = v.title.replace("$(dizhi)",dizhi);
				var newV = document.createElement("a");
				newV.setAttribute("href", v.urls);
				newV.setAttribute("class", "list_con");
				var listV = '<div class="list_img"><img src="'+ v.imgUrl +'" alt=""><div class="core">'+ (Math.random()*(7-10) + 10).toFixed(1) +'</div></div>'+
							'<div style="flex: 1;">'+
							'<div class="title">'+ video_titles +'</div>'+
							'<div class="list_tag">'+ (Math.random()*(20-200) + 200).toFixed(1) +'万次播放</div>'+
							'</div>';
				newV.innerHTML = listV;
				listC.appendChild(newV);
			});
		}
	},'json');
	
	$('#video_list .more').hide();
}

function closeAd(){
    var pardiv = document.getElementById("videoBotAd");
    pardiv.style.display = "none";
}