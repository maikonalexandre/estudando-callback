//const $button = document.querySelector('button');

/*$button.addEventListener('click', ()=>{
 console.log("button foi clicado");
});*/

//==================================================>>>>

/*const handleClick = ()=>{
console.log("Button foi clicado");
}
$button.addEventListener('click', handleClick);*/

//=====================================================>>>>

/*function newButton(text){
    
    const $body = document.querySelector('body');
    const $button = document.createElement("button");
    $button.textContent = text;

    $body.insertAdjacentElement('beforeend', $button);

    return $button;
}
const loguin = newButton("Loguin");
const signup = newButton("Signup");

loguin.style.cssText=`
color: red;
background-color:blue;
`;

console.log(loguin, signup);
*/

//============================================================>>>

function newButton(text, callback){
    
    const $body = document.querySelector('body');
    const $button = document.createElement("button");
    $button.textContent = text;

    callback($button);

    $body.insertAdjacentElement('beforeend', $button);

    //return $button
}
//=========================================================>>>
/*const ola = () => {
    console.log("ola");
}*/
const ola = function ola(){
    console.log("ola");
};
newButton("Loguin", (button)=>{
button.style.cssText=`
background-color:red;
`;
button.addEventListener("click", ola);
});
//=========================================================>>>
newButton("Signup", (button)=>{
    button.style.cssText=`
    background-color:blue;
    color:white;
    `;
button.addEventListener("click", ()=>{
    console.log("ola - signup");
})
});
//============================================================>>>