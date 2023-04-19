try { 
	 //sign-up user


webengage.survey.onComplete(function (data) {
    if (data.surveyId === "~5g1cmbi") {
        var yourself;
       // var graduation;
        var resourcse;
      //  var email;
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
                    if (data.questionResponses[i].questionId == "~1ad8i2s") {
                        yourself = quest_resp;
                    }

                  //  if (data.questionResponses[i].questionId == "~1d643f2") {
                 //       graduation = quest_resp;
                //    }

                    if (data.questionResponses[i].questionId == "~17kd2ko") {
                        resourcse = quest_resp;
                    }

                   //   if (data.questionResponses[i].questionId == "21m5bot") {
                    // email = quest_resp;
                    // email = data.quest_resp;
                   //    }
                

                } }else if (
                    Object.prototype.toString.call(
                        data.questionResponses[i].value.values
                    ) == "[object Object]"
                ) {
                    for (var keys in data.questionResponses[i].value.values) {
                      if (data.questionResponses[i].value.values.hasOwnProperty(keys)){
                         if (keys == "Email") {
                            email = data.questionResponses[i].value.values[keys];
                        }
                      }
                       
                    }
                }
            }
            console.log("selected_option", yourself);
      //  console.log("graduation", graduation);
        console.log("selected_option", resourcse);
      //  console.log("email", email);
       
        if (webengage && webengage.state && typeof webengage.state.getForever === "function" &&
            (webengage.state.getForever().cuid !== null || webengage.state.getForever().cuid !== undefined)
        ) {
           webengage.track('su_interest_area', {
                "selected_option": resourcse
            });     
      webengage.track('su_exp', {
              "selected_option": yourself
           }); 
           // webengage.user.login(email);
           // webengage.user.setAttribute({
            //  "we_email": email
           //   });
          
          
            // webengage.track('su_interest_area', {
            //     "yourself": yourself,
            //     "graduation": graduation,
            //     "resourcse": resourcse,
            //     "email": email
            // });
        }
      
       
          //  webengage.user.setAttribute({
               // "we_phone": phone
              //  "we_email": email
          //  });
           // webengage.track('su_interest_areaa', {
              // "Phone": phone
              //  "Email": email
         //   });
            
         //   webengage.track('su_interest_area', {
          //    "selected_option": resourcse
          //  });

         //   webengage.track('su_exp', {
           //     "selected_option": yourself
         //   }); 
      
    }
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~f05d4fj');
	 }
 }
