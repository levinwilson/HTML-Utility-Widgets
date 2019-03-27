$(document).ready(function () {
    test_sql();

    function test_sql() { 
            $.ajax({
                url: '/sql/',
                type: 'POST',
                cache: false,
                processData: false,
                contentType: false,
                success: function(data) { 
                    
                    var html = '';

                    data.forEach(element => {
                       // html += '<div class="hide-class" id="q'+element.Question_ID+'">'+element.Question+'</div>'
                       html += '<fieldset class="hide-class" id="q'+element.Question_ID+'">';
                       html += '<h2 class="fs-title">Question '+element.Question_ID+'</h2>';
                       html += '<h3 class="fs-subtitle" id="questions">'+element.Question+'</h3>';
                       //html += '<input type="button" name="next" class="next action-button" value="Next"/>';
                       html += '</fieldset>';
                    });
                    $("#questions").html(html);
                    $("#q1").show();
                }
            });
            return false;   
    }
});