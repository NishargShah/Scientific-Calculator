let UIController = (() => {
    // ALL DOMData
    const DOMData = {
        calculator: document.querySelector('.calculator'),
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

    // ALL VALUES OF [CLASSNAME, ORG, SHIFT, ALPHA]
    const dataContent = [
        ['shift', 'Shift'], ['alpha', 'Alpha'], ['mode', 'Mode', 'CLR'], ['on', 'On'],
        ['x_inverse', 'x<sup>-1</sup>', 'x!'], ['combinations', 'nCr', 'nPr'], ['pol', 'Pol(', 'Rec(', ':'], ['x_cube', 'x<sup>3</sup>', '<sup>3</sup>√'],
        ['abc', 'a b/c', 'd/c'], ['sqrt', '√'], ['x_square', 'x<sup>2</sup>'], ['up_arrow', '^', '<sup>x</sup>√'], ['log', 'log', '10<sup>x</sup>'], ['ln', 'ln', 'e<sup>x</sup>', 'e'],
        ['bracket_minus', '(-)', null, 'A'], ['degree', '. , , ,', '<-', 'B'], ['hyp', 'hyp', null, 'C'],
        ['sin', 'sin', 'sin⁻¹', 'D'], ['cos', 'cos', 'cos⁻¹', 'E'], ['tan', 'tan', 'tan⁻¹', 'F'],
        ['rcl', 'RCL', 'STO'], ['eng', 'ENG', '<-'], ['left_bracket', '('], ['right_bracket', ')', null, 'X'], ['coma', ',', ';', 'Y'], ['m_plus', 'M+', 'M-', 'M'],
        ['seven', '7'], ['eight', '8'], ['nine', '9'], ['delete', 'DEL', 'INS'], ['all_clear', 'AC', 'OFF'],
        ['four', '4'], ['five', '5'], ['six', '6'], ['multiply', '×'], ['divide', '÷'],
        ['one', '1', 'S-SUM'], ['two', '2', 'S-VAR'], ['three', '3'], ['addition', '+'], ['subtraction', '-'],
        ['zero', '0', 'Rnd'], ['point', '.', 'Ran#'], ['exp', 'EXP', 'π'], ['answer', 'Ans', 'DRG>'], ['equal', '=', '%']
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
                let getDataClassName = ui.getDataContent[i][0];
                let getDataORG = ui.getDataContent[i][1];
                let getShiftData = ui.getDataContent[i][2];
                let getAlphaData = ui.getDataContent[i][3];

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

    // FIRE WHEN CLICK ON SHIFT OR ALPHA
    let clickOfShiftAndAlpha = () => {
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
    };

    // RETURN OF updateController
    return {
        getClick: () => clickOfShiftAndAlpha()
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
