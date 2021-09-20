// Getting referrals.
const clearBtn  = document.querySelector('#clear-btn');
const frame     = document.querySelector('.main-container-frame');
const year      = document.querySelector('#year');

let array = [
    '','',
    '','','','','','','','','',
    '','','','','','','','','','','',
    '','','','','','','','','','','',
    '','','','','','','','','','','',
    '','','','','','','','','','','',
    '','','','','','','','','','','',
    '','','','','','','','','','','',
    '','','','','','','','','','','',
    '','','','','','','','','','','',
    '','','','','','','',
    '','',
];

// Year updating.
function timeUpdate() {
    let date = new Date();
    year.innerHTML = date.getFullYear();
}

// Drawing board.
function createFrames() {
    for (let i = 0; i < array.length; i++) {
        let frameDivs = document.createElement('section');
        frameDivs.classList.add('main-container-frame__field');
        frame.appendChild(frameDivs);

            // Painting.
            frameDivs.addEventListener('mouseover', () => {
                frameDivs.style.backgroundColor = 'black';

                // Clear.
                clearBtn.addEventListener('click', () => {
                    frameDivs.style.backgroundColor = '#f0808062';
                });
            });
    }
}

// Program startup.
createFrames();
timeUpdate();