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
        point: document.querySelector('.point'), exp: document.querySelector('.exp'),
    };

    // ALL VALUES OF ORG SHIFT ALPHA IN TEXT CONTENT
    const dataContent = [
        ['Shift'], ['Alpha'], ['Mode', 'CLR'], ['On'],
        ['x<sup>-1</sup>', 'x!'], ['nCr', 'nPr'], ['Pol(', 'Rec(', ':'], ['x<sup>3</sup>', '<sup>3</sup>√'],
        ['a b/c', 'd/c'], ['√'], ['x<sup>2</sup>'], ['^', '<sup>x</sup>√'], ['log', '10<sup>x</sup>'], ['ln', 'e<sup>x</sup>', 'e'],
        ['(-)', null, 'A'], ['.,,,', '<-', 'B'], ['hyp', null, 'C'], ['sin', 'sin⁻¹', 'D'], ['cos', 'cos⁻¹', 'E'], ['tan', 'tan⁻¹', 'F'],
        ['RCL', 'STO'], ['ENG', '<-'], ['('], [')', null, 'X'], [',', ';', 'Y'], ['M+', 'M-', 'M'],
        ['7'], ['8'], ['9'], ['DEL', 'INS'], ['AC', 'OFF'],
        ['4'], ['5'], ['6'], ['×'], ['÷'],
        ['1', 'S-SUM'], ['2', 'S-VAR'], ['3'], ['+'], ['-'],
        ['0', 'Rnd'], ['.', 'Ran#'], ['EXP', 'π'], ['Ans', 'DRG>'], ['=', '%']
    ];

    return {
        getDOMData: () => DOMData,
        getDataContent: dataContent,
    }
})();

let updateController = (ui => {
    const updateDOM = ui.getDOMData();
    console.log(ui.getDataContent);

    let selectAllButton = document.querySelectorAll('button');

    // FIRE WHEN CLICK ON SHIFT
    updateDOM.shift.addEventListener('click', () => {
        for (let i = 0; i <= selectAllButton.length; i++) {
            selectAllButton.forEach(cur => {
                let getDataORG = ui.getDataContent[i][0];
                let getShiftData = ui.getDataContent[i][1];

                if (getShiftData === undefined) {
                    getShiftData = getDataORG;
                }

                console.log(getDataORG, getShiftData);
                // console.log(cur.textContent);
                // console.log(cur.className);
                let getDataORGLower = getDataORG.toLowerCase();
                if (cur.className === getDataORG) {
                    if (getShiftData.includes('<sup>')) {
                        document.querySelector('.' + getDataORG).innerHTML = getShiftData;
                    } else {
                        document.querySelector('.' + getDataORG).textContent = getShiftData;
                    }
                }
                // console.log(cur, cur.className);
                // cur.addEventListener('click', current => {
                //     let classVar = current.target.textContent;
                //     console.log(classVar);
                // });
            });
        }
    });

    selectAllButton.forEach(cur => {
        // console.log(cur);
        // console.log(cur, cur.className);
        cur.addEventListener('click', current => {
            let classVar = current.target.textContent;
            console.log(classVar);
        });
    });
})(UIController);

let controller = ((ui, update) => {

})(UIController, updateController);
