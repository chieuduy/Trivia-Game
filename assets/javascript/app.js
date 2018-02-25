$(document).ready(function () {
            $("#buttons").hide()
            $("#questions").hide()
            $(".time").hide()
            
            $("#start").on("click", function () {
                $('button').remove('#start')
                $("#buttons").show()
                $("#questions").show()
                $(".time").show()
    })
    function Question(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    var quest = [
        new Question("Which state's official beverage is alcoholic?",['California','Alabama','Massachusetts','Georgia'],'Alabama'),
        new Question("Which state's is known as the 'Land of the Midnight Sun'?",['Texas','Idaho','Alaska','Kansas'],'Alaska'),
        new Question("Which state's main attraction was created by Paul Bunyan dragging his club?",['Arkansas','Michigan','Colorado','Arizona'],'Arizona'),
        new Question("Which state is an original 13 colony?",['Oregon','Florida','Rhode Island','West Virginia'],'Rhode Island'),
        new Question("Which state was the Declaration of Independence signed in?",['Illinois','Virginia','Pennsylvania','Washington DC'],'Pennsylvania'),
    ]
    //var quiz = new Quiz(quest);

    var currentQuestion = 0;
    var score  = 0;
    var totalQ = quest.length;
       console.log(quest[3].text)
       var questcontain = $("#question")
       var a = $('#a')
       var b = $('#b')
       var c = $('#c')
       var d = $('#d')
       
       function loadQ(questIndex){
           //******CAN'T GET QUESTION TO TEXT INTO #QUESTION DIV */
        for(var i = 0; i < totalQ; i ++) {
        var q = quest[i];
        questcontain.textContent = (questIndex +1) + '. ' + q.text
             }
         }
    // Question.prototype.correctAnswers = function(choices){
    //     return choice === this.answer;
    // }
    
    // function Quiz(quest){
    //     this.score = 0;
    //     this.quest = quest;
    //     this.questIndex = 0;
    // }
    // Quiz.prototype.getquestIndex = function(){
    //     return this.quest[this.questIndex];
    // }
    // Quiz.prototype.end = function(){
    //     return this.questIndex.length === this.questIndex;
    // }
    // Quiz.prototype.guess = function(answer){
    //     this.questIndex++;
    //     if(this.getquestIndex().correctAnswers(answer)){
    //         this.score ++;
    //     }
    // }
    
    // function setupOptions() {
    //     if(quiz.end()){
    //         //show score
    //     }
    //     else{
    //         var element = $("#questions");
    //         element.innerHTML = quiz.getquestIndex().text
    //     }
            
    //         // $('#questions').append(quest[i].text)
           
    //     // }
    // }
   
    // var currentquestion = 0;
    // var correctAnswers = 0;

    
    loadQ();
    
});