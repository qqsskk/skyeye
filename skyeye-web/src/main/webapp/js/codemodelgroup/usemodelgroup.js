
var rowId = "";
layui.config({
	base: basePath, 
	version: skyeyeVersion
}).define(['table', 'jquery', 'winui', 'form'], function (exports) {
	
	winui.renderColor();
	
	var $ = layui.$,
	form = layui.form,
	table = layui.table;
	
	form.render();
	form.on('submit(formSearch)', function (data) {
    	//表单验证
        if (winui.verifyForm(data.elem)) {
        	$("#tableName").html();
        }
        return false;
	});
	
	showGrid({
	 	id: "tableName",
	 	url: reqBasePath + "database002",
	 	params: {},
	 	pagination: false,
	 	template: getFileContent('tpl/template/select-option.tpl'),
	 	ajaxSendLoadBefore: function(hdb){
	 	},
	 	ajaxSendAfter:function(json){
	 		form.render('select');
	 	}
	});
	
    exports('usemodelgroup', {});
});
