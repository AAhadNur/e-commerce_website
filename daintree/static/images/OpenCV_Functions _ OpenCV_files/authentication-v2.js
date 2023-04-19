var button_id;var next_url=window.location.href;var otp_request_id;var signup_otp_request_id;var login_otp_request_id;function setQueryParam(obj){obj.href=obj.href+window.location.search
return true;}
$("#socialWhatsapp").click(()=>{setGoogleUrl(button_id,next_url)
setLinkedinUrl(button_id,next_url)})
$(".expand-utm").click((e)=>{appendUTM(e.target)
return true;})
function appendUTM(obj){var urlParams=new URLSearchParams(window.location.search);utm_source=urlParams.get('utm_source')
utm_medium=urlParams.get('utm_medium')
utm_term=urlParams.get('utm_term')
utm_content=urlParams.get('utm_content')
utm_campaign=urlParams.get('utm_campaign')
utm_dict={}
if(utm_source!=null){utm_dict['utm_source']=utm_source}
if(utm_medium!=null){utm_dict['utm_medium']=utm_medium}
if(utm_term!=null){utm_dict['utm_term']=utm_term}
if(utm_content!=null){utm_dict['utm_content']=utm_content}
if(utm_campaign!=null){utm_dict['utm_campaign']=utm_campaign}
var newUrlParams=new URLSearchParams(utm_dict)
if(newUrlParams!=''){if(obj.href.indexOf("?")!=-1){obj.href=obj.href.split("?")[0]+"?"+newUrlParams}
else{obj.href=obj.href+"?"+newUrlParams}}}
$("#popupSignupForm #popupMobile").intlTelInput({allowDropdown:true,autoHideDialCode:true,initialCountry:"IN",preferredCountries:["in","us"],});function showLoginForm(){$("#spinnerLoaderBase").addClass('d-none')
$("#loginModal").modal('show')}
function startAuthProcess(buttonid,next){$("#spinnerLoaderBase").removeClass('d-none')
$('#signupContent').removeClass('d-none')
$('#registerModal .modal-footer').removeClass('d-none')
$('#successResponseDiv').addClass('d-none')
$('form').trigger('reset')
button_id=buttonid
next_url=next
setGoogleUrl(button_id,next_url)
setLinkedinUrl(button_id,next_url)
showLoginForm();}
$("#loginFormBtn").click(()=>{var username=$('#loginCredential')
var password=$("#loginPassword")
if(popupValidateEmptyField(username)&&popupValidateEmptyField(password)){var login_data={"username":username.val(),"password":password.val(),"authentication_type":'Form Login',"button_id":button_id}
var form_data=$("#popupLoginForm").serialize()
login_data=addTrackingData(login_data)
loginOnIdentity(login_data);}
return false;})
$("#registerFormBtn").click(()=>{var full_name=$('#popupFullname')
var username=$('#popupUsername')
var phone_number=$('#popupMobile')
var email=$('#popupEmail')
var password1=$("#popupPassword1")
var password2=$("#popupPassword1")
if(popupValidateName(full_name)&&popupValidateUsername(username)&&popupValidateEmail(email)&&popupValidateEmptyField(password1)&&popupValidateTnc()){var countryCode=$("#popupSignupForm .iti__selected-flag").attr("title");var code=countryCode.split(":")[1].trim();var register_data={"username":username.val(),"full_name":full_name.val(),"email":email.val(),"password1":password1.val(),"password2":password2.val(),"authentication_type":"Form Signup","button_id":button_id,"login_source":"popup_login","is_whatsapp_subscribed":$("#signupWhatsapp").is(":checked")}
if(phone_number.val()!='')
register_data['phone_number']=code+" "+phone_number.val()
register_data=addTrackingData(register_data)
registerUser(register_data);}
return false;})
const characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';function generateString(length){let result='';const charactersLength=characters.length;for(let i=0;i<length;i++){result+=characters.charAt(Math.floor(Math.random()*charactersLength));}
return result;}
function dictToURI(dict){var str=[];for(var p in dict){str.push(encodeURIComponent(p)+"="+encodeURIComponent(dict[p]));}
return str.join("&");}
function setGoogleUrl(btn_id,next_url){var query_params=window.location.search.slice(1)
var return_to=encodeURIComponent(window.location.href)
var next_url=encodeURIComponent(next_url)
var is_whatsapp_subscribed=$("#socialWhatsapp").is(":checked")
if(query_params==""){var google_url=google_initiate_url+"?button_id="+btn_id+"&return_to="+return_to+"&authentication_type=Google&is_whatsapp_subscribed="+is_whatsapp_subscribed+"&next="+next_url+"&source_platform=blogs-popup"}
else{var google_url=google_initiate_url+"?button_id="+btn_id+"&"+query_params+"&authentication_type=Google&is_whatsapp_subscribed="+is_whatsapp_subscribed+"&return_to="+return_to+"&next="+next_url+"&source_platform=blogs-popup"}
document.getElementById("googleBtn").href=google_url}
function setLinkedinUrl(btn_id,next_url){var query_params=window.location.search.slice(1)
var return_to=encodeURIComponent(window.location.href)
var next_url=encodeURIComponent(next_url)
var is_whatsapp_subscribed=$("#socialWhatsapp").is(":checked")
state_val=generateString(32);var urlParams=new URLSearchParams(window.location.search);var utm_source=urlParams.get('utm_source')==null?'None':urlParams.get('utm_source')
var utm_medium=urlParams.get('utm_medium')==null?'None':urlParams.get('utm_medium')
var utm_campaign=urlParams.get('utm_campaign')==null?'None':urlParams.get('utm_campaign')
var utm_term=urlParams.get('utm_term')==null?'None':urlParams.get('utm_term')
var utm_content=urlParams.get('utm_content')==null?'None':urlParams.get('utm_content')
redirect_query_params="button_id="+btn_id+"&return_to="+return_to+"&next="+next_url+"&authentication_type=Linkedin&utm_source="+utm_source+"&utm_medium="+utm_medium+"&utm_campaign="+utm_campaign+"&utm_term="+utm_term+"&utm_content="+utm_content+"&is_whatsapp_subscribed="+is_whatsapp_subscribed+"&source_platform=blogs-popup"
redirect_uri=LINKEDIN_REDIRECT+"?"+redirect_query_params
query_params="response_type=code&state="+state_val+"&scope=r_liteprofile+r_emailaddress&client_id="+LINKEDIN_CLIENT_ID+"&redirect_uri="+encodeURIComponent(redirect_uri)
linkedin_auth_url=LINKEDIN_AUTHORIZATION_ENDPOINT+"?"+query_params
document.getElementById("linkedinBtn").href=linkedin_auth_url;}
function loginOnIdentity(login_data){$(".spinner-border").removeClass('d-none')
$.ajax({method:"POST",url:identity_login_url,data:login_data,xhrFields:{withCredentials:true},crossDomain:true,success:(response)=>{try{if(JSON.parse(response).user_data){redirect_after_login(next_url)}}
catch{if(response.message){$(".spinner-border").addClass('d-none')
var errordiv=$('#showerror')
$(".text-danger").remove();$(errordiv).after(`<small class="text-danger mb-4">${response.message}</small>`);errordiv.focus();$(".text-danger").fadeTo(4000,500).slideUp(500,function(){$(".text-danger").slideUp(500);$(".text-danger").remove();});}
else if(response.status=='429'){$(".alert-danger").remove();$("#showerror").after(`<div class="alert alert-danger">${response.response}</div>`);$("#showerror").focus();$(".alert-danger").fadeTo(4000,500).slideUp(500,function(){$(".alert-danger").slideUp(500);$(".alert-danger").remove();});return false;}
else{login_otp_request_id=response.otp_request_id
if($("#loginEmail").attr('class').indexOf('modal')!=-1){$("#loginEmail").modal('hide')
$("#loginOtp").modal('show')}
else{$("#loginEmail").hide()
$("#loginOtp").show()}}}},error:(err)=>{$(".spinner-border").addClass('d-none')}})}
function registerUser(register_data){$(".spinner-border").removeClass('d-none')
$.ajax({method:"POST",url:identity_signup_url,data:register_data,success:(response)=>{$(".spinner-border").addClass('d-none')
if(response.errors){if(response.errors.fullname)popupValidateResponse('popupFullname',response.errors.fullname)
if(response.errors.username)popupValidateResponse('popupUsername',response.errors.username)
if(response.errors.phone_number)popupValidateResponse('popupMobile',response.errors.phone_number)
if(response.errors.email)popupValidateResponse('popupEmail',response.errors.email)
if(response.errors.password1)popupValidateResponse('popupPassword1',response.errors.password1)}
else if(response.status=='429'){alert("fkdnk")
$(".alert-danger").remove();$("#signupModalError").after(`<div class="alert alert-danger">${response.response}</div>`);$("#signupModalError").focus();$(".alert-danger").fadeTo(4000,500).slideUp(500,function(){$(".alert-danger").slideUp(500);$(".alert-danger").remove();});return false;}
else{signup_otp_request_id=response.otp_request_id
if($("#registerModal").attr('class').indexOf('modal')!=-1){$("#registerModal").modal('hide')
$("#signupOtp").modal('show')}
else{$("#registerModal").hide()
$("#signupOtp").show()}
$("#registerModal").trigger("reset");}},error:(error)=>{$(".spinner-border").addClass('d-none')}})}
function addTrackingData(user_data){user_data['url']=window.location.href
user_data['next']=next_url
user_data['source_platform']='blogs-popup'
split_next_url=decodeURIComponent(next_url).split("?")
if(split_next_url.length==2){utm_params=split_next_url[1].split("&")
for(let i=0;i<utm_params.length;i++){utm_key_value=utm_params[i].split("=")
user_data[utm_key_value[0]]=utm_key_value[1]}}
return user_data}
function popupValidateEmail(email){if(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email.val())==false){$(".text-danger").remove();$(email).after('<small class="text-danger">Please enter a valid email address</small>');email.focus();$(".text-danger").fadeTo(4000,500).slideUp(500,function(){$(".text-danger").slideUp(500);$(".text-danger").remove();});return false;}
return true;}
function popupValidateName(name){if(/^([A-Za-z ])/.test(name.val())==false){$(".text-danger").remove();$(name).after('<small class="text-danger">Please enter valid name(only letters)</small>');$(name).focus();$(".text-danger").fadeTo(4000,500).slideUp(500,function(){$(".text-danger").slideUp(500);$(".text-danger").remove();});return false;}
return true;}
function popupValidateUsername(username){if(/^([A-Za-z0-9])/.test(username.val())==false){$(".text-danger").remove();$(username).after('<small class="text-danger">Please enter valid name(characters,digits)</small>');$(username).focus();$(".text-danger").fadeTo(4000,500).slideUp(500,function(){$(".text-danger").slideUp(500);$(".text-danger").remove();});return false;}
return true;}
function popupValidatePassword(password){if(/^([A-Za-z0-9])/.test(password.val())==false){$(".text-danger").remove();$(password).parent().after('<small class="text-danger mb-4">Please enter a password</small>');$(password).focus();$(".text-danger").fadeTo(4000,500).slideUp(500,function(){$(".text-danger").slideUp(500);$(".text-danger").remove();});return false;}
return true;}
function popupValidatePhone(mobile){if(/^\d{8,15}$/.test(mobile.val())==false){$(".text-danger").remove();$(mobile).after('<small class="text-danger">Please enter a valid phone number</small>');$(mobile).focus();$(".text-danger").fadeTo(4000,500).slideUp(500,function(){$(".text-danger").slideUp(500);$(".text-danger").remove();});return false;}
return true;}
function popupValidateEmptyField(field){if(field.val()==""){$(".text-danger").remove();$(field).parent().after('<small class="text-danger mb-4">This field cannot be empty </small>');$(field).focus();$(".text-danger").fadeTo(4000,500).slideUp(500,function(){$(".text-danger").slideUp(500);$(".text-danger").remove();});return false;}
return true;}
function popupValidateOTP(field){if(field.val().length!=6||isNaN(field.val())){$(".text-danger").remove();$(field).after('<small class="text-danger">OTP must be of 6 digits. </small>');$(field).focus();$(".text-danger").fadeTo(4000,500).slideUp(500,function(){$(".text-danger").slideUp(500);$(".text-danger").remove();});return false;}
return true;}
function popupValidateResponse(id,error){if(error){var slt='#'+id
var selector=$(slt)
$(`#${id}`+".text-danger").remove();if(id==='createPassword1'||id==='createPassword2'||id==='popupPassword1'){$(selector).parent().after(`<small class="text-danger" id=${id}>${error}</small>`);}
else{$(selector).after(`<small class="text-danger" id=${id}>${error}</small>`);}
selector.focus();$(`#${id}`+".text-danger").fadeTo(4000,500).slideUp(500,function(){$(`#${id}`+".text-danger").slideUp(500);$(`#${id}`+".text-danger").remove();return false;})}
return true;}
function popupValidateTnc(){var tnc_checked=$("#registertnc").is(":checked")
if(tnc_checked){return true;}
return false;}
$("#signoutBtn").click(()=>{initiatesignout();})
function resetForgot(){$("#forgotEmailIcon").removeClass('border border-2 border-danger')
$("#forgotEmailInput").removeClass('border border-2 border-danger')
$("#emailErrorDiv").addClass('d-none')
$("#forgotEmailNextBtn").parent().removeClass('d-none')
$("#forgotEmailNextBtn").parent().addClass('d-block')}
$("#forgotEmailInput").click(()=>{resetForgot();})
$("#forgotEmailNextBtn").click(()=>{var email=$("#forgotEmailInput")
if(popupValidateEmail(email,this)){forgotPassword_sendotp(email.val())}
return false;})
function forgotPassword_sendotp(email){$(".spinner-border").removeClass('d-none')
var data={"email":email}
$.ajax({method:"POST",url:password_reset_send_otp_url,data:data,xhrFields:{withCredentials:true},crossDomain:true,success:(response)=>{$(".spinner-border").addClass('d-none')
$("#popupForgotOTPForm").trigger('reset')
if(response.account_exists==false){$("#forgotEmailIcon").addClass('border border-2 border-danger')
$("#forgotEmailInput").addClass('border border-2 border-danger')
$("#emailErrorDiv").removeClass('d-none')
$("#forgotEmailNextBtn").parent().addClass('d-none')
$("#forgotEmailNextBtn").parent().removeClass('d-block')}
else if(response.status=='429'){$(".alert-danger").remove();$("#forgotEmailError").after(`<div class="alert alert-danger">${response.response}</div>`);$("#forgotEmailError").focus();$(".alert-danger").fadeTo(4000,500).slideUp(500,function(){$(".alert-danger").slideUp(500);$(".alert-danger").remove();});return false;}
else{otp_request_id=response.otp_request_id
if($("#forgotEmail").attr('class').indexOf('modal')!=-1){$("#forgotEmail").modal('hide')
$("#forgotOtp").modal('show')}
else{$("#forgotEmail").hide()
$("#forgotOtp").show()}}},error:(err)=>{$(".spinner-border").addClass('d-none')}})}
$("#otpNextBtn").click(()=>{var otp=$("#forgotOtpInput")
if(popupValidateOTP(otp)){$(".spinner-border").removeClass('d-none')
var data={"entered_otp":$("#forgotOtpInput").val(),"otp_request_id":otp_request_id}
$.ajax({method:"POST",url:password_reset_verify_otp,data:data,xhrFields:{withCredentials:true},crossDomain:true,success:(response)=>{$(".spinner-border").addClass('d-none')
if(response.is_verified==false&&response.response=='Your OTP time is Expired.'){$(".alert-danger").remove();$("#forgotEmailError").after(`<div class="alert alert-danger">${response.response}</div>`);$("#forgotEmailError").focus();$(".alert-danger").fadeTo(4000,500).slideUp(500,function(){$(".alert-danger").slideUp(500);$(".alert-danger").remove();});return false;}
if(response.is_verified==false&&response.response=='Your OTP match failed.'){$(".alert-danger").remove();$("#forgotOtpError").after(`<div class="alert alert-danger">${response.response}</div>`);$("#forgotOtpError").focus();$(".alert-danger").fadeTo(4000,500).slideUp(500,function(){$(".alert-danger").slideUp(500);$(".alert-danger").remove();});return false;}
if(response.is_verified==false&&response.response=='Limit Exhausted to verify otp !!, Please request for another otp'){if($("#forgotOtp").attr('class').indexOf('modal')!=-1){$("#forgotOtp").modal('hide')
$("#forgotEmail").modal('show')}
else{$("#forgotOtp").hide()
$("#forgotEmail").show()}
$(".alert-danger").remove();$("#forgotEmailError").after(`<div class="alert alert-danger">${response.response}</div>`);$("#forgotEmailError").focus();$(".alert-danger").fadeTo(4000,500).slideUp(500,function(){$(".alert-danger").slideUp(500);$(".alert-danger").remove();});return false;}
if(response.is_verified==true){if($("#forgotOtp").attr('class').indexOf('modal')!=-1){$("#forgotOtp").modal('hide')
$("#createPassword").modal('show')}
else{$("#forgotOtp").hide()
$("#createPassword").show()}}},error:(err)=>{$(".spinner-border").addClass('d-none')}})}
return false;})
$("#forgotPasswordSubmitBtn").click(()=>{var password1=$("#createPassword1")
var password2=$("#createPassword2")
if(popupValidateEmptyField(password1)&&popupValidateEmptyField(password2)){var data={"email":$("#forgotEmailInput").val(),"password1":password1.val(),"password2":password2.val(),"entered_otp":$("#forgotOtpInput").val(),"otp_request_id":otp_request_id,}
$(".spinner-border").removeClass('d-none')
$.ajax({method:"POST",url:password_reset_url,data:data,xhrFields:{withCredentials:true},crossDomain:true,success:(response)=>{$(".spinner-border").addClass('d-none')
if(response.errors){if(response.errors.password1)popupValidateResponse('createPassword1',response.errors.password1)
if(response.errors.password2)popupValidateResponse('createPassword2',response.errors.password2)}
if(response.is_password_reset==true){$("#popupForgotEmailForm").trigger('reset')
$("#popupForgotOTPForm").trigger('reset')
$("#popupForgotPasswordForm").trigger('reset')
if($("#createPassword").attr('class').indexOf('modal')!=-1){$("#createPassword").modal('hide')
$("#loginEmail").modal('show')}
else{$("#createPassword").hide()
$("#loginEmail").show()}
$(".alert-success").remove();$("#showerror").after(`<div class="alert alert-success">${response.message}</div>`);$("#showerror").focus();$(".alert-success").fadeTo(4000,500).slideUp(500,function(){$(".alert-success").slideUp(500);$(".alert-success").remove();});return false;}},error:(err)=>{$(".spinner-border").addClass('d-none')}})}
return false;})
$("#loginotpNextBtn").click(()=>{var otp=$("#loginOtpInput")
if(popupValidateOTP(otp)){$(".spinner-border").removeClass('d-none')
var data={"entered_otp":$("#loginOtpInput").val(),"otp_request_id":login_otp_request_id,"email":$("#loginCredential").val()}
$.ajax({method:"POST",url:signup_verify_otp,data:data,xhrFields:{withCredentials:true},crossDomain:true,success:(response)=>{$(".spinner-border").addClass('d-none')
try{if(JSON.parse(response).user_data){if(JSON.parse(response).user_data){redirect_after_login(next_url)}}}
catch{$("#popupLoginOTPForm").trigger('reset')
if(response.is_verified==false&&response.response=='Your OTP time is Expired.'){display_alert_danger_message("#loginOtpError",response.response)}
if(response.is_verified==false&&response.response=='Your OTP match failed.'){display_alert_danger_message("#loginOtpError",response.response)}
if(response.is_verified==false&&response.response=='Limit Exhausted to verify otp !!, Please request for another otp'){if($("#loginOtp").attr('class').indexOf('modal')!=-1){$("#loginOtp").modal('hide')
$("#loginEmail").modal('show')}
else{$("#loginOtp").hide()
$("#loginEmail").show()}
display_alert_danger_message("#showerror",response.response)
return false;}}},error:(err)=>{$(".spinner-border").addClass('d-none')}})}
return false;})
$("#signupotpNextBtn").click(()=>{var otp=$("#signupOtpInput")
if(popupValidateOTP(otp)){$(".spinner-border").removeClass('d-none')
var data={"entered_otp":$("#signupOtpInput").val(),"otp_request_id":signup_otp_request_id,"email":$("#popupEmail").val()}
$.ajax({method:"POST",url:signup_verify_otp,data:data,xhrFields:{withCredentials:true},crossDomain:true,success:(response)=>{$(".spinner-border").addClass('d-none')
try{if(JSON.parse(response).user_data){redirect_after_login(next_url)}}
catch{$("#popupSignupOTPForm").trigger('reset')
if(response.is_verified==false&&response.response=='Your OTP time is Expired.'){display_alert_danger_message("#signupOtpError",response.response)}
if(response.is_verified==false&&response.response=='Your OTP match failed.'){display_alert_danger_message("#signupOtpError",response.response)}
if(response.is_verified==false&&response.response=='Limit Exhausted to verify otp !!, Please request for another otp'){if($("#signupOtp").attr('class').indexOf('modal')!=-1){$("#signupOtp").modal('hide')
$("#registerModal").modal('show')}
else{$("#signupOtp").hide()
$("#registerModal").show()}
display_alert_danger_message("#signupModalError",response.response)}}},error:(err)=>{$(".spinner-border").addClass('d-none')}})}
return false;})
function display_alert_danger_message(id,message){$(".alert-danger").remove();$(id).after(`<div class="alert alert-danger">${message}</div>`);$(id).focus();$(".alert-danger").fadeTo(4000,500).slideUp(500,function(){$(".alert-danger").slideUp(500);$(".alert-danger").remove();});return false;}
$('.toggle-password').click(function(){if($(this).find('#Eye-Copy').attr('fill')=='#7D7D7D'){$(this).find('#Eye-Copy').attr('fill','#000000');}
else{$(this).find('#Eye-Copy').attr('fill','#7D7D7D');}
let input=$(this).prev();input.attr('type',input.attr('type')==='password'?'text':'password');});$(".checkbox-validator:checkbox").change(function(){var ischecked=$(this).is(':checked');if(ischecked){if($(this).attr('id')!='registertnc'){$("#googleBtn").attr('disabled',false)
$("#linkedinBtn").removeClass('disabled')
$("#loginWithEmailBtn").attr('disabled',false)}
$(this).parent().parent().find(".alert-danger").toggle(+$(this).val());}
else{if($(this).attr('id')!='registertnc'){$("#googleBtn").attr('disabled',true)
$("#linkedinBtn").addClass('disabled')
$("#loginWithEmailBtn").attr('disabled',true)}
$(this).parent().parent().find(".alert-danger").toggle(+$(this).val());}});$('body').click((e)=>{$('.eye-copy').attr('fill','#7D7D7D');$('.toggle-password').prev().attr('type','password');});$('.password-element').click((e)=>{e.stopPropagation();})
function redirect_after_login(next_url){if(next_url!=undefined){next_url=decodeURIComponent(next_url)
if(next_url.indexOf(window.location.origin)!=-1){window.location.href=next_url}
else{window.location.href=window.location.origin+next_url}}
else{if(window.location.href.indexOf('social')!='-1'){window.location.href=window.location.href.slice(0,window.location.href.indexOf('social'))}
else{location.reload()}}}
var urlParams_linkedin=new URLSearchParams(window.location.search)
if(urlParams_linkedin.get('social')=='linkedin'||urlParams_linkedin.get('social')=='google'){redirect_after_login(urlParams_linkedin.get('next'))}
const logout=()=>{document.cookie='identityid=; path=/; domain='+site_domain+'; expires='+new Date(0).toUTCString();location.reload();}