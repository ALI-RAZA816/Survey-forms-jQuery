$(document).ready(function(){

    // variable declaration
    var nameField = $('#name');
    var emailField = $('#email');
    var ageField = $('#age');
    var servicesVal = $('#servicesVal');
    var suggestions = $('#suggestions');
    var PositiveExperience = $('#positiveExperience');
    var reaction_Box = $(' .form-2 .satisfied-box .reaction-box .services');
    var recomended_Box = $('.form-2 .recommended-box .reaction .recommended');

    // declaring personalInfomation function
    function personalInfomation(){

        if(nameField.val() == ''){
            // error Messge if the field is empty
            $('.nameErr').text('Please enter your name.');
            return false ;
        }else{
            $('.nameErr').text('');
        }
        
        if(emailField.val() == ''){
            // error Messge if the field is empty
            $('.emailErr').text('Please enter your valid email.');
            return false;
        }else{
            $('.emailErr').text('');
        }
        
        if(ageField.val() == 'Select your age group'){
            // error Messge if the field is empty
            $('.ageErr').text('Please select your age.');
            return false;
        }else{
            $('.ageErr').text('');
        }

        $('.nameErr').text('');
        $('.emailErr').text('');
        $('.form-1').hide();
        $('.ageErr').text('');
        $('.survery-form .progress-bar > .progress').css('width','293px');
        $('.form-2').show().addClass('active');
        return true ;
        
        
    }
    // add event on personalinformation function
    $('#nextBtn1').on('click',personalInfomation);
    

    // declaring experience function
    function experience(){
        
        reaction_Box.on('click',function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        });
        
        recomended_Box.on('click',function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            $(this).css({
                "border-color":"#2a83be",
                "background-color":"rgba(42, 131, 190,.20)"
            });
            $(this).siblings().css({
                "border-color":"",
                "background-color":""
            });
        });

    }

    // intialize experience Function
    experience();


    $('#nextBtn2').on('click',function(){
    
        if(!reaction_Box.hasClass('active')){
            // errpr message if the field is empty
            $('.servicesErr').text('Please Select Satisfiction level.');
            return false;
        }else{
            $('.servicesErr').text('');
        }
        
        if(!recomended_Box.hasClass('active')){
            // errpr message if the field is empty
            $('.recommendedErr').text('Please select a recommendation level.');
            return false;
        }else{
            $('.recommendedErr').text('');
        }
        $('.form-2').hide();
        $('.form-3').show().addClass('active');
        $('.survery-form .progress-bar > .progress').css('width','586px');
        
    });
    

    function additionalComments(){

        if(PositiveExperience.val() == '' || PositiveExperience.val().length < 5){
            // errpr message if the field is empty
            $('.positiveErr').text('Please share your experience in some words.');
            return false;
        }else{
            $('.positiveErr').text('');
        }
        
        if(suggestions.val() == '' || suggestions.val().length < 5){
            // errpr message if the field is empty
            $('.suggestionErr').text('Please share your suggestion in some words.');
            return false;
        }else{
            $('.suggestionErr').text('');
        }
        
        if(servicesVal.val() == 'Select frequency'){
            // errpr message if the field is empty
            $('.servicesErr').text('Please select how oftern you use our services');
            return false;
        }else{
            $('.servicesErr').text('');
        }

        $('#additional-comments').hide();
        $('.feedback').show().addClass('active');
        $('.survery-form .progress-bar > .progress').css('width','880px');
        summary();
        
    }
    
    $('#nextBtn3').on('click',additionalComments);
    $('#nextBtn4').on('click',function(){
        $('.feedback').hide();
        $('.notifications').show().addClass('active');

        // display first form after submiting information
        setTimeout(()=>{
            // reset all the fields
            $('.form-1').show();
            $('.notifications').hide();
            nameField.val('');
            emailField.val('');
            ageField.val('');
            reaction_Box.removeClass('active');
            recomended_Box.removeClass('active');
            PositiveExperience.val('');
            suggestions.val('');
            servicesVal.val('');
        },3000); // time 3s
    });

    $('#prevBtn2').on('click',()=>{
        $('.form-1').show();
        $('.form-2').hide().removeClass('active');
        $('.survery-form .progress-bar > .progress').css('width','0px');
    });
    $('#prevBtn3').on('click',()=>{
        $('.form-2').show().addClass('active');
        $('.form-3').hide().removeClass('active');
        $('.survery-form .progress-bar > .progress').css('width','293px');
    });
    $('#prevBtn4').on('click',()=>{
        $('.form-3').show().addClass('active');
        $('.feedback').hide().removeClass('active');
        $('.survery-form .progress-bar > .progress').css('width','586px');
    });

    function getSelectedImprovements() {
                const selected = [];
                $('input[name="improvements"]:checked').each(function() {
                    selected.push($(this).siblings("label").text());
                });
                
                return selected.length > 0 ? selected.join(", ") : "None selected";
    }

    function summary(){

        let summaryDiv = `
                        <div class="feedbox feedbox-1">
                            <h3>Personal Information</h3>
                            <span><b>Name:</b> ${nameField.val()}</span>
                            <span><b>Email:</b> ${emailField.val()}</span>
                            <span><b>Age Group:</b> ${ageField.val()}</span>
                        </div>
                        <div class="feedbox feedbox-2">
                            <h3>Your Experience</h3>
                            <span><b>Satisfaction:</b> ${$('.form-2 .satisfied-box .reaction-box .services.active').find("span").text()}</span>
                            <span><b>Recommendation:</b> ${$('.form-2 .recommended-box .reaction .recommended.active').find("span").text()}</span>
                            <span><b>Improvements:</b>${getSelectedImprovements()}</span>
                        </div>
                        <div class="feedbox feedbox-3">
                            <h3>Additional Comments</h3>
                            <span><b>Positive Feedback:</b> ${PositiveExperience.val()}</span>
                            <span><b>Suggestions:</b> ${suggestions.val()}</span>
                            <span><b>Usage Frequency:<b> ${servicesVal.val()}</span>
                        </div>
                        `
                        $('.feedback-container').html(summaryDiv);
        return;
    }

    
});




