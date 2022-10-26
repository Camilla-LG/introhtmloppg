function ChangeToNone(){
    document.getElementById("allCards").classList=[];
}

function ChangeToVertical(){
    document.getElementById("allCards").classList=[];
    document.getElementById("allCards").classList.add('vertical');
}

function ChangeToHorisontal(){
    document.getElementById("allCards").classList=[];
    document.getElementById("allCards").classList.add('horisontal');
}

function ChangeToGrid(){
    document.getElementById("allCards").classList=[];
    document.getElementById("allCards").classList.add('grid');
}

function show1(){
    blankAll();
    document.getElementById('TagGreen').innerHTML= /*HTML*/`

    <div class="InnerCard">
    <div>
        De to viktigste verktøyene vi skal bruke er disse:
        <ul>
            <li>
                Koderedigeringsprogrammet
                <a href="https://code.visualstudio.com/">Visual Studio Code</a>
                Vi skal bruke noen <i>extensions</i>:
                <ul>
                    <li>JavaScript-booster</li>
                    <li>es6-string-html</li>
                    <li>live-server</li>
                    <li>live-share</li>
                </ul>
            </li>
            <li>Nettleseren
                <a href="https://www.google.com/intl/no/chrome/">Google Chrome</a>
            </li>

        </ul>
    </div>
    `;
}

function show2(){
    blankAll();
    document.getElementById('TagBlue').innerHTML= /*HTML*/`

    <div class="InnerCard">
        Vi bruker HTML til å definere et dokument.
        <ul>
            <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
            <li>Tagger for grunnleggende formatering av tekst</li>
            <li><kbd>&lt;div&gt;</kbd></li>
            <li><kbd>&lt;input type="text"&gt;</kbd></li>
            <li><kbd>&lt;button&gt;</kbd></li>
            <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML
                    Tutorial</a>
            </li>
            <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML
                    Reference</a>
            </li>
        </ul>
    </div>
    `;
}

function show3(){
    blankAll();
    document.getElementById('TagRed').innerHTML= /*HTML*/`

    <div class="InnerCard">
        Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og
        lignende.
        <ul>
            <li><kbd>background-color</kbd></li>
            <li><kbd>color</kbd></li>
            <li><kbd>padding</kbd></li>
            <li><kbd>margin</kbd></li>
            <li><kbd>border</kbd></li>
            <li><kbd>text-align</kbd></li>
            <li><kbd>font-size</kbd></li>
            <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a>
            </li>
            <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a>
            </li>
            <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS
                    Tutorial</a>
            </li>
            <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools
                    CSS Reference</a>
            </li>
        </ul>
    </div>
    `;
}

function show4(){
    blankAll();
    document.getElementById('TagYellow').innerHTML= /*HTML*/`

    <div class="InnerCard">
    Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære
    grunnleggende programmering
    ved
    å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
    <ul>
        <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller
            å følge kurset vårt på
            Moodle.</li>
        <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools
                JavaScript
                Reference</a></li>

    </ul>
    </div>
`;
}

function show5(){
    blankAll();
    document.getElementById('TagDark').innerHTML= /*HTML*/`

    <div class="InnerDark">
            <div id="FaceandButtons" class="inter">
            <button onclick="showHead4()">◀</button>
            <img src= "img/head1.png"/>
            <button onclick="showHead2()">▶</button>
            </div>
            <div id="BodyandButtons" class="inter">
            <button onclick="showBody1()">◀</button>
            <img src= "img/body2.png"/>
            <button onclick= "showBody3()">▶</button>
            </div>
            <div id="LegsandButtons" class="inter">
            <button onclick="showLegs4()">◀</button>
            <img src="img/legs1.png"/>
            <button onclick="showLegs2()">▶</button>
            </div>
        </div>
    </div>
    `;
}

function blankAll(){
    document.getElementById('TagGreen').innerHTML='';
    document.getElementById('TagBlue').innerHTML='';
    document.getElementById('TagRed').innerHTML='';
    document.getElementById('TagYellow').innerHTML='';
    document.getElementById('TagDark').innerHTML='';
}

showHead1
function showHead1(){
    document.getElementById('FaceandButtons').innerHTML= /*HTML*/`
        <button onclick="showHead4()">◀</button>
        <img src= "img/head1.png"/>
        <button onclick="showHead2()">▶</button>
        `;
}

function showHead2(){
    document.getElementById('FaceandButtons').innerHTML= /*HTML*/`
        <button onclick="showHead1()">◀</button>
        <img src= "img/head2.png"/>
        <button onclick= "showHead3()">▶</button>
        `;
}

function showHead3(){
    document.getElementById('FaceandButtons').innerHTML= /*HTML*/`
        <button onclick= "showHead2()">◀</button>
        <img src="img/head3.png"/>
        <button onclick= "showHead4()">▶</button>
        `;
}

function showHead4(){
    document.getElementById('FaceandButtons').innerHTML= /*HTML*/`
        <button onclick="showHead3()">◀</button>
        <img src="img/head4.png"/>
        <button onclick="showHead1()">▶</button>
        `;
}

showBody1
function showBody1(){
    document.getElementById('BodyandButtons').innerHTML= /*HTML*/`
        <button onclick="showBody4()">◀</button>
        <img src="img/body1.png"/>
        <button onclick="showBody2()">▶</button>
        `;
}

function showBody2(){
    document.getElementById('BodyandButtons').innerHTML= /*HTML*/`
        <button onclick="showBody1()">◀</button>
        <img src="img/body2.png"/>
        <button onclick="showBody3()">▶</button>
        `;
}

function showBody3(){
    document.getElementById('BodyandButtons').innerHTML= /*HTML*/`
        <button onclick="showBody2()">◀</button>
        <img src="img/body3.png"/>
        <button onclick="showBody4()">▶</button>
        `;
}

function showBody4(){
    document.getElementById('BodyandButtons').innerHTML= /*HTML*/`
        <button onclick="showBody3()">◀</button>
        <img src="img/body4.png"/>
        <button onclick="showBody1()">▶</button>
        `;
}

showLegs1
function showLegs1(){
    document.getElementById('LegsandButtons').innerHTML= /*HTML*/`
        <button onclick="showLegs4()">◀</button>
        <img src="img/legs1.png"/>
        <button onclick="showLegs2()">▶</button>
        `;
}

function showLegs2(){
    document.getElementById('LegsandButtons').innerHTML= /*HTML*/`
        <button onclick="showLegs1()">◀</button>
        <img src="img/legs2.png"/>
        <button onclick="showLegs3()">▶</button>
        `;
}

function showLegs3(){
    document.getElementById('LegsandButtons').innerHTML= /*HTML*/`
        <button onclick="showLegs2()">◀</button>
        <img src="img/legs3.png"/>
        <button onclick="showLegs4()">▶</button>
        `;
}

function showLegs4(){
    document.getElementById('LegsandButtons').innerHTML= /*HTML*/`
        <button onclick="showLegs3()">◀</button>
        <img src="img/legs4.png"/>
        <button onclick="showLegs1()">▶</button>
        `;
}