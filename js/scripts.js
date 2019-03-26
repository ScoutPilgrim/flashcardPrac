let showAnswer = false;
$(document).ready(function() {
  $(".clickable").click(function() {
      console.log($(this));
      if(!showAnswer){
        $(this).addClass('showHidden');
        showAnswer = toggleFlag(showAnswer);
      }else{
        $(this).removeClass('showHidden');
        showAnswer = toggleFlag(showAnswer);
      }
    });
    function toggleFlag(myFlag){
      if(myFlag === true){
        myFlag = false;
      }else{
        myFlag = true;
      }
      return myFlag;
    }
  });
