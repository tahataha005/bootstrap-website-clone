window.onload = () => {

    const p1 = document.getElementById("p1")
    const p2 = document.getElementById("p2")
    const p3 = document.getElementById("p3")
    const p4 = document.getElementById("p4")
    const p5 = document.getElementById("p5")
    const p6 = document.getElementById("p6")
    const delHeader = document.getElementById("deleteHeader")
    const header = document.getElementById("header")
    const name = document.getElementById("fullName")
    const email = document.getElementById("emailAdress")
    const phone = document.getElementById("phoneNumber")
    const message = document.getElementById("message")
    const sendButton = document.getElementById("sendButton")
    const errorBox = document.getElementById("errorBox")
    const sentBox = document.getElementById("sentBox")


    p1.addEventListener("mouseenter",() =>{
        p1.style.opacity = '20%'
    })
    p1.addEventListener("mouseleave",() =>{
        p1.style.opacity = '100%'
    })


    p2.addEventListener("mouseenter",() =>{
        p2.style.opacity = '20%'
    })
    p2.addEventListener("mouseleave",() =>{
        p2.style.opacity = '100%'
    })


    p3.addEventListener("mouseenter",() =>{
        p3.style.opacity = '20%'
    })
    p3.addEventListener("mouseleave",() =>{
        p3.style.opacity = '100%'
    })


    p4.addEventListener("mouseenter",() =>{
        p4.style.opacity = '20%'
    })
    p4.addEventListener("mouseleave",() =>{
        p4.style.opacity = '100%'
    })


    p5.addEventListener("mouseenter",() =>{
        p5.style.opacity = '20%'
    })
    p5.addEventListener("mouseleave",() =>{
        p5.style.opacity = '100%'
    })


    p6.addEventListener("mouseenter",() =>{
        p6.style.opacity = '20%'
    })
    p6.addEventListener("mouseleave",() =>{
        p6.style.opacity = '100%'
    })


    delHeader.addEventListener("click",() =>{
        header.remove()

    })


    sendButton.addEventListener("click",() => {
        // errorBox.innerHTML = ""
        // if(fullName.value.length < 3){

        //     errorBox.innerHTML += "<p>Invalid Name(Minimum 3 characters)</p>"
        // }
        // if("@" in email){
        //     let emailfeilds = email.value.split("@")

        //     if(emailfeilds[0].length < 3 || emailfeilds[1].length < 5){

        //         errorBox.innerHTML += "<p>Invalid email</p>"
        //     }}

        // else{
        //     errorBox.append.innerHTML += "<p>Invalid email</p>"
        // }

        // if("+961" in phoneNumber){
        //     let p = phoneNumber.value.split("+961")
        //     phone = p[1]

        //     if(phone[1] == 3){
        //         if (phone.length != 7){
        //             errorBox.append.innerHTML += "<p>Invalid phone number</p>"
        //         }
        //     }
        //     else if(phone.length != 8) {
        //         errorBox.append.innerHTML += "<p>Invalid phone number</p>"
        //     }
        // }
        // else {
        //     errorBox.append.innerHTML += "<p>Invalid phone number</p>"
        // }

        // if (message.value.length<100){
        //     errorBox.append.innerHTML += "<p>Invalid message</p>"
        // }
        if (name.value.length == 0 || email.value.length == 0 || phone.value.length == 0 || message.value.length == 0){
            errorBox.innerHTML = "<p>Please Enter ALL Feilds</p>"
        }
        else{
            fetch("http://localhost/backend/add_message.php",{
                method:"POST",
                body: new URLSearchParams({"full_name":name.value,"email":email.value,"phone_number":phone.value,"message":message.value})
            })
            .then(response => response.json())
            .then(data => 
                sentBox.innerHTML = `<p>Sent Successfully</p>`)
            }
    })

}