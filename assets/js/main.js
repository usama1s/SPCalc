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
    inp7 = $("#inp7").val();
    inp8 = $("#inp8").val();
    inp9 = $("#inp9").val();
    $("#input1").html(inp1);
    $("#input2").html(inp2);
    $("#input3").html(inp3);
    $("#input4").html(inp4);
    $("#input5").html(inp5);
    $("#input6").html(inp6);
    $("#input7").html(inp7);
    $("#input8").html(inp8);
    $("#input9").html(inp9);
    if (inp1 == inp9){
      $("#inp1").css("color", "black");  
      $("#inp9").css("color", "black"); 
    }else{
      $("#inp1").css("color", "red");
      $("#inp9").css("color", "red"); 
      }
      groupA = Math.round(parseFloat(((eval(inp2) + eval(inp5))/2) - ((eval(inp3) + eval(inp4))/2 ))*100)/100;
      groupB = Math.round(parseFloat(((eval(inp5) + eval(inp8))/2) - ((eval(inp6) + eval(inp7))/2 ))*100)/100;
      groupC = Math.round(parseFloat(((eval(inp1) + eval(inp7))/2) - ((eval(inp3) + eval(inp4))/2 ))*100)/100;
      groupD = Math.round(parseFloat(((eval(inp3) + eval(inp9))/2) - ((eval(inp6) + eval(inp7))/2 ))*100)/100;
      $("#groupa").html(groupA);
      const r1value1 = ` \\[\\left[\\frac{${inp2} + ${inp5}}{2}\\right] - \\left[\\frac{${inp3} + ${inp4}}{2}\\right] \\]= ${groupA} mm`;
      $("#r1value1").text(r1value1);

      $("#groupb").html(groupB);
      const r1value2 = ` \\[\\left[\\frac{${inp5} + ${inp8}}{2}\\right] - \\left[\\frac{${inp6} + ${inp7}}{2}\\right] \\]= ${groupB} mm`;
      $("#r1value2").text(r1value2);

      $("#groupc").html(groupC);
      const r2value1 = ` \\[\\left[\\frac{${inp1} + ${inp7}}{2}\\right] - \\left[\\frac{${inp3} + ${inp4}}{2}\\right] \\]= ${groupC} mm`;
      $("#r2value1").text(r2value1);

      $("#groupd").html(groupD);
      const r2value2 = ` \\[\\left[\\frac{${inp3} + ${inp9}}{2}\\right] - \\left[\\frac{${inp6} + ${inp7}}{2}\\right] \\]= ${groupD} mm`;
      $("#r2value2").text(r2value2);

      MathJax.typesetPromise();

      if (groupA >= -0.25 && groupA <= 0.25) {
        $("#groupA span").css("color", "green");
      } else {
        $("#groupA span").css("color", "red");
      }
      if (groupA != "NaN") {
        $("#groupA span").text(groupA+" mm");
      }
  
  
      if (groupB >= -0.25 && groupB <= 0.25) {
        $("#groupB span").css("color", "green");
      } else {
        $("#groupB span").css("color", "red");
      }
      if (groupB != "NaN") {
        $("#groupB span").text(groupB+" mm");
      }
  
      if (groupC >= -0.5 && groupC <= 0.5) {
        $("#groupC span").css("color", "green");
      } else {
        $("#groupC span").css("color", "red");
      }
      if (groupC != "NaN") {
        $("#groupC span").text(groupC+" mm");
      }
  
      if (groupD >= -0.5 && groupD <= 0.5) {
        $("#groupD span").css("color", "green");
      } else {
        $("#groupD span").css("color", "red");
      }
      if (groupD != "NaN") {
        $("#groupD span").text(groupD+" mm");
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
    $("#inp7").val("");
    $("#inp8").val("");
    $("#inp9").val("");
    $("#groupA span").css("color", "black");
    $("#groupB span").css("color", "black");
    $("#groupC span").css("color", "black");
    $("#groupD span").css("color", "black");
   
    $("#groupA span").text("");
    $("#groupB span").text("");
    $("#groupC span").text("");
    $("#groupD span").text("");
    $("#r1value1").text("");
    $("#r1value2").text("");
    $("#r2value1").text("");
    $("#r2value2").text("");

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



  

