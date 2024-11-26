const elements = [
    { nucleon: 1, symbol: "H", mass: "1", group: "nonmetals" },
    { nucleon: 2, symbol: "He", mass: "4", group: "nobleGases" },
    { nucleon: 3, symbol: "Li", mass: "7", group: "alkaliMetals" },
    { nucleon: 4, symbol: "Be", mass: "9", group: "alkalineEarthMetals" },
    { nucleon: 5, symbol: "B", mass: "11", group: "metalloids" },
    { nucleon: 6, symbol: "C", mass: "12", group: "nonmetals" },
    { nucleon: 7, symbol: "N", mass: "14", group: "nonmetals" },
    { nucleon: 8, symbol: "O", mass: "16", group: "nonmetals" },
    { nucleon: 9, symbol: "F", mass: "19", group: "halogens" },
    { nucleon: 10, symbol: "Ne", mass: "20", group: "nobleGases" },
    { nucleon: 11, symbol: "Na", mass: "23", group: "alkaliMetals" },
    { nucleon: 12, symbol: "Mg", mass: "24", group: "alkalineEarthMetals" },
    { nucleon: 13, symbol: "Al", mass: "27", group: "postTransitionMetals" },
    { nucleon: 14, symbol: "Si", mass: "28", group: "metalloids" },
    { nucleon: 15, symbol: "P", mass: "31", group: "nonmetals" },
    { nucleon: 16, symbol: "S", mass: "32", group: "nonmetals" },
    { nucleon: 17, symbol: "Cl", mass: "35", group: "halogens" },
    { nucleon: 18, symbol: "Ar", mass: "40", group: "nobleGases" },
    { nucleon: 19, symbol: "K", mass: "39", group: "alkaliMetals" },
    { nucleon: 20, symbol: "Ca", mass: "40", group: "alkalineEarthMetals" },
    { nucleon: 21, symbol: "Sc", mass: "45", group: "transitionMetals" },
    { nucleon: 22, symbol: "Ti", mass: "48", group: "transitionMetals" },
    { nucleon: 23, symbol: "V", mass: "51", group: "transitionMetals" },
    { nucleon: 24, symbol: "Cr", mass: "52", group: "transitionMetals" },
    { nucleon: 25, symbol: "Mn", mass: "55", group: "transitionMetals" },
    { nucleon: 26, symbol: "Fe", mass: "56", group: "transitionMetals" },
    { nucleon: 27, symbol: "Co", mass: "59", group: "transitionMetals" },
    { nucleon: 28, symbol: "Ni", mass: "59", group: "transitionMetals" },
    { nucleon: 29, symbol: "Cu", mass: "64", group: "transitionMetals" },
    { nucleon: 30, symbol: "Zn", mass: "65", group: "transitionMetals" },
    { nucleon: 31, symbol: "Ga", mass: "70", group: "postTransitionMetals" },
    { nucleon: 32, symbol: "Ge", mass: "73", group: "metalloids" },
    { nucleon: 33, symbol: "As", mass: "75", group: "metalloids" },
    { nucleon: 34, symbol: "Se", mass: "79", group: "nonmetals" },
    { nucleon: 35, symbol: "Br", mass: "80", group: "halogens" },
    { nucleon: 36, symbol: "Kr", mass: "84", group: "nobleGases" },
    { nucleon: 37, symbol: "Rb", mass: "85", group: "alkaliMetals" },
    { nucleon: 38, symbol: "Sr", mass: "88", group: "alkalineEarthMetals" },
    { nucleon: 39, symbol: "Y", mass: "89", group: "transitionMetals" },
    { nucleon: 40, symbol: "Zr", mass: "91", group: "transitionMetals" },
    { nucleon: 41, symbol: "Nb", mass: "93", group: "transitionMetals" },
    { nucleon: 42, symbol: "Mo", mass: "96", group: "transitionMetals" },
    { nucleon: 43, symbol: "Tc", mass: "98", group: "transitionMetals" },
    { nucleon: 44, symbol: "Ru", mass: "101", group: "transitionMetals" },
    { nucleon: 45, symbol: "Rh", mass: "103", group: "transitionMetals" },
    { nucleon: 46, symbol: "Pd", mass: "106", group: "transitionMetals" },
    { nucleon: 47, symbol: "Ag", mass: "108", group: "transitionMetals" },
    { nucleon: 48, symbol: "Cd", mass: "112", group: "transitionMetals" },
    { nucleon: 49, symbol: "In", mass: "115", group: "postTransitionMetals" },
    { nucleon: 50, symbol: "Sn", mass: "119", group: "postTransitionMetals" },
    { nucleon: 51, symbol: "Sb", mass: "122", group: "metalloids" },
    { nucleon: 52, symbol: "Te", mass: "128", group: "metalloids" },
    { nucleon: 53, symbol: "I", mass: "127", group: "halogens" },
    { nucleon: 54, symbol: "Xe", mass: "131", group: "nobleGases" },
    { nucleon: 55, symbol: "Cs", mass: "133", group: "alkaliMetals" },
    { nucleon: 56, symbol: "Ba", mass: "137", group: "alkalineEarthMetals" },
    { nucleon: 57, symbol: "La", mass: "139", group: "lanthanides" },

    { nucleon: 58, symbol: "Ce", mass: "140", group: "lanthanides" },
    { nucleon: 59, symbol: "Pr", mass: "141", group: "lanthanides" },
    { nucleon: 60, symbol: "Nd", mass: "144", group: "lanthanides" },
    { nucleon: 61, symbol: "Pm", mass: "145", group: "lanthanides" },
    { nucleon: 62, symbol: "Sm", mass: "150", group: "lanthanides" },
    { nucleon: 63, symbol: "Eu", mass: "152", group: "lanthanides" },
    { nucleon: 64, symbol: "Gd", mass: "157", group: "lanthanides" },
    { nucleon: 65, symbol: "Tb", mass: "159", group: "lanthanides" },
    { nucleon: 66, symbol: "Dy", mass: "162", group: "lanthanides" },
    { nucleon: 67, symbol: "Ho", mass: "165", group: "lanthanides" },
    { nucleon: 68, symbol: "Er", mass: "167", group: "lanthanides" },
    { nucleon: 69, symbol: "Tm", mass: "169", group: "lanthanides" },
    { nucleon: 70, symbol: "Yb", mass: "173", group: "lanthanides" },
    { nucleon: 71, symbol: "Lu", mass: "175", group: "lanthanides" },

    { nucleon: 72, symbol: "Hf", mass: "178", group: "transitionMetals" },
    { nucleon: 73, symbol: "Ta", mass: "181", group: "transitionMetals" },
    { nucleon: 74, symbol: "W", mass: "184", group: "transitionMetals" },
    { nucleon: 75, symbol: "Re", mass: "186", group: "transitionMetals" },
    { nucleon: 76, symbol: "Os", mass: "190", group: "transitionMetals" },
    { nucleon: 77, symbol: "Ir", mass: "192", group: "transitionMetals" },
    { nucleon: 78, symbol: "Pt", mass: "195", group: "transitionMetals" },
    { nucleon: 79, symbol: "Au", mass: "197", group: "transitionMetals" },
    { nucleon: 80, symbol: "Hg", mass: "201", group: "transitionMetals" },
    { nucleon: 81, symbol: "Tl", mass: "204", group: "postTransitionMetals" },
    { nucleon: 82, symbol: "Pb", mass: "207", group: "postTransitionMetals" },
    { nucleon: 83, symbol: "Bi", mass: "209", group: "postTransitionMetals" },
    { nucleon: 84, symbol: "Po", mass: "209", group: "metalloids" },
    { nucleon: 85, symbol: "At", mass: "210", group: "halogens" },
    { nucleon: 86, symbol: "Rn", mass: "222", group: "nobleGases" },
    { nucleon: 87, symbol: "Fr", mass: "223", group: "alkaliMetals" },
    { nucleon: 88, symbol: "Ra", mass: "226", group: "alkalineEarthMetals" },
    { nucleon: 89, symbol: "Ac", mass: "227", group: "actinides" },
    
    { nucleon: 90, symbol: "Th", mass: "232", group: "actinides" },
    { nucleon: 91, symbol: "Pa", mass: "231", group: "actinides" },
    { nucleon: 92, symbol: "U", mass: "238", group: "actinides" },
    { nucleon: 93, symbol: "Np", mass: "237", group: "actinides" },
    { nucleon: 94, symbol: "Pu", mass: "244", group: "actinides" },
    { nucleon: 95, symbol: "Am", mass: "243", group: "actinides" },
    { nucleon: 96, symbol: "Cm", mass: "247", group: "actinides" },
    { nucleon: 97, symbol: "Bk", mass: "247", group: "actinides" },
    { nucleon: 98, symbol: "Cf", mass: "251", group: "actinides" },
    { nucleon: 99, symbol: "Es", mass: "252", group: "actinides" },
    { nucleon: 100, symbol: "Fm", mass: "257", group: "actinides" },
    { nucleon: 101, symbol: "Md", mass: "258", group: "actinides" },
    { nucleon: 102, symbol: "No", mass: "259", group: "actinides" },
    { nucleon: 103, symbol: "Lr", mass: "262", group: "actinides" },

    { nucleon: 104, symbol: "Rf", mass: "267", group: "transitionMetals" },
    { nucleon: 105, symbol: "Db", mass: "270", group: "transitionMetals" },
    { nucleon: 106, symbol: "Sg", mass: "271", group: "transitionMetals" },
    { nucleon: 107, symbol: "Bh", mass: "274", group: "transitionMetals" },
    { nucleon: 108, symbol: "Hs", mass: "277", group: "transitionMetals" },
    { nucleon: 109, symbol: "Mt", mass: "278", group: "transitionMetals" },
    { nucleon: 110, symbol: "Ds", mass: "281", group: "transitionMetals" },
    { nucleon: 111, symbol: "Rg", mass: "282", group: "transitionMetals" },
    { nucleon: 112, symbol: "Cn", mass: "285", group: "transitionMetals" },
    { nucleon: 113, symbol: "Nh", mass: "286", group: "postTransitionMetals" },
    { nucleon: 114, symbol: "Fl", mass: "289", group: "postTransitionMetals" },
    { nucleon: 115, symbol: "Mc", mass: "290", group: "postTransitionMetals" },
    { nucleon: 116, symbol: "Lv", mass: "293", group: "postTransitionMetals" },
    { nucleon: 117, symbol: "Ts", mass: "294", group: "halogens" },
    { nucleon: 118, symbol: "Og", mass: "294", group: "nobleGases" }
];

const table = document.querySelector(".table_wrapper");

const table_layout = [
    [1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 2],
    [3, 4, null, null, null, null, null, null, null, null, null, null, null, 5, 6, 7, 8, 9, 10],
    [11, 12, null, null, null, null, null, null, null, null, null, null, null, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, null, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    [37, 38, 39, null, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
    [55, 56, 57, null, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
    [87, 88, 89, null, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71],
    [null, null, null, null, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103]
];


//table 1 (big one [clickable])
for (const row of table_layout) {
    const tr = document.createElement("tr");

    for (const cell of row) {
        const th = document.createElement("th");

        if (cell === null) {
            th.className = "empty_cell";
        } else {
            const element = elements.find((e) => e.nucleon === cell);
            if (element) {
                th.classList.add("element");
                th.classList.add(element.group);
                th.innerHTML = `
                    <span class="nucleon">${element.nucleon}</span><br>
                    ${element.symbol}<br>
                    <span class="mass">${element.mass}</span>
                `;
            }
            else {
                th.className = "empty_cell";
            }
            
        }
        tr.appendChild(th);
    }
    table.appendChild(tr);
}
/*
//table 2 (smaller one [info])
for (const row of table_layout) {
    const tr = document.createElement("tr");

    for (const cell of row) {
        const th = document.createElement("th");

        if (cell === null) {
            th.className = "empty_cell";
        } else {
            const element = elements.find((e) => e.nucleon === cell);
            if (element) {
                th.classList.add("element");
                th.classList.add(element.group);
                th.innerHTML = `
                    <span class="nucleon">${element.nucleon}</span><br>
                    ${element.symbol}<br>
                    <span class="mass">${element.mass}</span>
                `;
            }
            else {
                th.className = "empty_cell";
            }
            
        }
        tr.appendChild(th);
    }
    table2.appendChild(tr);
}
*/
const show_info = (nucleon_num) => {
	const info_holder_container = document.querySelector(".periodic_table_info");
	const info_holder = document.querySelector(".info_holder");
}