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
        point: document.querySelector('.point'), exp: document.querySelector('.exp'), shiftCount: 0, alphaCount: 0
    };

    // ALL VALUES OF [DISPLAY, shiftDisplay, alphaDisplay, CLASSNAME, ORG, SHIFT, ALPHA]
    const dataContent = [
        [null, null, null, 'shift', 'Shift'],
        [null, null, null, 'alpha', 'Alpha'],
        [null, null, null, 'mode', 'Mode', 'CLR'],
        [null, null, null, 'on', 'On'],
        ['⁻¹', '!', '⁻¹', 'x_inverse', 'x<sup>-1</sup>', 'x!'],
        [null, null, null, 'combinations', 'nCr', 'nPr'],
        [null, null, null, 'pol', 'Pol(', 'Rec(', ':'],
        ['³', '³√', '³', 'x_cube', 'x<sup>3</sup>', '<sup>3</sup>√'],
        [null, null, null, 'abc', 'a b/c', 'd/c'],
        ['√', '√', '√', 'sqrt', '√'],
        ['²', '²', '²', 'x_square', 'x<sup>2</sup>'],
        ['^', 'ˣ√', '^', 'up_arrow', '^', '<sup>x</sup>√'],
        ['log ', '₁₀', 'log ', 'log', 'log', '10<sup>x</sup>'],
        ['ln ', 'ₑ', 'e', 'ln', 'ln', 'e<sup>x</sup>', 'e'],
        [null, null, 'A', 'bracket_minus', '(-)', null, 'A'],
        [null, null, 'B', 'degree', '. , , ,', '<-', 'B'],
        [null, null, 'C', 'hyp', 'hyp', null, 'C'],
        ['sin ', 'sin⁻¹', 'D', 'sin', 'sin', 'sin<sup>-1</sup>', 'D'],
        ['cos ', 'cos⁻¹', 'E', 'cos', 'cos', 'cos<sup>-1</sup>', 'E'],
        ['tan ', 'tan⁻¹', 'F', 'tan', 'tan', 'tan<sup>-1</sup>', 'F'],
        [null, null, null, 'rcl', 'RCL', 'STO'],
        [null, null, null, 'eng', 'ENG', '<-'],
        ['( ', '( ', '( ', 'left_bracket', '('],
        [' )', ' )', 'X', 'right_bracket', ')', null, 'X'],
        [null, null, null, 'coma', ',', ';', 'Y'],
        [null, null, null, 'm_plus', 'M+', 'M-', 'M'],
        ['7', '7', '7', 'seven', '7'],
        ['8', '8', '8', 'eight', '8'],
        ['9', '9', '9', 'nine', '9'],
        [null, null, null, 'delete', 'DEL', 'INS'],
        [null, null, null, 'all_clear', 'AC', 'OFF'],
        ['4', '4', '4', 'four', '4'],
        ['5', '5', '5', 'five', '5'],
        ['6', '6', '6', 'six', '6'],
        ['*', '*', '*', 'multiply', '×'],
        ['/', '/', '/', 'divide', '÷'],
        ['1', '', '', 'one', '1', 'S-SUM'],
        ['2', '', '', 'two', '2', 'S-VAR'],
        ['3', '3', '3', 'three', '3'],
        ['+', '+', '+', 'addition', '+'],
        ['-', '-', '-', 'subtraction', '-'],
        ['0', 'Rnd', '0', 'zero', '0', 'Rnd'],
        ['.', 'Ran#', '.', 'point', '.', 'Ran#'],
        ['E', 'π', 'E', 'exp', 'EXP', 'π'],
        [null, null, null, 'answer', 'Ans', 'DRG>'],
        [null, '%', null, 'equal', '=', '%']
    ];

    // RETURN OF UIController
    return {
        getDOMData: () => DOMData,
        getDataContent: dataContent,
    }
})();

let updateController = (ui => {
    const updateDOM = ui.getDOMData();
    let selectAllButton = document.querySelectorAll('button');

    let swapOfShiftAndAlpha = (value) => {
        // FOR LOOP FOR ALL BUTTONS
        for (let i = 0; i <= selectAllButton.length - 1; i++) {
            // FOREACH FOR GET LIST OF IT
            selectAllButton.forEach(cur => {
                // FETCH DATA FROM UIController
                let getDataClassName = ui.getDataContent[i][3];
                let getDataORG = ui.getDataContent[i][4];
                let getShiftData = ui.getDataContent[i][5];
                let getAlphaData = ui.getDataContent[i][6];

                if (value === 'shift') {
                    // IF DATA IS UNDEFINED OR NULL, SECOND VALUE = FIRST VALUE
                    if (getShiftData === undefined || getShiftData === null) getShiftData = getDataORG;

                    // CHECK FOR shiftCount IF IT IS 0 THEN SWAP BUT IF ITS 1, ITS BACK TO ORG CONTENT
                    if (cur.className === getDataClassName && updateDOM.shiftCount === 0) {
                        document.querySelector('.' + getDataClassName).innerHTML = getShiftData;
                    } else if (cur.className === getDataClassName && updateDOM.shiftCount === 1) {
                        document.querySelector('.' + getDataClassName).innerHTML = getDataORG;
                    }
                } else {
                    if (getAlphaData === undefined || getAlphaData === null) getAlphaData = getDataORG;

                    if (cur.className === getDataClassName && updateDOM.alphaCount === 0) {
                        document.querySelector('.' + getDataClassName).innerHTML = getAlphaData;
                    } else if (cur.className === getDataClassName && updateDOM.alphaCount === 1) {
                        document.querySelector('.' + getDataClassName).innerHTML = getDataORG;
                    }
                }
            });
        }

        // IF ELSE CONDITION FOR CHANGE 0 AND 1
        if (value === 'shift') {
            updateDOM.shiftCount === 0 ? updateDOM.shiftCount = 1 : updateDOM.shiftCount = 0;
        } else {
            updateDOM.alphaCount === 0 ? updateDOM.alphaCount = 1 : updateDOM.alphaCount = 0;
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

    // SWAP WHEN CLICK ON ANY BUTTON EXCEPT SHIFT AND ALPHA
    let swapWhenClickOnButton = (current) => {
        if (current.target.className !== 'shift' && current.target.className !== 'alpha') {
            updateDOM.shiftCount = 1;
            updateDOM.alphaCount = 1;
            swapOfShiftAndAlpha('shift');
            swapOfShiftAndAlpha('alpha');
        }
    };

    // FIRE WHEN CLICK ON BUTTON LIKE SHIFT ALPHA
    let clickOnButton = () => {
        // FIRE WHEN CLICK ON SHIFT
        updateDOM.shift.addEventListener('click', () => {
            swapOfShiftAndAlpha('shift');
            console.log('shift', updateDOM.shiftCount);
        });

        // FIRE WHEN CLICK ON ALPHA
        updateDOM.alpha.addEventListener('click', () => {
            swapOfShiftAndAlpha('alpha');
            console.log('alpha', updateDOM.alphaCount);
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

        // FETCH ALL DATA FROM BUTTONS
        selectAllButton.forEach(cur => {
            // CLICK ON BUTTON
            cur.addEventListener('click', current => {

                swapWhenClickOnButton(current);

                for (let i = 0; i <= selectAllButton.length - 1; i++) {
                    let getDisplayORG = ui.getDataContent[i][0];
                    let getDisplayOfShift = ui.getDataContent[i][1];
                    let getDisplayOfAlpha = ui.getDataContent[i][2];
                    let getDataClassName = ui.getDataContent[i][3];
                    let classVar = current.target.className;

                    if (classVar === getDataClassName && getDisplayORG !== null && (updateDOM.shiftCount === 0 && updateDOM.alphaCount === 0)) {
                        updateDOM.displayTop.value += getDisplayORG;
                        console.log('press if');
                    } else {
                        console.log('press else');
                        // if (updateDOM.shiftCount === 1) {
                        //     updateDOM.displayTop.value += getDisplayOfShift;
                        // }
                        // if (updateDOM.alphaCount === 1) {
                        //     updateDOM.displayTop.value += getDisplayOfAlpha;
                        // }
                    }
                }
            });
        });
    };

    // RETURN OF updateController
    return {
        getClick: () => clickOnButton()
    }

})(UIController);

let controller = ((ui, update) => {

    // RETURN OF controller
    return {
        init: () => {
            update.getClick();
        }
    }
})(UIController, updateController);

controller.init();
