$(function() {
	var $id;
	//修改/添加记录，通过是否传入id来判断添加或者修改
	$("#editSubmit").click(function() {
		$(this).attr("disabled", "true");
		var $name = $("#listName").val(),
			$amount = $("#listAmount").val(),
			$category = $(".listCategories:checked").val(),
			$type = $(".listType:checked").val(),
			$date = $("#listDate").val(),
			$id = $("#categoryId").val(),
			$content = $("#listContent").val();
		var $data;
		if ($id) {
			$data = {
				name: $name,
				amount: $amount,
				category: $category,
				type: $type,
				createAt: $date,
				content: $content,
				id: $id
			};
		} else {
			$data = {
				name: $name,
				amount: $amount,
				category: $category,
				type: $type,
				createAt: $date,
				content: $content
			};
		}
		$.ajax({
				url: "/category/list/save",
				type: "post",
				data: $data,
				dataType: "json"
			})
			.done(function(res) {
				if (res.message == "success") {
					alert("提交成功");
					$(this).removeAttr("disabled");
					window.location.href = "http://localhost:4000/category"
				} else {
					alert("提交失败");
					$(this).removeAttr("disabled");
				}
			})

	});
	//后退按钮
	$(".back").click(function() {
		history.back(-1);
	})
})