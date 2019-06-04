let UIController = (() => {
    // ALL DOMData
    const DOMData = {
        displayTop: document.querySelector('.display_top'), displayBottom: document.querySelector('.display_bottom'),
        on: document.querySelector('.on'), equal: document.querySelector('.equal'),
        shift: document.querySelector('.shift'), circleShift: document.querySelector('.circle_shift'),
        alpha: document.querySelector('.alpha'), circleAlpha: document.querySelector('.circle_alpha'),
        sqrt: document.querySelector('.sqrt'), xInverse: document.querySelector('.x_inverse'),
        xSquare: document.querySelector('.x_square'), xCube: document.querySelector('.x_cube'),
        upArrow: document.querySelector('.up_arrow'),
        log: document.querySelector('.log'), ln: document.querySelector('.ln'),
        sin: document.querySelector('.sin'), cos: document.querySelector('.cos'), tan: document.querySelector('.tan'),
        allClear: document.querySelector('.all_clear'), delete: document.querySelector('.delete'),
        addition: document.querySelector('.addition'), subtraction: document.querySelector('.subtraction'),
        multiply: document.querySelector('.multiply'), divide: document.querySelector('.divide'),
        point: document.querySelector('.point'), exp: document.querySelector('.exp'),
        shiftCount: 0, alphaCount: 0
    };

    // ALL VALUES OF [DISPLAY, shiftDisplay, alphaDisplay, CLASSNAME, ORG, SHIFT, ALPHA]
    const dataContent = [
        [null, null, null, 'shift', 'Shift'],
        [null, null, null, 'alpha', 'Alpha'],
        [null, null, null, 'mode', 'Mode', 'CLR'],
        [null, null, null, 'on', 'On'],
        ['⁻¹', '!', null, 'x_inverse', 'x<sup>-1</sup>', 'x!'],
        [null, null, null, 'combinations', 'nCr', 'nPr'],
        [null, null, null, 'pol', 'Pol(', 'Rec(', ':'],
        ['³', '³√', null, 'x_cube', 'x<sup>3</sup>', '<sup>3</sup>√'],
        [null, null, null, 'abc', 'a b/c', 'd/c'],
        ['√', null, null, 'sqrt', '√'],
        ['²', null, null, 'x_square', 'x<sup>2</sup>'],
        ['^', 'ˣ√', null, 'up_arrow', '^', '<sup>x</sup>√'],
        ['log ', '₁₀', null, 'log', 'log', '10<sup>x</sup>'],
        ['ln ', 'ₑ', 'e', 'ln', 'ln', 'e<sup>x</sup>', 'e'],
        [null, null, null, 'bracket_minus', '(-)', null, 'A'],
        [null, null, null, 'degree', '. , , ,', '<-', 'B'],
        [null, null, null, 'hyp', 'hyp', null, 'C'],
        ['sin ', 'sin⁻¹', null, 'sin', 'sin', 'sin<sup>-1</sup>', 'D'],
        ['cos ', 'cos⁻¹', null, 'cos', 'cos', 'cos<sup>-1</sup>', 'E'],
        ['tan ', 'tan⁻¹', null, 'tan', 'tan', 'tan<sup>-1</sup>', 'F'],
        [null, null, null, 'rcl', 'RCL', 'STO'],
        [null, null, null, 'eng', 'ENG', '<-'],
        ['( ', null, null, 'left_bracket', '('],
        [' )', null, null, 'right_bracket', ')', null, 'X'],
        [null, null, null, 'coma', ',', ';', 'Y'],
        [null, null, null, 'm_plus', 'M+', 'M-', 'M'],
        ['7', null, null, 'seven', '7'],
        ['8', null, null, 'eight', '8'],
        ['9', null, null, 'nine', '9'],
        [null, null, null, 'delete', 'DEL', 'INS'],
        [null, null, null, 'all_clear', 'AC', 'OFF'],
        ['4', null, null, 'four', '4'],
        ['5', null, null, 'five', '5'],
        ['6', null, null, 'six', '6'],
        ['*', null, null, 'multiply', '×'],
        ['/', null, null, 'divide', '÷'],
        ['1', null, null, 'one', '1', 'S-SUM'],
        ['2', null, null, 'two', '2', 'S-VAR'],
        ['3', null, null, 'three', '3'],
        ['+', null, null, 'addition', '+'],
        ['-', null, null, 'subtraction', '-'],
        ['0', null, null, 'zero', '0', 'Rnd'],
        ['.', 'Ran#', null, 'point', '.', 'Ran#'],
        ['E', 'π', null, 'exp', 'EXP', 'π'],
        [null, null, null, 'answer', 'Ans', 'DRG>'],
        [null, '%', null, 'equal', '=', '%']
    ];

    // DISABLED METHOD FOR [ORG, SHIFT, ALPHA]
    const disabledData = [
        [1], [1], [0], [1],
        [1], [0], [0], [1],
        [0], [1], [1], [1, 0, 1], [1], [1],
        [0], [0], [0], [1, 1, 0], [1, 1, 0], [1, 1, 0],
        [0], [0], [1], [1, 1, 0], [0], [0],
        [1], [1], [1], [1, 0, 1], [1],
        [1], [1], [1], [1], [1],
        [1, 0, 1], [1, 0, 1], [1], [1], [1],
        [1, 0, 1], [1], [1], [0], [1]
    ];

    // RETURN OF UIController
    return {
        getDOMData: () => DOMData,
        getDataContent: dataContent,
        getDisabledData: disabledData
    }
})();

let updateController = (ui => {
    const updateDOM = ui.getDOMData();
    let selectAllButton = document.querySelectorAll('button');

    // CHANGING CONTENT OF CALC WHEN PRESS IN SHIFT
    let changeToShift = (cur, getDataORG, getDataClassName, getShiftData, knowDisabledForORG, knowDisabledForShift) => {
        // IF DATA IS UNDEFINED OR NULL, SECOND VALUE = FIRST VALUE
        if (getShiftData === undefined || getShiftData === null) getShiftData = getDataORG;

        if (knowDisabledForShift === undefined || knowDisabledForShift === null) knowDisabledForShift = knowDisabledForORG;

        // CHECK FOR shiftCount IF IT IS 0 THEN SWAP BUT IF ITS 1, ITS BACK TO ORG CONTENT
        if (cur.className === getDataClassName) {
            if (updateDOM.shiftCount === 0) {
                document.querySelector('.' + getDataClassName).innerHTML = getShiftData;
                updateDOM.circleShift.style.backgroundColor = 'yellow';
                updateDOM.circleAlpha.style.backgroundColor = 'transparent';
            } else {
                document.querySelector('.' + getDataClassName).innerHTML = getDataORG;
                updateDOM.circleShift.style.backgroundColor = 'transparent';
                updateDOM.circleAlpha.style.backgroundColor = 'transparent';
            }

            if (updateDOM.shiftCount === 0 && knowDisabledForShift === 0) {
                // document.querySelector('.' + cur.className).removeAttribute('disabled');
                document.querySelector('.' + cur.className).setAttribute('disabled', '');
                console.log('shift if dis', cur.className);
            } else if (knowDisabledForShift === 0 && knowDisabledForORG === 1) {
                document.querySelector('.' + cur.className).removeAttribute('disabled');
                console.log('shift else if remove', cur.className);
            } else if (updateDOM.shiftCount === 0 && knowDisabledForShift === 1) {
                document.querySelector('.' + cur.className).removeAttribute('disabled');
                console.log('shift else', cur.className);
            }
        }
    };

    // CHANGING CONTENT OF CALC WHEN PRESS IN ALPHA
    let changeToAlpha = (cur, getDataORG, getDataClassName, getAlphaData, knowDisabledForORG, knowDisabledForAlpha) => {
        // IF DATA IS UNDEFINED OR NULL, SECOND VALUE = FIRST VALUE
        if (getAlphaData === undefined || getAlphaData === null) getAlphaData = getDataORG;

        if (knowDisabledForAlpha === undefined || knowDisabledForAlpha === null) knowDisabledForAlpha = knowDisabledForORG;

        // CHECK FOR alphaCount IF IT IS 0 THEN SWAP BUT IF ITS 1, ITS BACK TO ORG CONTENT
        if (cur.className === getDataClassName) {
            if (updateDOM.alphaCount === 0) {
                document.querySelector('.' + getDataClassName).innerHTML = getAlphaData;
                updateDOM.circleAlpha.style.backgroundColor = 'yellow';
                updateDOM.circleShift.style.backgroundColor = 'transparent';
            } else {
                document.querySelector('.' + getDataClassName).innerHTML = getDataORG;
                updateDOM.circleAlpha.style.backgroundColor = 'transparent';
                updateDOM.circleShift.style.backgroundColor = 'transparent';
            }

            if (updateDOM.alphaCount === 0 && knowDisabledForAlpha === 0) {
                document.querySelector('.' + cur.className).setAttribute('disabled', '');
                console.log('alpha if dis', cur.className);
            } else if (knowDisabledForAlpha === 0 && knowDisabledForORG === 1) {
                document.querySelector('.' + cur.className).removeAttribute('disabled');
                console.log('alpha else if remove', cur.className);
            } else if (knowDisabledForAlpha === 1) {
                document.querySelector('.' + cur.className).setAttribute('disabled', '');
                console.log('alpha else', cur.className);
            }
        }
    };

    // CHANGING VALUE OF shiftCount WHEN PRESS IN SHIFT
    let changeValueOfShift = () => {
        if (updateDOM.shiftCount === 0 && updateDOM.alphaCount === 0) {
            updateDOM.shiftCount = 1;
            // console.log('shift 00');
        } else if (updateDOM.shiftCount === 1 && updateDOM.alphaCount === 0) {
            updateDOM.shiftCount = 0;
            // console.log('shift 10');
        } else if (updateDOM.shiftCount === 0 && updateDOM.alphaCount === 1) {
            updateDOM.shiftCount = 1;
            updateDOM.alphaCount = 0;
            // console.log('shift 01');
        }
    };

    // CHANGING VALUE OF alphaCount WHEN PRESS IN ALPHA
    let changeValueOfAlpha = () => {
        if (updateDOM.alphaCount === 0 && updateDOM.shiftCount === 0) {
            updateDOM.alphaCount = 1;
            // console.log('alpha 00');
        } else if (updateDOM.alphaCount === 1 && updateDOM.shiftCount === 0) {
            updateDOM.alphaCount = 0;
            // console.log('alpha 10');
        } else if (updateDOM.alphaCount === 0 && updateDOM.shiftCount === 1) {
            updateDOM.alphaCount = 1;
            updateDOM.shiftCount = 0;
            // console.log('alpha 01');
        }
    };

    // MAIN FUNCTION OF SHIFT AND ALPHA LOGIC
    let swapOfShiftAndAlpha = (value) => {
        // FOREACH FOR GET LIST OF IT
        selectAllButton.forEach((cur, i) => {
            // FETCH DATA FROM UIController
            let getDataClassName = ui.getDataContent[i][3];
            let getDataORG = ui.getDataContent[i][4];
            let getShiftData = ui.getDataContent[i][5];
            let getAlphaData = ui.getDataContent[i][6];

            let knowDisabledForORG = ui.getDisabledData[i][0];
            let knowDisabledForShift = ui.getDisabledData[i][1];
            let knowDisabledForAlpha = ui.getDisabledData[i][2];

            if (value === 'shift') {
                changeToShift(cur, getDataORG, getDataClassName, getShiftData, knowDisabledForORG, knowDisabledForShift);
            } else {
                changeToAlpha(cur, getDataORG, getDataClassName, getAlphaData, knowDisabledForORG, knowDisabledForAlpha);
            }
        });

        // IF ELSE CONDITION FOR CHANGE 0 AND 1
        if (value === 'shift') {
            changeValueOfShift();
        } else {
            changeValueOfAlpha();
        }
    };

    // FIRED WHEN YOU CLICK ON "ON"
    let clickOnStart = () => {
        allClear();
        updateDOM.displayTop.style.visibility = 'visible';
        updateDOM.displayBottom.style.visibility = 'visible';
    };

    // FIRED WHEN YOU CLICK ON "AC"
    let allClear = () => {
        updateDOM.displayTop.value = '';
        updateDOM.displayBottom.value = '0';
    };

    // FIRED WHEN YOU CLICK ON "DEL"
    let clickOnDelete = () => {
        updateDOM.displayTop.value = updateDOM.displayTop.value.slice(0, -1);
    };

    // SWAP CONTENT WHEN CLICK ON ANY BUTTON EXCEPT SHIFT AND ALPHA
    let swapWhenClickOnButton = (current) => {
        if (current.target.className !== 'shift' && current.target.className !== 'alpha') {
            if (updateDOM.shiftCount === 1) {
                swapOfShiftAndAlpha('shift');
            } else if (updateDOM.alphaCount === 1) {
                swapOfShiftAndAlpha('alpha');
            }
        }
    };

    // GET VALUE OF BUTTON AND DISPLAY IN INPUT
    let getValueOfButton = (current) => {
        for (let i = 0; i <= selectAllButton.length - 1; i++) {
            let getDisplayORG = ui.getDataContent[i][0];
            let getDisplayOfShift = ui.getDataContent[i][1];
            let getDisplayOfAlpha = ui.getDataContent[i][2];
            let getDataClassName = ui.getDataContent[i][3];
            let classVar = current.target.className;

            if (classVar === getDataClassName) {
                if (getDisplayORG !== null && (updateDOM.shiftCount === 0 && updateDOM.alphaCount === 0)) {
                    updateDOM.displayTop.value += getDisplayORG;
                    // console.log('press if');
                }
                if (getDisplayOfShift !== null && updateDOM.shiftCount === 1) {
                    updateDOM.displayTop.value += getDisplayOfShift;
                    // console.log('press shift');
                }
                if (getDisplayOfAlpha !== null && updateDOM.alphaCount === 1) {
                    updateDOM.displayTop.value += getDisplayOfAlpha;
                    // console.log('press alpha');
                }
            }
        }
    };

    let disabledWhenLoad = () => {

        selectAllButton.forEach((cur, i) => {
            let knowDisabledForORG = ui.getDisabledData[i][0];

            if (knowDisabledForORG === 0) {
                document.querySelector('.' + cur.className).setAttribute('disabled', '');
            }
        });
    };

    // FIRE WHEN CLICK ON BUTTON
    let clickOnButton = () => {
        // FIRE WHEN CLICK ON SHIFT
        updateDOM.shift.addEventListener('click', () => {
            swapOfShiftAndAlpha('shift');
            console.log('shift', updateDOM.shiftCount, 'alpha', updateDOM.alphaCount);
        });

        // FIRE WHEN CLICK ON ALPHA
        updateDOM.alpha.addEventListener('click', () => {
            swapOfShiftAndAlpha('alpha');
            console.log('shift', updateDOM.shiftCount, 'alpha', updateDOM.alphaCount);
        });

        // FIRED WHEN YOU CLICK ON "ON"
        updateDOM.on.addEventListener('click', () => {
            clickOnStart();
        });

        // FIRED WHEN YOU CLICK ON "AC"
        updateDOM.allClear.addEventListener('click', () => {
            allClear();
        });

        // FIRED WHEN YOU CLICK ON "DEL"
        updateDOM.delete.addEventListener('click', () => {
            clickOnDelete();
        });

        // FETCH ALL DATA FROM BUTTONS AND MAIN FUNCTION OF SWAP VALUE
        selectAllButton.forEach(cur => {
            // CLICK ON BUTTON
            cur.addEventListener('click', current => {
                getValueOfButton(current);
                swapWhenClickOnButton(current);
            });
        });
    };

    // RETURN OF updateController
    return {
        getClick: () => clickOnButton(),
        disabledData: () => disabledWhenLoad()
    }

})(UIController);

let controller = ((ui, update) => {

    // RETURN OF controller
    return {
        init: () => {
            update.getClick();
            update.disabledData();
        }
    }
})(UIController, updateController);

controller.init();
