// coding implementation
var checkRating = /^[0-9]{0,}$/;
var checkEmail = /^[a-zA-Z0-9+-.]+@[a-zA-z0-9._]+\.[a-zA-Z]{2,}$/;

function checkNull(text){
  return text.value.trim().length == 0;
}
function checkValid(forName){
  if(checkNull(forName.email)){
    alert("Email không được bỏ trống");
    forName.email.focus();
    return false;
  }else if(!checkEmail.test(forName.email.value)){
    alert("Email không đúng định dạng");
    forName.email.focus();
    return false;
  }
  if(checkNull(forName.com)){
    alert("Comment không được bỏ trống");
    forName.com.focus();
    return false;
  }
  if(checkNull(forName.rate)){
    alert("Rating không được bỏ trống");
    forName.rate.focus();
    return false;
  }else if(!checkRating.test(forName.rate.value)){
    alert("Rating phải là số!!!");
    forName.rate.focus();
    return false;
  }
  return true;

}
var a = document.querySelector("form") ;
a.addEventListener('submit',function(event){
  if(checkValid(this)){
    alert("gui thanh cong");
    this.submit();
  }
  else{
    event.preventDefault();
  }
});

// // end coding implementation