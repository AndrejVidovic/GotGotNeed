const Validation = (user, setErrors) => {
    let temp = {};
    let errorExists = false;

    temp.email = /$^|.+@.+..+/.test(user.email) ? "" : "Email is not vaild!";
    temp.email1 = user.email ? "" : "Email is required!";
    if (temp.email == "Email is not vaild!") {
        temp.emailError = true;
        errorExists = true;
    } else if (temp.email1 == "Email is required!") {
        temp.email = temp.email1;
        temp.emailError = true;
        errorExists = true;
    } else temp.emailError = false;

    temp.password = user.password ? "" : "Password is required!";
    if (temp.password == "Password is required!") {
        temp.passwordError = true;
        errorExists = true;
    } else temp.passwordError = false;

    temp.passwordCheck = user.passwordCheck ? "" : "PasswordCheck is required!";
    if (temp.passwordCheck == "PasswordCheck is required!") {
        temp.passwordCheckError = true;
        errorExists = true;
    } else if (user.passwordCheck !== user.password) {
        temp.passwordCheckError = true;
        temp.passwordCheck = "Passwords don't match!";
        errorExists = true;
    } else temp.passwordCheckError = false;

    setErrors({ ...temp });

    return !errorExists;
};

export default Validation;
