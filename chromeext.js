
const inputBtn = document.getElementById('inpt-btn');

const ulEl = document.querySelector('#unord')

let myLeads = [];

const inputEl = document.querySelector('#input-el')

const clearField = document.querySelector('#clear-input')

const saveTab = document.querySelector('#save-tab')

saveTab.addEventListener('click', function(){
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myleads", JSON.stringify(myLeads))
    renderOut(myLeads)
})
    
   
})
inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    inputEl.value = '';
localStorage.setItem("myleads", JSON.stringify(myLeads))

    renderOut(myLeads)

    
})

const localLeads = JSON.parse(localStorage.getItem("myleads"))
    if (localLeads) {
        myLeads = localLeads
        renderOut(myLeads);
    }
clearField.addEventListener('dblclick', function() {
    ulEl.innerHTML = ''
    myLeads = [];
    localStorage.clear()
})

function renderOut(leads) {
    let listItems = ''
for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li> 
                <a href="${leads[i]}" target="_blank">- ${leads[i]}</a> 
        </li>
                `   


}
ulEl.innerHTML = listItems
 
}

