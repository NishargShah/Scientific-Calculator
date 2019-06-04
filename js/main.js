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
        ['(', null, null, 'left_bracket', '('],
        [')', null, null, 'right_bracket', ')', null, 'X'],
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

let shiftAlphaController = (ui => {
    let domData = ui.getDOMData();
    let selectAllButton = document.querySelectorAll('button');

    // DEFAULT DISABLED, ITS LOAD WHEN DOM IS READY
    let disabledWhenLoad = () => {
        selectAllButton.forEach((cur, i) => {
            let knowDisabledForORG = ui.getDisabledData[i][0];

            if (knowDisabledForORG === 0) {
                document.querySelector('.' + cur.className).setAttribute('disabled', '');
            }
        });
    };

    // CHECK FOR DISABLE WHEN PRESS SHIFT
    let shiftDisabled = (cur, knowDisabledForORG, knowDisabledForShift) => {
        if (knowDisabledForShift === 0 && domData.shiftCount === 0) {
            // document.querySelector('.' + cur.className).removeAttribute('disabled');
            document.querySelector('.' + cur.className).setAttribute('disabled', '');
            // console.log('shift if', cur.className);
        } else if (knowDisabledForShift === 0 && knowDisabledForORG === 1) {
            document.querySelector('.' + cur.className).removeAttribute('disabled');
            // console.log('shift elseif', cur.className);
        } else if (knowDisabledForShift === 1 && domData.shiftCount === 0) {
            document.querySelector('.' + cur.className).removeAttribute('disabled');
            // console.log('shift else', cur.className);
        }
    };

    // CHECK FOR DISABLE WHEN PRESS ALPHA
    let alphaDisabled = (cur, knowDisabledForORG, knowDisabledForAlpha) => {
        if (knowDisabledForAlpha === 0 && domData.alphaCount === 0) {
            document.querySelector('.' + cur.className).setAttribute('disabled', '');
            // console.log('alpha if', cur.className);
        } else if (knowDisabledForAlpha === 0 && knowDisabledForORG === 1) {
            document.querySelector('.' + cur.className).removeAttribute('disabled');
            // console.log('alpha elseif', cur.className);
        } else if (knowDisabledForAlpha === 1 && domData.alphaCount === 0) {
            document.querySelector('.' + cur.className).removeAttribute('disabled');
            // console.log('alpha else', cur.className);
        }
    };

    // CHANGING CONTENT OF CALC WHEN PRESS IN SHIFT
    let changeToShift = (cur, getDataORG, getDataClassName, getShiftData, knowDisabledForORG, knowDisabledForShift) => {
        // IF DATA IS UNDEFINED OR NULL, SECOND VALUE = FIRST VALUE IN dataContent ARRAY
        if (getShiftData === undefined || getShiftData === null) getShiftData = getDataORG;

        // IF DATA IS UNDEFINED OR NULL, SECOND VALUE = FIRST VALUE IN DISABLE ARRAY
        if (knowDisabledForShift === undefined || knowDisabledForShift === null) knowDisabledForShift = knowDisabledForORG;

        // CHECK FOR shiftCount IF IT IS 0 THEN SWAP BUT IF ITS 1, ITS BACK TO ORG CONTENT
        if (cur.className === getDataClassName) {
            if (domData.shiftCount === 0) {
                document.querySelector('.' + getDataClassName).innerHTML = getShiftData;
                domData.circleShift.style.backgroundColor = 'yellow';
                domData.circleAlpha.style.backgroundColor = 'transparent';
            } else {
                document.querySelector('.' + getDataClassName).innerHTML = getDataORG;
                domData.circleShift.style.backgroundColor = 'transparent';
                domData.circleAlpha.style.backgroundColor = 'transparent';
            }

            // CHECK FOR DISABLE WHEN PRESS SHIFT
            shiftDisabled(cur, knowDisabledForORG, knowDisabledForShift);
        }
    };

    // CHANGING CONTENT OF CALC WHEN PRESS IN ALPHA
    let changeToAlpha = (cur, getDataORG, getDataClassName, getAlphaData, knowDisabledForORG, knowDisabledForAlpha) => {
        // IF DATA IS UNDEFINED OR NULL, SECOND VALUE = FIRST VALUE IN dataContent ARRAY
        if (getAlphaData === undefined || getAlphaData === null) getAlphaData = getDataORG;

        // IF DATA IS UNDEFINED OR NULL, SECOND VALUE = FIRST VALUE IN DISABLE ARRAY
        if (knowDisabledForAlpha === undefined || knowDisabledForAlpha === null) knowDisabledForAlpha = knowDisabledForORG;

        // CHECK FOR alphaCount IF IT IS 0 THEN SWAP BUT IF ITS 1, ITS BACK TO ORG CONTENT
        if (cur.className === getDataClassName) {
            if (domData.alphaCount === 0) {
                document.querySelector('.' + getDataClassName).innerHTML = getAlphaData;
                domData.circleAlpha.style.backgroundColor = 'yellow';
                domData.circleShift.style.backgroundColor = 'transparent';
            } else {
                document.querySelector('.' + getDataClassName).innerHTML = getDataORG;
                domData.circleAlpha.style.backgroundColor = 'transparent';
                domData.circleShift.style.backgroundColor = 'transparent';
            }

            // CHECK FOR DISABLE WHEN PRESS ALPHA
            alphaDisabled(cur, knowDisabledForORG, knowDisabledForAlpha);
        }
    };

    // CHANGING VALUE OF shiftCount WHEN PRESS IN SHIFT
    let changeValueOfShift = () => {
        if (domData.shiftCount === 0 && domData.alphaCount === 0) {
            domData.shiftCount = 1;
            // console.log('shift 00');
        } else if (domData.shiftCount === 1 && domData.alphaCount === 0) {
            domData.shiftCount = 0;
            // console.log('shift 10');
        } else if (domData.shiftCount === 0 && domData.alphaCount === 1) {
            domData.shiftCount = 1;
            domData.alphaCount = 0;
            // console.log('shift 01');
        }
    };

    // CHANGING VALUE OF alphaCount WHEN PRESS IN ALPHA
    let changeValueOfAlpha = () => {
        if (domData.alphaCount === 0 && domData.shiftCount === 0) {
            domData.alphaCount = 1;
            // console.log('alpha 00');
        } else if (domData.alphaCount === 1 && domData.shiftCount === 0) {
            domData.alphaCount = 0;
            // console.log('alpha 10');
        } else if (domData.alphaCount === 0 && domData.shiftCount === 1) {
            domData.alphaCount = 1;
            domData.shiftCount = 0;
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

            // CHANGE THE CONTENT OF CALCULATOR
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

    // SWAP CONTENT WHEN CLICK ON ANY BUTTON EXCEPT SHIFT AND ALPHA
    let swapWhenClickOnButton = (current) => {
        if (current.target.className !== 'shift' && current.target.className !== 'alpha') {
            if (domData.shiftCount === 1) {
                swapOfShiftAndAlpha('shift');
            } else if (domData.alphaCount === 1) {
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
                if (getDisplayORG !== null && (domData.shiftCount === 0 && domData.alphaCount === 0)) {
                    domData.displayTop.value += getDisplayORG;
                    // console.log('press if');
                } else if (getDisplayOfShift !== null && domData.shiftCount === 1) {
                    domData.displayTop.value += getDisplayOfShift;
                    // console.log('press shift');
                } else if (getDisplayOfAlpha !== null && domData.alphaCount === 1) {
                    domData.displayTop.value += getDisplayOfAlpha;
                    // console.log('press alpha');
                }
            }
        }
    };

    // RETURN OF shiftAlphaController
    return {
        disabledData: () => disabledWhenLoad(),
        mainFunctionOfSA: (value) => swapOfShiftAndAlpha(value),
        swapValueOfButton: (current) => swapWhenClickOnButton(current),
        getValueOfButton: (current) => getValueOfButton(current)
    }
})(UIController);

let smallFunctionController = ((ui) => {
    const smallFDOM = ui.getDOMData();

    // FIRED WHEN YOU CLICK ON "ON" OR "OFF"
    let clickOnStartOrOff = (value) => {
        allClear();
        smallFDOM.displayTop.style.visibility = value;
        smallFDOM.displayBottom.style.visibility = value;
    };

    // FIRED WHEN YOU CLICK ON "AC"
    let allClear = () => {
        smallFDOM.displayTop.value = '';
        smallFDOM.displayBottom.value = '0';
    };

    // FIRED WHEN YOU CLICK ON "DEL"
    let clickOnDelete = () => {
        smallFDOM.displayTop.value = smallFDOM.displayTop.value.slice(0, -1);
    };

    // RETURN OF updateController
    return {
        getStartOrOff: (value) => clickOnStartOrOff(value),
        getClear: () => allClear(),
        getDelete: () => clickOnDelete()
    }

})(UIController);

let clickController = ((ui, small, saController) => {
    let clickDOM = ui.getDOMData();
    let selectAllButton = document.querySelectorAll('button');

    // FIRE WHEN CLICK ON BUTTON
    let clickOnButton = () => {
        // FIRE WHEN CLICK ON SHIFT
        clickDOM.shift.addEventListener('click', () => {
            saController.mainFunctionOfSA('shift');
            console.log('shift', clickDOM.shiftCount, 'alpha', clickDOM.alphaCount);
        });

        // FIRE WHEN CLICK ON ALPHA
        clickDOM.alpha.addEventListener('click', () => {
            saController.mainFunctionOfSA('alpha');
            console.log('shift', clickDOM.shiftCount, 'alpha', clickDOM.alphaCount);
        });

        // FIRED WHEN YOU CLICK ON "ON"
        clickDOM.on.addEventListener('click', () => {
            small.getStartOrOff('visible');
        });

        // FIRED WHEN YOU CLICK ON "AC"
        clickDOM.allClear.addEventListener('click', () => {
            if (clickDOM.shiftCount === 0) {
                small.getClear();
            } else {
                small.getStartOrOff('hidden');
            }
        });

        // FIRED WHEN YOU CLICK ON "DEL"
        clickDOM.delete.addEventListener('click', () => {
            small.getDelete();
        });

        // FETCH ALL DATA FROM BUTTONS AND MAIN FUNCTION OF SWAP VALUE
        selectAllButton.forEach(cur => {
            // CLICK ON BUTTON
            cur.addEventListener('click', current => {
                saController.getValueOfButton(current);
                saController.swapValueOfButton(current);
            });
        });
    };

    return {
        clickEvent: () => clickOnButton()
    }

})(UIController, smallFunctionController, shiftAlphaController);

let controller = ((saController, click) => {
    // RETURN OF controller
    return {
        init: () => {
            saController.disabledData();
            click.clickEvent();
        }
    }
})(shiftAlphaController, clickController);

controller.init();
