define(['jquery','template','nprogress','cookie'],function($,template,NProgress){
	NProgress.start();

	NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});
	$('#logoutBtn').click(function(){
		$.ajax({
			type:'post',
			url:'/api/logout',
			dataType:'json',
			success:function(data){
				if(data.code==200){
					location.href='/main/login';
				}
			}
		})
	})

	var  flag=$.cookie('PHPSESSID');
	if(! flag&&location.pathname!='/main/login'){
		location.href='/main/login';
	}
	/*
	 ����ͷ����Ϣ*/
	var loginInfo=$.cookie('loginInfo');
	loginInfo=loginInfo&&JSON.parse(loginInfo);
	/*$('.aside .profile img').attr('src',loginInfo.tc_avatar);
	$('.aside .profile h4').html(loginInfo.tc_name);*/
	var tpl= ' <div class="avatar img-circle"> <img src="{{tc_avatar}}"> </div> <h4>{{tc_name}}</h4>';
	var html=template.render(tpl,loginInfo);
	$('.aside .profile').html(html);
});
