if(fullname.value=="")
    {
        fullname.style.border = "1px solid red";
        fullname.focus();
        return;
    }
    if(email.value=="")
        {
            email.style.border = "1px solid red";
            email.focus();
            return;
        }
        if(role.value=="")
            {
                role.style.border = "1px solid red";
                role.focus();
                return;
            }
            if(signuppassword.value=="")
                {
                    signuppassword.style.border = "1px solid red";
                    signuppassword.focus();
                    return;
                }
                if(confirmpassword.value=="")
                    {
                        confirmpassword.style.border = "1px solid red";
                        confirmpassword.focus();
                        return;
                    }
                    if(signuppassword != confirmpassword)
                    {
                        signuppassword.style.border = "1px solid red";
                    signuppassword.focus();
                    return;
                    }



