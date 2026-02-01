async function timeout(){
    let abort = new AbortController()
    let signal = abort.signal
    let timeoutId = ()=>setTimeout(()=>abort.abort(),5000)
    let response = await fetch(URL,{signal});
    clearInterval(timeoutId)
    console.log(response)
    
}