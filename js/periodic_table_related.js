const elements = [
    { nucleon: 1, symbol: "H", mass: "1", group: "nonmetals", discovery: "1766" },
    { nucleon: 2, symbol: "He", mass: "4", group: "nobleGases", discovery: "1868" },
    { nucleon: 3, symbol: "Li", mass: "7", group: "alkaliMetals", discovery: "1817" },
    { nucleon: 4, symbol: "Be", mass: "9", group: "alkalineEarthMetals", discovery: "1798" },
    { nucleon: 5, symbol: "B", mass: "11", group: "metalloids", discovery: "1808" },
    { nucleon: 6, symbol: "C", mass: "12", group: "nonmetals", discovery: "Ancient times" },
    { nucleon: 7, symbol: "N", mass: "14", group: "nonmetals", discovery: "1772" },
    { nucleon: 8, symbol: "O", mass: "16", group: "nonmetals", discovery: "1774" },
    { nucleon: 9, symbol: "F", mass: "19", group: "halogens", discovery: "1670" },
    { nucleon: 10, symbol: "Ne", mass: "20", group: "nobleGases", discovery: "1898" },
    { nucleon: 11, symbol: "Na", mass: "23", group: "alkaliMetals", discovery: "1807" },
    { nucleon: 12, symbol: "Mg", mass: "24", group: "alkalineEarthMetals", discovery: "1808" },
    { nucleon: 13, symbol: "Al", mass: "27", group: "postTransitionMetals", discovery: "Ancient times" },
    { nucleon: 14, symbol: "Si", mass: "28", group: "metalloids", discovery: "1854" },
    { nucleon: 15, symbol: "P", mass: "31", group: "nonmetals", discovery: "1669" },
    { nucleon: 16, symbol: "S", mass: "32", group: "nonmetals", discovery: "Ancient times" },
    { nucleon: 17, symbol: "Cl", mass: "35", group: "halogens", discovery: "1774" },
    { nucleon: 18, symbol: "Ar", mass: "40", group: "nobleGases", discovery: "1894" },
    { nucleon: 19, symbol: "K", mass: "39", group: "alkaliMetals", discovery: "1807" },
    { nucleon: 20, symbol: "Ca", mass: "40", group: "alkalineEarthMetals", discovery: "Ancient times" },
    { nucleon: 21, symbol: "Sc", mass: "45", group: "transitionMetals", discovery: "1879" },
    { nucleon: 22, symbol: "Ti", mass: "48", group: "transitionMetals", discovery: "1791" },
    { nucleon: 23, symbol: "V", mass: "51", group: "transitionMetals", discovery: "1801" },
    { nucleon: 24, symbol: "Cr", mass: "52", group: "transitionMetals", discovery: "1797" },
    { nucleon: 25, symbol: "Mn", mass: "55", group: "transitionMetals", discovery: "1774" },
    { nucleon: 26, symbol: "Fe", mass: "56", group: "transitionMetals", discovery: "Ancient times" },
    { nucleon: 27, symbol: "Co", mass: "59", group: "transitionMetals", discovery: "1735" },
    { nucleon: 28, symbol: "Ni", mass: "59", group: "transitionMetals", discovery: "1751" },
    { nucleon: 29, symbol: "Cu", mass: "64", group: "transitionMetals", discovery: "Ancient times" },
    { nucleon: 30, symbol: "Zn", mass: "65", group: "transitionMetals", discovery: "1746" },
    { nucleon: 31, symbol: "Ga", mass: "70", group: "postTransitionMetals", discovery: "1875" },
    { nucleon: 32, symbol: "Ge", mass: "73", group: "metalloids", discovery: "1886" },
    { nucleon: 33, symbol: "As", mass: "75", group: "metalloids", discovery: "Ancient times" },
    { nucleon: 34, symbol: "Se", mass: "79", group: "nonmetals", discovery: "1817" },
    { nucleon: 35, symbol: "Br", mass: "80", group: "halogens", discovery: "1826" },
    { nucleon: 36, symbol: "Kr", mass: "84", group: "nobleGases", discovery: "1898" },
    { nucleon: 37, symbol: "Rb", mass: "85", group: "alkaliMetals", discovery: "1861" },
    { nucleon: 38, symbol: "Sr", mass: "88", group: "alkalineEarthMetals", discovery: "1790" },
    { nucleon: 39, symbol: "Y", mass: "89", group: "transitionMetals", discovery: "1794" },
    { nucleon: 40, symbol: "Zr", mass: "91", group: "transitionMetals", discovery: "1789" },
    { nucleon: 41, symbol: "Nb", mass: "93", group: "transitionMetals", discovery: "1801" },
    { nucleon: 42, symbol: "Mo", mass: "96", group: "transitionMetals", discovery: "1778" },
    { nucleon: 43, symbol: "Tc", mass: "98", group: "transitionMetals", discovery: "1937" },
    { nucleon: 44, symbol: "Ru", mass: "101", group: "transitionMetals", discovery: "1827" },
    { nucleon: 45, symbol: "Rh", mass: "103", group: "transitionMetals", discovery: "1803" },
    { nucleon: 46, symbol: "Pd", mass: "106", group: "transitionMetals", discovery: "1803" },
    { nucleon: 47, symbol: "Ag", mass: "108", group: "transitionMetals", discovery: "Ancient times" },
    { nucleon: 48, symbol: "Cd", mass: "112", group: "transitionMetals", discovery: "1817" },
    { nucleon: 49, symbol: "In", mass: "115", group: "postTransitionMetals", discovery: "1863" },
    { nucleon: 50, symbol: "Sn", mass: "119", group: "postTransitionMetals", discovery: "Ancient times" },
    { nucleon: 51, symbol: "Sb", mass: "122", group: "metalloids", discovery: "Ancient times" },
    { nucleon: 52, symbol: "Te", mass: "128", group: "metalloids", discovery: "1782" },
    { nucleon: 53, symbol: "I", mass: "127", group: "halogens", discovery: "1811" },
    { nucleon: 54, symbol: "Xe", mass: "131", group: "nobleGases", discovery: "1898" },
    { nucleon: 55, symbol: "Cs", mass: "133", group: "alkaliMetals", discovery: "1860" },
    { nucleon: 56, symbol: "Ba", mass: "137", group: "alkalineEarthMetals", discovery: "1808" },
    { nucleon: 57, symbol: "La", mass: "139", group: "lanthanides", discovery: "1839" },

    { nucleon: 58, symbol: "Ce", mass: "140", group: "lanthanides", discovery: "1803" },
    { nucleon: 59, symbol: "Pr", mass: "141", group: "lanthanides", discovery: "1885" },
    { nucleon: 60, symbol: "Nd", mass: "144", group: "lanthanides", discovery: "1885" },
    { nucleon: 61, symbol: "Pm", mass: "145", group: "lanthanides", discovery: "1945" },
    { nucleon: 62, symbol: "Sm", mass: "150", group: "lanthanides", discovery: "1879" },
    { nucleon: 63, symbol: "Eu", mass: "152", group: "lanthanides", discovery: "1901" },
    { nucleon: 64, symbol: "Gd", mass: "157", group: "lanthanides", discovery: "1880" },
    { nucleon: 65, symbol: "Tb", mass: "159", group: "lanthanides", discovery: "1843" },
    { nucleon: 66, symbol: "Dy", mass: "162", group: "lanthanides", discovery: "1886" },
    { nucleon: 67, symbol: "Ho", mass: "165", group: "lanthanides", discovery: "1878" },
    { nucleon: 68, symbol: "Er", mass: "167", group: "lanthanides", discovery: "1843" },
    { nucleon: 69, symbol: "Tm", mass: "169", group: "lanthanides", discovery: "1879" },
    { nucleon: 70, symbol: "Yb", mass: "173", group: "lanthanides", discovery: "1878" },
    { nucleon: 71, symbol: "Lu", mass: "175", group: "lanthanides", discovery: "1907" },

    { nucleon: 72, symbol: "Hf", mass: "178", group: "transitionMetals", discovery: "1923" },
    { nucleon: 73, symbol: "Ta", mass: "181", group: "transitionMetals", discovery: "1802" },
    { nucleon: 74, symbol: "W", mass: "184", group: "transitionMetals", discovery: "1783" },
    { nucleon: 75, symbol: "Re", mass: "186", group: "transitionMetals", discovery: "1925" },
    { nucleon: 76, symbol: "Os", mass: "190", group: "transitionMetals", discovery: "1803" },
    { nucleon: 77, symbol: "Ir", mass: "192", group: "transitionMetals", discovery: "1803" },
    { nucleon: 78, symbol: "Pt", mass: "195", group: "transitionMetals", discovery: "1735" },
    { nucleon: 79, symbol: "Au", mass: "197", group: "transitionMetals", discovery: "Ancient times" },
    { nucleon: 80, symbol: "Hg", mass: "201", group: "transitionMetals", discovery: "Ancient times" },
    { nucleon: 81, symbol: "Tl", mass: "204", group: "postTransitionMetals", discovery: "1861" },
    { nucleon: 82, symbol: "Pb", mass: "207", group: "postTransitionMetals", discovery: "Ancient times" },
    { nucleon: 83, symbol: "Bi", mass: "209", group: "postTransitionMetals", discovery: "1753" },
    { nucleon: 84, symbol: "Po", mass: "209", group: "metalloids", discovery: "1898" },
    { nucleon: 85, symbol: "At", mass: "210", group: "halogens", discovery: "1940" },
    { nucleon: 86, symbol: "Rn", mass: "222", group: "nobleGases", discovery: "1900" },
    { nucleon: 87, symbol: "Fr", mass: "223", group: "alkaliMetals", discovery: "1939" },
    { nucleon: 88, symbol: "Ra", mass: "226", group: "alkalineEarthMetals", discovery: "1898" },
    { nucleon: 89, symbol: "Ac", mass: "227", group: "actinides", discovery: "1899" },
    
    { nucleon: 90, symbol: "Th", mass: "232", group: "actinides", discovery: "1828" },
    { nucleon: 91, symbol: "Pa", mass: "231", group: "actinides", discovery: "1913" },
    { nucleon: 92, symbol: "U", mass: "238", group: "actinides", discovery: "1789" },
    { nucleon: 93, symbol: "Np", mass: "237", group: "actinides", discovery: "1940" },
    { nucleon: 94, symbol: "Pu", mass: "244", group: "actinides", discovery: "1940" },
    { nucleon: 95, symbol: "Am", mass: "243", group: "actinides", discovery: "1944" },
    { nucleon: 96, symbol: "Cm", mass: "247", group: "actinides", discovery: "1944" },
    { nucleon: 97, symbol: "Bk", mass: "247", group: "actinides", discovery: "1949" },
    { nucleon: 98, symbol: "Cf", mass: "251", group: "actinides", discovery: "1950" },
    { nucleon: 99, symbol: "Es", mass: "252", group: "actinides", discovery: "1952" },
    { nucleon: 100, symbol: "Fm", mass: "257", group: "actinides", discovery: "1952" },
    { nucleon: 101, symbol: "Md", mass: "258", group: "actinides", discovery: "1955" },
    { nucleon: 102, symbol: "No", mass: "259", group: "actinides", discovery: "1957" },
    { nucleon: 103, symbol: "Lr", mass: "262", group: "actinides", discovery: "1961" },

    { nucleon: 104, symbol: "Rf", mass: "267", group: "transitionMetals", discovery: "1964" },
    { nucleon: 105, symbol: "Db", mass: "270", group: "transitionMetals", discovery: "1967" },
    { nucleon: 106, symbol: "Sg", mass: "271", group: "transitionMetals", discovery: "1974" },
    { nucleon: 107, symbol: "Bh", mass: "274", group: "transitionMetals", discovery: "1976" },
    { nucleon: 108, symbol: "Hs", mass: "277", group: "transitionMetals", discovery: "1984" },
    { nucleon: 109, symbol: "Mt", mass: "278", group: "transitionMetals", discovery: "1982" },
    { nucleon: 110, symbol: "Ds", mass: "281", group: "transitionMetals", discovery: "1994" },
    { nucleon: 111, symbol: "Rg", mass: "282", group: "transitionMetals", discovery: "1994" },
    { nucleon: 112, symbol: "Cn", mass: "285", group: "transitionMetals", discovery: "1996" },
    { nucleon: 113, symbol: "Nh", mass: "286", group: "postTransitionMetals", discovery: "2004" },
    { nucleon: 114, symbol: "Fl", mass: "289", group: "postTransitionMetals", discovery: "1998" },
    { nucleon: 115, symbol: "Mc", mass: "290", group: "postTransitionMetals", discovery: "2003" },
    { nucleon: 116, symbol: "Lv", mass: "293", group: "postTransitionMetals", discovery: "2000" },
    { nucleon: 117, symbol: "Ts", mass: "294", group: "halogens", discovery: "2010" },
    { nucleon: 118, symbol: "Og", mass: "294", group: "nobleGases", discovery: "2006" }
];
const element_names = {
    H: "Hydrogen", He: "Helium", Li: "Lithium", Be: "Beryllium", B: "Boron",
    C: "Carbon", N: "Nitrogen", O: "Oxygen", F: "Fluorine", Ne: "Neon",
    Na: "Sodium", Mg: "Magnesium", Al: "Aluminium", Si: "Silicon", P: "Phosphorus",
    S: "Sulfur", Cl: "Chlorine", Ar: "Argon", K: "Potassium", Ca: "Calcium",
    Sc: "Scandium", Ti: "Titanium", V: "Vanadium", Cr: "Chromium", Mn: "Manganese",
    Fe: "Iron", Co: "Cobalt", Ni: "Nickel", Cu: "Copper", Zn: "Zinc",
    Ga: "Gallium", Ge: "Germanium", As: "Arsenic", Se: "Selenium", Br: "Bromine",
    Kr: "Krypton", Rb: "Rubidium", Sr: "Strontium", Y: "Yttrium", Zr: "Zirconium",
    Nb: "Niobium", Mo: "Molybdenum", Tc: "Technetium", Ru: "Ruthenium", Rh: "Rhodium",
    Pd: "Palladium", Ag: "Silver", Cd: "Cadmium", In: "Indium", Sn: "Tin",
    Sb: "Antimony", Te: "Tellurium", I: "Iodine", Xe: "Xenon", Cs: "Cesium",
    Ba: "Barium", La: "Lanthanum", Ce: "Cerium", Pr: "Praseodymium", Nd: "Neodymium",
    Pm: "Promethium", Sm: "Samarium", Eu: "Europium", Gd: "Gadolinium", Tb: "Terbium",
    Dy: "Dysprosium", Ho: "Holmium", Er: "Erbium", Tm: "Thulium", Yb: "Ytterbium",
    Lu: "Lutetium", Hf: "Hafnium", Ta: "Tantalum", W: "Tungsten", Re: "Rhenium",
    Os: "Osmium", Ir: "Iridium", Pt: "Platinum", Au: "Gold", Hg: "Mercury",
    Tl: "Thallium", Pb: "Lead", Bi: "Bismuth", Po: "Polonium", At: "Astatine",
    Rn: "Radon", Fr: "Francium", Ra: "Radium", Ac: "Actinium", Th: "Thorium",
    Pa: "Protactinium", U: "Uranium", Np: "Neptunium", Pu: "Plutonium", Am: "Americium",
    Cm: "Curium", Bk: "Berkelium", Cf: "Californium", Es: "Einsteinium", Fm: "Fermium",
    Md: "Mendelevium", No: "Nobelium", Lr: "Lawrencium", Rf: "Rutherfordium", Db: "Dubnium",
    Sg: "Seaborgium", Bh: "Bohrium", Hs: "Hassium", Mt: "Meitnerium", Ds: "Darmstadtium",
    Rg: "Roentgenium", Cn: "Copernicium", Nh: "Nihonium", Fl: "Flerovium", Mc: "Moscovium",
    Lv: "Livermorium", Ts: "Tennessine", Og: "Oganesson"
};
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


// hint on how to get all info on elements:
console.log("Hello!");
console.log("You can see all the info for each element by typing: elements");

const distribute_electrons = (element) => {
    const max_electrons_per_shell = [2, 8, 18, 32, 32, 18, 8];
    const total_electrons = element.nucleon;
    const shell_distribution = [];
    let remaining_electrons = total_electrons;

    for (let i = 0; i < max_electrons_per_shell.length && remaining_electrons > 0; i++) {
        const electrons_in_this_shell = Math.min(max_electrons_per_shell[i], remaining_electrons);
        shell_distribution.push(electrons_in_this_shell);
        remaining_electrons -= electrons_in_this_shell;
    }

    return shell_distribution;
};

elements.forEach(element => {
    //excluded the transitionMetals cus they have different groups
    const transition_metal_groups = ["lanthanides", "actinides"];
    if (!transition_metal_groups.includes(element.group)) {
        const electrons = element.nucleon;
        let charge;
        let found = false;
        for (let row = 0; row < table_layout.length; row++) {
            for (let col = 0; col < table_layout[row].length; col++) {
                if (table_layout[row][col] === electrons) {
                    const group = col + 1;
                    if (group > 3) {
                        element.group_number = group-1;
                    } else {
                        element.group_number = group;
                    }
                    found = true;

                    switch (group) {
                        case 1:
                            charge = 1;
                            break;
                        case 2:
                            charge = 2;
                            break;
                        case 14:
                            charge = 3;
                            break;
                        case 15:  
                            charge = "+-4 as it only shares electrons";
                            break;  
                        case 16:
                            charge = -3;
                            break;
                        case 17:
                            charge = -2;
                            break;
                        case 18:
                            charge = -1;
                            break;
                        case 19:
                            charge = "0 as it doesnt lose/gain electrons";
                            break;
                        default:
                            charge = "not constant";
                        
                    }
                    break;
                }
                
            }
            if (found) break;
        }

        if (!found) {
            element.charge = "{unknown position}";
        } else if (typeof charge === "number") {
            if (charge > 0) {
                element.charge = `${Math.abs(charge)}+`;
            } else if (charge < 0) {
                element.charge = `${Math.abs(charge)}-`;
            } else {
                element.charge = "0";
            }
        } else {
            element.charge = charge;
        }
    } else {
        element.group_number = 3;
        element.charge = `not constant, has a variable charge`;
    }
    let group_now = "";
    switch (element.group) {
        case "nonmetals":
            group_now = "nonmetal";
            break;
        case "nobleGases":
            group_now = "noble gas";
            break;
        case "alkaliMetals":
            group_now = "alkali metal";
            break;
        case "alkalineEarthMetals":
            group_now = "alkaline earth metal";
            break;
        case "metalloids":
            group_now = "metalloid";
            break;
        case "halogens":
            group_now = "halogen";
            break;
        case "postTransitionMetals":
            group_now = "post transition metal";
            break;
        case "transitionMetals":
            group_now = "transition metal";
            break;
        case "lanthanides":
            group_now = "lanthanide";
            break;
        case "actinides":
            group_now = "actinide";
            break;
        default:
            console.log("none triggered (line: 283)");
    }
    element.group_now = group_now;

    //im bored

    element.outer_shell_electrons = distribute_electrons(element).reverse()[0];
    element.name = element_names[element.symbol];
});

//useless. no now USEFUL func
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.querySelector(".close_info").addEventListener("click", () => {
    close_info();
});


const table = document.querySelector(".table_wrapper");

let count = 0;
//table 1 (big one [clickable])
for (const row of table_layout) {
    count++;
    const tr = document.createElement("tr");

    for (const cell of row) {
        const th = document.createElement("th");
        th.classList.add(`.period${count}`);

        if (cell === null) {
            th.classList.add("empty_cell");
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
                th.addEventListener("click", () => {
					// alert(`you clicked ${element.name}, ${element.charge}`);
                    show_info(element);
                    make_shells(element);
                    make_electrons(element);
                    show_electronic_config(element);
                });

                if (count === 9) {
                    element.period = 6;
                } else if (count === 10) {
                    element.period = 7;
                } else {
                    element.period = count;
                }
            }
            else {
                th.classList.add("empty_cell");
            }
            
        }
        tr.appendChild(th);
    }
    table.appendChild(tr);
}

const info_holder_container = document.querySelector(".element_info_holder");
const info_holder = document.querySelector(".element_info");

const element_name = document.querySelector(".element_name");
const discovery = document.querySelector(".discovery_year");
const outer_shell_electrons = document.querySelector(".outer_electrons");
const ionic_charge = document.querySelector(".ionic_charge");
const group_name = document.querySelector(".group_name");

const show_info = (element) => {
    // console.log("element:", element);
    //START quickfire facts
    const outer_electrons = distribute_electrons(element).reverse()[0];
    element_name.innerHTML = element.name;
    discovery.innerHTML = element.discovery;
    outer_shell_electrons.innerHTML = outer_electrons;
    outer_electrons === 1 ? document.querySelector(".plural_electrons").innerHTML = "" : document.querySelector(".plural_electrons").innerHTML = "s";
    ionic_charge.innerHTML = element.charge;
    group_name.innerHTML = element.group_now;
    //END

    //shell configuration is 20 lines below and is called in the table1 func

    info_holder_container.style.display = "flex";
    sleep(10).then(() => {
        info_holder.style.opacity = 1;
    });
}

const container = document.querySelector(".random_container2");

const close_info = () => {
    container.innerHTML = "";
    info_holder.style.opacity = 0;
    sleep(400).then(() => {
        info_holder_container.style.display = "none";
    });
}


//GOD this took me too long. exams make me waste time.
const make_shells = (element) => {
    const amount_shells = distribute_electrons(element).length;
    let shell_holder = document.createElement("div");

    shell_holder.classList.add("electron_configuration");
    container.appendChild(shell_holder);

    for (let i = 0; i <= amount_shells; i++) {
        const side_len = 100 + (50 * i);

        const new_shell = document.createElement("div");
        if (i != amount_shells) {
            new_shell.classList.add("shell");
        } else {
            new_shell.classList.add("buffer_shell");
        }
        new_shell.style.width = `${side_len}px`;
        new_shell.style.height = `${side_len}px`;
        //new_shell.style.boxSizing = "border-box";

        shell_holder.appendChild(new_shell);
        shell_holder = new_shell;
    }
    //since a shell gets squished why not add a buffer one :) (added above)
    // console.log(container);
};

// using outer_electrons func here too
const place_electrons = async (shell, electron_count) => {
    for (let i = 0; i < electron_count; i++) {
        const electron = document.createElement("div");
        electron.classList.add("electron");
        
        const angle = (i / electron_count) * 360;
        const radius = parseInt(shell.style.width) / 2;
        // console.log(`radius: ${radius} & angle: ${angle}`);
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        
        electron.style.left = `${radius + x}px`;
        electron.style.top = `${radius - y}px`;
        
        shell.appendChild(electron);

        //make it look cool
        await sleep(10);
    }
};

const make_electrons = (element) => {
    const shell_distribution = distribute_electrons(element);
    const shell_holder = document.querySelector(".electron_configuration");
    const shells = Array.from(shell_holder.querySelectorAll(".shell"));

    while (shells.length > shell_distribution.length) {
        const extra_shell = shells.pop();
        extra_shell.remove();
    }

    shell_distribution.forEach((electron_count, shell_index) => {
        if (shell_index < shells.length) {
            const shell = shells[shell_index];
            place_electrons(shell, electron_count);
        }
    });
};

const show_electronic_config = (element) => {
    const shell_distribution = distribute_electrons(element);
    const where_to_put = document.querySelector(".electronic_configuration");
    where_to_put.innerHTML = shell_distribution;
}