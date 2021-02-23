$(document).ready(function () {
  $("#add").click(function () {
    let todo_item = $("#to-do-item").val();
    if (todo_item != "") {
      $("#to-do-list").append(
        "<li class='list-group-item'>" +
          "<i class='fa fa-times btn btn-danger mx-1 d-inline' aria-hidden='true' id='delete'></i>" +
          "<i class='fa fa-check btn btn-warning mx-1 d-inline' aria-hidden='true' id='done'></i> " +
          "<span class='item'>"+
          todo_item +
          "</span>"+
          "</li>"
      );
    }
    $("#to-do-item").val("");
  });
  $(document).on("click", "#delete", function () {
    $(this).parent().remove();
  });
  $(document).on("click", "#done", function () {
    $(this).siblings('.item').toggleClass("done");
  });
});
