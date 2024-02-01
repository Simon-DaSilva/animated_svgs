console.log("JS file connected");

const vectorGraphic1 = document.querySelector('#blade');

function logThisId() {
    console.log(this);
    console.log('clicked on this element', this.id);
}

vectorGraphic1.addEventListener('click', logThisId);

const vectorGraphic2 = document.querySelector('#bolt');

function logThisId() {
    console.log(this);
    console.log('clicked on this element', this.id);
}

vectorGraphic2.addEventListener('click', logThisId);

const vectorGraphic3 = document.querySelector('#cup');

function logThisId() {
    console.log(this);
    console.log('clicked on this element', this.id);
}

vectorGraphic3.addEventListener('click', logThisId);

const vectorGraphic4 = document.querySelector('#ball');

function logThisId() {
    console.log(this);
    console.log('clicked on this element', this.id);
}

vectorGraphic4.addEventListener('click', logThisId);


const vectorGraphic5 = document.querySelector('#charge');

function logThisId() {
    console.log(this);
    console.log('clicked on this element', this.id);
}

vectorGraphic5.addEventListener('click', logThisId);

const vectorGraphic6 = document.querySelector('#face');

function logThisId() {
    console.log(this);
    console.log('clicked on this element', this.id);
}

vectorGraphic6.addEventListener('click', logThisId);
