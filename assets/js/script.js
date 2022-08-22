// let info = document.querySelector('.info');
// let og = document.getElementById("og");
// let bbq = document.getElementById("bbq");
// let cheese = document.getElementById("cheese");
// let chili = document.getElementById("chili");
// let rosemary = document.getElementById("rosemary");

// img.onmouseover = () => {
//     img.style.display = 'inline';
    
// }

function change(x) {
    let k = 0;
    const array = ['og','bbq','rosemary','chili','cheese'];
    for (i=0;i<array.length; i++) {
        if (x == array[i]) {
            k = i;
            break;
        }
    }
    var target = document.getElementById(x);
    var info = document.querySelectorAll('.info')[k];
    var imagecropper = document.querySelectorAll('.imagecropper')[k];

    // changing div elements
    info.style.display = 'inline';
    target.style.display = 'none';
    imagecropper.style.background = '#475b44';
    imagecropper.style.display = 'flex';
    imagecropper.style.justifyContent = 'center';
    imagecropper.style.alignItems = 'center';
    
}

function unchange(x) {
    let k = 0;
    const array = ['og','bbq','rosemary','chili','cheese'];
    for (i=0;i<array.length; i++) {
        if (x == array[i]) {
            k = i;
            break;
        }
    }
    var target = document.getElementById(x);
    var info = document.querySelectorAll('.info')[k];
    var imagecropper = document.querySelectorAll('.imagecropper')[k];

    // changing div elements
    info.style.display = 'none';
    target.style.display = 'inline';
    imagecropepr.style.background = 'none';
    imagecropper.style.display = 'flex';
    imagecropper.style.justifyContent = 'none';
    imagecropper.style.alignItems = 'none';
}