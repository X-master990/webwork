//window.onload=function(){//document.write("HelloJavaScript");
//};

let imageURLArray=[
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1-1525230190.jpg",
    "https://fairylolita.com/wp-content/uploads/2020/10/DSCF8136.jpg",
    "https://pic03.eapple.com.tw/siangnong/xn_i_img02.png"
    
]
var tmp=-1;
$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        console.log(randomChildNumber);
        while (randomChildNumber==tmp){
            randomChildNumber=Math.floor(Math.random()*numberOfListItem);
        }
        $("h1").text($("li").eq(randomChildNumber).text());
        $("img").attr("src",imageURLArray[randomChildNumber]);
        tmp=randomChildNumber;
    });
});

