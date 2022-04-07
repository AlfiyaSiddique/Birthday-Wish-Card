let position = 0;
let colors = ["red","blue","green","yellow","grey","pink","orange","whitesmoke","bluevoilet"]
let poppers = document.getElementsByTagName("i");
for (let i = 0; i < poppers.length; i++) {
 poppers[i].style.left = position;
    position++;
    console.log(poppers[i])
}


function birthdayWisher() {

    //  Variables
    let userName = document.getElementById("name").value;
    let userBirthDate = document.getElementById("birthdate").value;
    let usseRegex = /[a-z ]/;
    let today = new Date();
    let birthDateObject = new Date(userBirthDate);
    let currentYearBirthDate;
    let convertTime ;

    
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
            let audio = new Audio("Piano.mp3");
            audio.play();
            confet();
            document.getElementById("output1").
                innerHTML = `Oh! Today is ${today.getFullYear()}-${fulldate}<br> It's your birthday.`
    
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
                     days is left for your birthday!` }
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

birthdayWisher();


function randomNum(num){
    let random = Math.floor(Math.random()*num);
    return random;
}

function confet(){
    let ribbons = ["blue","green","yellow","red","purple","cyan","burlywood","pink","orange","darkmagenta"]
    let topos = 0;
    let xpos = 0;
    
    for(let i = 0; i<300;i++){
        let divs = document.createElement("div");
        let parent = $("body");
        parent[0].appendChild(divs);
        let random = randomNum(10);
        divs.style = `background-color:${ribbons[random]}`;
        divs.style.top = `${topos}px`;

        if(i<100){
            divs.setAttribute("class","con")
           divs.style.left = `${xpos}px`
        }else if(i<200 && i>100){
            divs.setAttribute("class","con3");
           divs.style.left = `${xpos}px`
        }else{
        divs.setAttribute("class","con2")
        divs.style.right = `${xpos}px`
        
        }
        topos = randomNum(665);
        xpos = randomNum(1600);
    }
    
}




















