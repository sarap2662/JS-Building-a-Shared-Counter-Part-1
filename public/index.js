async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');

    let response = await fetch('http://localhost:9001/counter')
    let responseJSON = await response.json()
    console.log(responseJSON)
    let countValue = responseJSON.value;

   async function increment(){
        countValue++; 
    let incrementResponse = await fetch('http://localhost:9001/counter', {
        method: 'PATCH' ,
        headers: {
            'Content-Type' : 'application/json'
   },
   body: JSON.stringify({
    value: countValue
   })
})

   let incrementResponseJSON = await incrementResponse.json()

        countContainer.textContent = incrementResponseJSON.value;
    }

    async function decrement(){
        countValue--;
        let decrementResponse = await fetch('http://localhost:9001/counter', {
            method: 'PATCH' ,
            headers: {
                'Content-Type' : 'application/json'
       },
       body: JSON.stringify({
        value: countValue
       })
    })
    
       let decrementResponseJSON = await decrementResponse.json()

       countContainer.textContent = decrementResponseJSON.value;
    }


    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()