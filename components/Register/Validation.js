export function ValidationPage1(object, setErrors) {
  let temp = {};
  /*temp.name=object.name?"":"Name is required!";
    if(temp.name=="Name is required!")
        temp.nameError=true;
    else temp.nameError=false;

    temp.surname=object.surname?"":"Surname is required!";
    if(temp.surname=="Surname is required!")
        temp.surnameError=true;
    else temp.surnameError=false;*/

  temp.username = object.username ? "" : "Username is required!";
  if (temp.username == "Username is required!") temp.usernameError = true;
  else temp.usernameError = false;

  temp.email = /$^|.+@.+..+/.test(object.email) ? "" : "Email is not vaild!";
  temp.email1 = object.email ? "" : "Email is required!";
  if (temp.email == "Email is not vaild!") {
    temp.emailError = true;
  } else if (temp.email1 == "Email is required!") {
    temp.email = temp.email1;
    temp.emailError = true;
  } else temp.emailError = false;

  temp.password = object.password ? "" : "Password is required!";
  if (temp.password == "Password is required!") temp.passwordError = true;
  else temp.passwordError = false;

  temp.passwordCheck = object.passwordCheck ? "" : "PasswordCheck is required!";
  if (temp.passwordCheck == "PasswordCheck is required!")
    temp.passwordCheckError = true;
  else if (object.passwordCheck !== object.password) {
    temp.passwordCheckError = true;
    temp.passwordCheck = "Passwords don't match!";
  } else temp.passwordCheckError = false;

  setErrors({ ...temp });

  return Object.values(temp).every((x) => x == "");
}
export function ValidationPage2(object, setErrors) {
  let temp = {};
  temp.name = object.name ? "" : "Name is required!";
  if (temp.name == "Name is required!") temp.nameError = true;
  else temp.nameError = false;

  temp.surname = object.surname ? "" : "Surname is required!";
  if (temp.surname == "Surname is required!") temp.surnameError = true;
  else temp.surnameError = false;

  temp.city = object.city ? "" : "City is required!";
  if (temp.city == "City is required!") temp.cityError = true;
  else temp.cityError = false;

  temp.country = object.country ? "" : "Country is required!";
  if (temp.country == "Country is required!") temp.countryError = true;
  else temp.countryError = false;
  setErrors({ ...temp });

  return Object.values(temp).every((x) => x == "");
}
