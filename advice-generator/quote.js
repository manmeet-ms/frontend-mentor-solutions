let id = document.querySelector('.adviceId')
let advice = document.querySelector('.advice')


let getAdvice =()=>{fetch('https://api.adviceslip.com/advice') // Replace with the URL of the webpage you want to fetch
    .then(response => response.json())
    .then(htmlContent => {
        console.log("html", htmlContent);
        obj2 = htmlContent

        id.innerHTML = `ADVICE #${obj2["slip"]["id"]}`
        advice.innerHTML = "\"" + obj2["slip"]["advice"] + "\""
        
    })
    .catch(error => {
        log=error
        console.error('ERROR:', error);
        id.innerHTML = "ERROR x_x"
        advice.innerHTML = log
    });}
