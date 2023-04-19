try { 
	webengage.survey.onComplete(function (data) {
    if (data.surveyId === "33l119e") {
        var yourself;
     //   var graduation;
        var resourcse;
        var email;
        //var test =data;
        //   console.log(test);
        for (var i = 0; i < data.questionResponses.length; i++) {
            if (
                Object.prototype.toString.call(
                    data.questionResponses[i].value.values
                ) == "[object Array]"
            ) {
                console.log("array");
                for (var j = 0; j < data.questionResponses[i].value.values.length; j++) {
                    var quest_resp = data.questionResponses[i].value.values[j];
                    if (data.questionResponses[i].questionId == "2fgcsql") {
                        yourself = quest_resp;
                    }

                //    if (data.questionResponses[i].questionId == "1q6eb1n") {
                  //      graduation = quest_resp;
                 //   }

                    if (data.questionResponses[i].questionId == "1st9qdr") {
                        resourcse = quest_resp;
                    }

                    //  if (data.questionResponses[i].questionId == "21m5bot") {
                    //  email = quest_resp;
                    // email = data.quest_resp;
                    //   }
                

                } }else if (
                    Object.prototype.toString.call(
                        data.questionResponses[i].value.values
                    ) == "[object Object]"
                ) {
                    for (var keys in data.questionResponses[i].value.values) {
                      if (data.questionResponses[i].value.values.hasOwnProperty(keys)){
                         if (keys == "Your Email ID") {
                            email = data.questionResponses[i].value.values[keys];
                        }
                      }
                       
                    }
                }
            }
            console.log("selected_option", yourself);
        //console.log("graduation", graduation);
        console.log("selected_option", resourcse);
        console.log("email", email);
        if (webengage && webengage.state && typeof webengage.state.getForever === "function" &&
            (webengage.state.getForever().cuid === null || webengage.state.getForever().cuid === undefined)
        ) {
           
            webengage.user.login(email);
            webengage.user.setAttribute({
              "we_email": email
              });
          
          
            // webengage.track('lead_captured', {
            //     "selected_option": yourself,
            //     "graduation": graduation,
            //     "selected_option": resourcse,
            //     "email": email
            // });
        }
      
        else if ( yourself!=null) {

            webengage.track('nsu_exp', {
                "selected_option": yourself
            });         
        }

        else if ( resourcse!=null) {

            webengage.track('nsu_interest_area', {
                "selected_option": resourcse
            });         
        }


      

            webengage.user.setAttribute({
               // "we_phone": phone
                "we_email": email
            });
           // webengage.track('nsu_interest_areaa', {
              // "Phone": phone
              //  "Email": email
         //   });
            
            webengage.track('nsu_interest_area', {
              // "Phone": phone
              "selected_option": resourcse
            });

            webengage.track('nsu_exp', {
                "selected_option": yourself
            }); 
       
    }
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~5bjl9j7');
	 }
 }
