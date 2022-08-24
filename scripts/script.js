function handleChange(e) {

    const { id } = e.target;
    const value = +e.target.value;

    let i;

    function applyValues () {
        
        if (id === 'top-left') {
            i = 0;
            allBorderValues.splice(i, 1, value);
        }
        
        else if (id === 'top-right') {
            i = 1;
            allBorderValues.splice(i, 1, value);
        }
        
        else if (id === 'bottom-right') {
            i = 2;
            allBorderValues.splice(i, 1, value);
        }
        
        else if (id === 'bottom-left') {
            i = 3;
            allBorderValues.splice(i, 1, value);
        }
        
        for (let j = allBorderValues.length-1; j >= 0; j--) {
            if (allBorderValues[j] > 0) {
                let k = 1;
                if (allBorderValues[j-k] == '') {
                    allBorderValues[j-k] = 0;
                }
            }
            console.log (allBorderValues)
        } 
        
        if (value > 0) {
            allBorderValues[i] += 'px';
        }

        const cssStyle = allBorderValues.join(' ');
        console.log(cssStyle);
        previewSqr.style.borderRadius = cssStyle;
        return cssStyle;
    }

    resultingCss.innerHTML = applyValues();
}

const topLeft = document.getElementById('top-left');
const topRight = document.getElementById('top-right');
const bottomLeft = document.getElementById('bottom-left');
const bottomRight = document.getElementById('bottom-right');

const previewSqr = document.getElementById('preview-sqr');
const resultingCss = document.querySelector('.resulting-css');
const allBorderValues = [0, 0, 0, 0];

const inputs = document.querySelectorAll('input');
const events = ['change', 'keyup'];

inputs.forEach(element => {
    events.forEach(event => {
        element.addEventListener(event, handleChange);
    });
});
