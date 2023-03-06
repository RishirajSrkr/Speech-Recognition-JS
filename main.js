const texts = document.querySelector(".texts");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//creating instance
const recognition = new window.SpeechRecognition();
//if we set true, it will give us the result instantly when we speak
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) =>{
    // returns a string containing the transcript of the recognized word(s).
    const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    p.innerText = text;
    texts.appendChild(p);

    if(e.results[0].isFinal){
        if(text.includes('hello') || text.includes('hi') || text.includes('hey'))
        {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = "Hi!";
            texts.appendChild(p);
        }

        if(text.includes("how are you"))
        {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = "I am good!"
            texts.appendChild(p);
        }

        if(text.includes("open YouTube") || text.includes("YouTube Open"))
        {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = "Opening YouTube"
            texts.appendChild(p);
            window.open('https://www.youtube.com/');
        }


    
        p = document.createElement('p');
    }
    console.log(text);
})

recognition.addEventListener('end', () => {
    recognition.start();
})

recognition.start();