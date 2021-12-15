function birthdayWisher() {

    //  Variables
    let userName = document.getElementById("name").value;
    let userBirthDate = document.getElementById("birthdate").value;
    let usseRegex = /[a-z ]/;
    let today = new Date();
    let birthDateObject = new Date(userBirthDate);
    let currentYearBirthDate;
    let convertTime ;

    // First step to find whether the person have borned or not
    if (usseRegex.test(userName) && today.getFullYear()>birthDateObject.getFullYear() ||usseRegex.test(userName) &&
     today.getFullYear() == birthDateObject.getFullYear()  && today.getDate()>=birthDateObject.getDate() && today.getMonth()>= birthDateObject.getMonth()) {

     
        document.getElementById("container").
        style.transform = "rotateX(90deg)"
        
        document.getElementById("container2").
        style.display = "block";
        
        let todayMonth = today.getMonth() + 1;
        let todayDate = today.getDate();
        let fulldate = todayMonth + "-" + todayDate;

        
        let birthMonth = birthDateObject.getMonth()+1
        let birthDate = birthDateObject.getDate();
        let fullBirth = birthMonth + "-" + birthDate;

        if(fullBirth == fulldate){
            document.getElementById("output1").
                innerHTML = `Oh! Today is ${today.getFullYear()}-
                ${fulldate}<br> It's your birthday.`
    
                document.getElementById("output2").
                innerText = `Happy Birthday ${userName}`;
        }else{
            if(todayMonth<birthMonth || todayMonth == birthMonth && todayDate<birthDate){
              currentYearBirthDate =  new Date(birthDateObject);
              currentYearBirthDate.setFullYear(today.getFullYear());

              let difference = currentYearBirthDate.getTime()-today.getTime();

              convertTime = Math.ceil(difference/(3600*1000*24));

              if (convertTime == 1) {
                        document.getElementById("output1").
                        innerText = `Only ${convertTime}
                         day is left for your birthday!`
                    }
                    else if (convertTime <= 10) { document.getElementById("output1").
                    innerText = `Only ${convertTime}
                     days are left for your birthday!` }
                    else {
                        document.getElementById("output1").
                        innerText = `${convertTime}
                         days are left for your birthday!`
                    }
            }else if(todayMonth>=birthMonth 
                //|| todayMonth>=birthMonth && todayDate<birthDate
                ) {
                  currentYearBirthDate = new Date(birthDateObject);;
                  currentYearBirthDate.setFullYear(today.getFullYear()+1);

                  let differ = currentYearBirthDate.getTime()-today.getTime();
                  console.log(differ)
                  convertTime = Math.ceil(differ/(3600*1000*24));

                  if (convertTime <= 10) {
                            document.getElementById("output1").
                            innerText = `Only ${convertTime}
                             days are left for your birthday!`
                        }
                        else if (convertTime == 1) { document.getElementById("output1").
                        innerText = `Only ${convertTime}
                         day is left for your birthday!` }
                        else {
                            document.getElementById("output1").
                            innerText = `${convertTime}
                             days are left for your birthday!`
                        }
            }
        }

        

    } else {
        alert("Enter proper name => (Name Surname) or check your Birth date");
    }

}
