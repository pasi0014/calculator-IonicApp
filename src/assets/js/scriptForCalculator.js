const { connectableObservableDescriptor } = require("rxjs/internal/observable/ConnectableObservable");

const valueForInput100 = document.querySelector('#input-100');
const valueForInput50 = document.querySelector('#input-50');
const valueForInput20 = document.querySelector('#input-20');
const valueForInput10 = document.querySelector('#input-10');
const valueForInput5 = document.querySelector('#input-5');
const valueForInput2 = document.querySelector('#input-2');
const valueForInput1 = document.querySelector('#input-1');
const valueForInput025 = document.querySelector('#input-025');
const valueForInput010 = document.querySelector('#input-010');
const valueForInput005 = document.querySelector('#input-005');

const confirmBtn = document.querySelector('#proceed');

confirmBtn.addEventListener('click', () =>{

    let input100 = valueForInput100.value;
    console.log(input100);
});