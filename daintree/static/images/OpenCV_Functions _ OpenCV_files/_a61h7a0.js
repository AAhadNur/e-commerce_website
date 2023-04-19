try { 
	webengage.survey.onSubmit(function (data) {
  if (data.surveyId === "33l132h") {
    var mobile;
    var userId = webengage.state.getForever().cuid;
    for (var i = 0; i < data.questionResponses.length; i++) {
      if (
        Object.prototype.toString.call(
          data.questionResponses[i].value.values
        ) == "[object Object]"
      ) {
        console.log("object");
        for (var keys in data.questionResponses[i].value.values) {
          if (keys == "Mobile Number") {
            mobile = data.questionResponses[i].value.values[keys];
          }
        }
      }
    }
    console.log("we_phone", mobile);


    webengage.require("webengage/profile").load(function () {
      var uattr = webengage && webengage.state && typeof webengage.state.getForever == "function" && webengage.state.getForever().uattr && webengage.state.getForever().uattr !== undefined ? webengage.state.getForever().uattr : null;
      webengage.user.login(userId);
      webengage.user.setAttribute({
        "we_phone": mobile
      });
      console.log(uattr);
      console.log("THE USERID" + userId);
      console.log("THE ATTR NAME" + uattr.we_first_name);
      console.log("THE ATTR EMAIL" + uattr.we_email);

      var url = 'https://avcrm.analyticsvidhya.com/api/external/leads';
      var payload = {
        "broker_id": 1221,
        "name": "Vibhav",
        "mobile": "9999999999",
        "country_code": "91",
        "email": "test@gmail.com"
      };
      var Header = { "Authorization": "Token b25fb45583fe6cb1ad5dbd2e9365e8a15535d2a6", "Content-Type": "application/json", "Access-Control-Allow-Origin":"*", "Access-Control-Allow-Credentials" : true};
      var params = {
        headers: Header,
        method: "POST", 
        mode: "no-cors"
      };
      fetch(url, params)
        .then(function (payload) {
          return payload;
        })
        .then(function (res) {
          console.log("THE RESPonse console" + res);
          return res.json();
        })
        .then(function (payload) {
          JSON.stringify(payload);
          console.log(payload);
        });
    });
  }
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~a61h7a0');
	 }
 }
