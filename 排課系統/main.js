
$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    let topicCount = topic.length;//一秒鐘有1000毫秒//每分鐘60秒、每小時60分鐘、每天24小時
    let millisecsPerDay = 24*60*60*1000;

    let arr=new Array;
    var x=0;
    $("#movedate").change(function(){ 
        $("#movedate").attr("value",$(this).val());
        arr=$('#movedate').val().split("-");
        
        startDate.setMonth(arr[1],arr[2]);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);

        for(; x<topicCount ; x++){
            $("#courseTable").append("<tr>"+
            `<td>${x+1}</td>`+
            `<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString()}</td>`+
            `<td>${topic[x]}</td>`+
            "</tr>");
        }
    });
   

});


