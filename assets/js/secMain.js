var inputlength = $(".position_data").length;
// console.log(inputlength + "new")
for (var i = 0; i < inputlength; i++) {
    document.querySelectorAll(".position_data")[i].addEventListener('input', function(event) {
    // alert("The text has been changed.");
    inp1 = $("#inp1").val();
    inp2 = $("#inp2").val();
    inp3 = $("#inp3").val();
    inp4 = $("#inp4").val();
    inp5 = $("#inp5").val();
    inp6 = $("#inp6").val();
  

    if (inp1 == inp6){
        $("#inp1").css("color", "black");  
       $("#inp6").css("color", "black"); 
      }else{
        $("#inp1").css("color", "red");
        $("#inp6").css("color", "red"); 
      }
      groupA = Math.round(parseFloat(((eval(inp2) + eval(inp5))/2) - ((eval(inp3) + eval(inp4))/2 ))*100)/100;
      groupB = Math.round(parseFloat(((eval(inp1) + eval(inp6))/2) - ((eval(inp3) + eval(inp4))/2 ))*100)/100;
   
      $("#groupa").html(groupA);
      const r1value1 = ` \\[\\left[\\frac{${inp2} + ${inp5}}{2}\\right] - \\left[\\frac{${inp3} + ${inp4}}{2}\\right] \\]= ${groupA} mm`;
      $("#r1value1").text(r1value1);

      $("#groupb").html(groupB);
      const r2value1 = ` \\[\\left[\\frac{${inp1} + ${inp6}}{2}\\right] - \\left[\\frac{${inp3} + ${inp4}}{2}\\right] \\]= ${groupB} mm`;
      $("#r2value1").text(r2value1);

    

      MathJax.typesetPromise();


      if (groupA >= -0.25 && groupA <= 0.25) {
        $("#groupA span").css("color", "green");
      } else {
        $("#groupA span").css("color", "red");
      }
      if (groupA != "NaN") {
        $("#groupA span").text(groupA+" mm");
      }
  
  
      if (groupB >= -0.5 && groupB <= 0.5) {
        $("#groupB span").css("color", "green");
      } else {
        $("#groupB span").css("color", "red");
      }
      if (groupB != "NaN") {
        $("#groupB span").text(groupB+" mm");
      }
  
     
  });
}
$("#resetbtn").click(function(){
    $("#inp1").val("");
    $("#inp2").val("");
    $("#inp3").val("");
    $("#inp4").val("");
    $("#inp5").val("");
    $("#inp6").val("");
   
    $("#groupA span").css("color", "black");
    $("#groupB span").css("color", "black");
   
   
    $("#groupA span").text("");
    $("#groupB span").text("");
    $("#r1value1").text("");
    $("#r2value1").text("");
   })



  window.addEventListener('resize', function(event) {
    updateEngineSize()
  });
  updateEngineSize();
  
  function updateEngineSize() {
    // console.log(window.innerWidth >= window.innerHeight);
   
     if (window.innerWidth >= window.innerHeight) {
        $("body").addClass("landscapeScreen");
        $("body").removeClass("portraitScreen");
      } else {
        $("body").addClass("portraitScreen");
        $("body").removeClass("landscapeScreen");
      }
  }