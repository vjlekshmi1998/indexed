function check(){
    var question1=document.quiz.question1.value;
    var question2=document.quiz.question2.value;
    var question3=document.quiz.question3.value;
    var correct=0;
    if(question1=="question1"){
        correct++;
    }
    if(question2=="question2"){
        correct++;
    }

    if(question3=="question3"){
        correct++;
    }
    var message=[ "great job","that is just okay","you really need to better"];
    var score;
    if(correct==0){score==2;}
    if(correct>0&&correct<3){
        sure=1;}
        if(correct==3){score=0;}  
    document.getElementById("message") .inner html=message[score];
document.getelementbyid("number.correct").inner html="you got+vcorrect+"correct"};

