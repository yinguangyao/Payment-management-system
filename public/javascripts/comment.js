$(function() {
	//分类下提出问题
	$(".question").click(function() {
			$(this).attr("disabled", "true");
			$content = $("#questionContent").val();
			$id = $("#questionModal").data("id");
			$.ajax({
					url: "/list/question",
					type: "POST",
					data: {
						content: $content,
						id: $id
					}
				})
				.done(function(res) {
					if (res.message == "success") {
						alert("提交成功");
						window.location.reload();
					} else {
						alert("提交失败");
					}
					$(this).removeAttr("disabled");
				})
				.fail(function(err) {
					alert(err);
				})
		})
		//全部记录下提出问题
	$(".questionAll").click(function() {
			$(this).attr("disabled", "true");
			$content = $("#questionAllContent").val();
			$id = $("#questionAllModal").data("id");
			$.ajax({
					url: "/list/question",
					type: "POST",
					data: {
						content: $content,
						id: $id
					}
				})
				.done(function(res) {
					if (res.message == "success") {
						alert("提交成功");
						window.location.reload();
					} else {
						alert("提交失败");
					}
					$(this).removeAttr("disabled");
				})
				.fail(function(err) {
					alert(err);
				})
		})
		//回复提问
	$(".reply").click(function() {
		$(this).attr("disabled", "true");
		$content = $("#replyContent").val();
		$id = $("#replyModal").data("id");
		$from = $("#replyModal").data("from");
		$to = $("#replyModal").data("to");
		$.ajax({
				url: "/comment/reply",
				type: "POST",
				data: {
					content: $content,
					id: $id,
					from: $from,
					to: $to
				},
				dataType: "json"
			})
			.done(function(res) {
				if (res.message == "success") {
					alert("回复成功");
					window.location.reload();
				} else {
					alert("回复失败");
				}
				$(this).removeAttr("disabled");
			})
			.fail(function(err) {
				alert(err);
			})
	})
})