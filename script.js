const result=()=>{
    let love1= firstInput.value
    let love2= secondInput.value
    firstInput.value = ''
     secondInput.value= ''
    
     if (love1 == "" && love2 == ""){
        showErr.innerHTML = `<p style="color: red;">sorry you have to input</p>`
     }else{
        showErr.innerHTML = ""
         disp.innerHTML = ''
         let lover1= Math.random()*100;
         let lover2 = `${Math.round(lover1)}`
         console.log(lover2);
        //  disp.innerHTML += `
        //  <h1>${love1} & ${love2} match is ${lover2}%</h1>
        //  `

         if(lover2 < 50){
             messa.innerHTML +=`
             <h1 style="color: white; ">${love1} & ${love2} is ${lover2}% sorry bro</h1>
             `
         }else if (lover2 >= 50){
            messa.innerHTML +=`
            <h1 style="color: white;">${love1} & ${love2} is ${lover2}% match up</h1>
            `
         }
     }
    

}
// const result = () =>{
//     let lover1 = firstInput.value
//     let lover2 = secondInput.value
//     let randio = Math.random()*100
//     let rounding = Math.round(randio)
//     disp.innerHTML = `${lover1} and ${lover2} : ${rounding}`
    
// }