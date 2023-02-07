
console.log("Hello from the popup!")

document.getElementById('btn').addEventListener('click', () => {
    chrome.runtime.sendMessage( { text: "doing our thing!", command: 'GET' })
    // get_database_elements('books')
});

// chrome.tabs.query({
//     active: true, 
//     currentWindow: true
// }, (tabs) => {
//     chrome.tabs.sendMessage(
//         tabs[0]?.id, 
//         {text: "Popup"}
//     )
// })

// chrome.runtime.onMessage.addListener( (msg) => {
//     document.body.innerHTML += `<div>${msg.text}</div>`
// })