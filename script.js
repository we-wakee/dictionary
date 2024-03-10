const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const btn=document.getElementById('search-btn');
const result=document.getElementById('result');


// btn.addEventListener("click",()=>{
//     let inputword=document.getElementById('inp-word').value;
//     console.log(inputword);

//     fetch(`${url}${inputword}`)
//     .then((response)=>response.json())
//     .then((data)=>{
//         console.log(data);
//         result.innerHTML=`<div class="word">
//         <h3>${inputword}</h3>
        
//     </div>
//     <div class="details">
//         <p>${data[0].meanings[0].partOfSpeech}</p>
//         <p>${data[0].phonetics[1].text}</p> 
//     </div>

//     <p class="word-meaning">
//         ${data[0].meanings[0].definitions[0].definition} 
//     </p>

//     <p class="word-ex">${data[0].meanings[0].synonyms[0].synonyms} </p>`

//     })

// })


btn.addEventListener("click", async () => {
    
let inputword = document.getElementById('inp-word').value;
    console.log(inputword);

    try {
        const response = await fetch(`${url}${inputword}`);
        const data = await response.json();
        
        console.log(data);
        result.innerHTML = `<div class="word">
            <h3>${inputword}</h3>
        </div>
        <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
        </div>
        <p class="word-meaning">
            ${data[0].meanings[0].definitions[0].definition} 
                 <p>${data[0].phonetics.text}</p> 
        </p>
        <p class="word-ex">${data[0].meanings[0].synonyms[0]}  , 
                    ${data[0].meanings[0].synonyms[1]}</p>`;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
