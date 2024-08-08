/**
 * The definitive data-set for chemical elements
 *
 * @format
 */

/* Collator: Scott Weaver @sweaver2112 */
/* Data collated from many public sources, including those listed below */
/* https://github.com/Bowserinator/Periodic-Table-JSON */
/* wikipedia.com */
/* ptable.com */
/* periodictable.com */

var valenceElectrons = 0;
const elements = {
	H: {
		name: "Hydrogen",
		symbol: "H",
		atomic_number: 1,
		block: "s-block",
	},
	He: {
		name: "Helium",
		symbol: "He",
		atomic_number: 2,
		block: "s-block",
	},
	Li: {
		name: "Lithium",
		symbol: "Li",
		atomic_number: 3,
		block: "s-block",
	},
	Be: {
		name: "Beryllium",
		symbol: "Be",
		atomic_number: 4,
		block: "s-block",
	},
	B: {
		name: "Boron",
		symbol: "B",
		atomic_number: 5,
		block: "p-block",
	},
	C: {
		name: "Carbon",
		symbol: "C",
		atomic_number: 6,
		block: "p-block",
	},
	N: {
		name: "Nitrogen",
		symbol: "N",
		atomic_number: 7,
		block: "p-block",
	},
	O: {
		name: "Oxygen",
		symbol: "O",
		atomic_number: 8,
		block: "p-block",
	},
	F: {
		name: "Fluorine",
		symbol: "F",
		atomic_number: 9,
		block: "p-block",
	},
	Ne: {
		name: "Neon",
		symbol: "Ne",
		atomic_number: 10,
		block: "p-block",
	},
	Na: {
		name: "Sodium",
		symbol: "Na",
		atomic_number: 11,
		block: "s-block",
	},
	Mg: {
		name: "Magnesium",
		symbol: "Mg",
		atomic_number: 12,
		block: "s-block",
	},
	Al: {
		name: "Aluminium",
		symbol: "Al",
		atomic_number: 13,
		block: "p-block",
	},
	Si: {
		name: "Silicon",
		symbol: "Si",
		atomic_number: 14,
		block: "p-block",
	},
	P: {
		name: "Phosphorus",
		symbol: "P",
		atomic_number: 15,
		block: "p-block",
	},
	S: {
		name: "Sulfur",
		symbol: "S",
		atomic_number: 16,
		block: "p-block",
	},
	Cl: {
		name: "Chlorine",
		symbol: "Cl",
		atomic_number: 17,
		block: "p-block",
	},
	Ar: {
		name: "Argon",
		symbol: "Ar",
		atomic_number: 18,
		block: "p-block",
	},
	K: {
		name: "Potassium",
		symbol: "K",
		atomic_number: 19,
		block: "s-block",
	},
	Ca: {
		name: "Calcium",
		symbol: "Ca",
		atomic_number: 20,
		block: "s-block",
	},
	Sc: {
		name: "Scandium",
		symbol: "Sc",
		atomic_number: 21,
		block: "d-block",
	},
	Ti: {
		name: "Titanium",
		symbol: "Ti",
		atomic_number: 22,
		block: "d-block",
	},
	V: {
		name: "Vanadium",
		symbol: "V",
		atomic_number: 23,
		block: "d-block",
	},
	Cr: {
		name: "Chromium",
		symbol: "Cr",
		atomic_number: 24,
		block: "d-block",
	},
	Mn: {
		name: "Manganese",
		symbol: "Mn",
		atomic_number: 25,
		block: "d-block",
	},
	Fe: {
		name: "Iron",
		symbol: "Fe",
		atomic_number: 26,
		block: "d-block",
	},
	Co: {
		name: "Cobalt",
		symbol: "Co",
		atomic_number: 27,
		block: "d-block",
	},
	Ni: {
		name: "Nickel",
		symbol: "Ni",
		atomic_number: 28,
		block: "d-block",
	},
	Cu: {
		name: "Copper",
		symbol: "Cu",
		atomic_number: 29,
		block: "d-block",
	},
	Zn: {
		name: "Zinc",
		symbol: "Zn",
		atomic_number: 30,
		block: "d-block",
	},
	Ga: {
		name: "Gallium",
		symbol: "Ga",
		atomic_number: 31,
		block: "p-block",
	},
	Ge: {
		name: "Germanium",
		symbol: "Ge",
		atomic_number: 32,
		block: "p-block",
	},
	As: {
		name: "Arsenic",
		symbol: "As",
		atomic_number: 33,
		block: "p-block",
	},
	Se: {
		name: "Selenium",
		symbol: "Se",
		atomic_number: 34,
		block: "p-block",
	},
	Br: {
		name: "Bromine",
		symbol: "Br",
		atomic_number: 35,
		block: "p-block",
	},
	Kr: {
		name: "Krypton",
		symbol: "Kr",
		atomic_number: 36,
		block: "p-block",
	},
	Rb: {
		name: "Rubidium",
		symbol: "Rb",
		atomic_number: 37,
		block: "s-block",
	},
	Sr: {
		name: "Strontium",
		symbol: "Sr",
		atomic_number: 38,
		block: "s-block",
	},
	Y: {
		name: "Yttrium",
		symbol: "Y",
		atomic_number: 39,
		block: "d-block",
	},
	Zr: {
		name: "Zirconium",
		symbol: "Zr",
		atomic_number: 40,
		block: "d-block",
	},
	Nb: {
		name: "Niobium",
		symbol: "Nb",
		atomic_number: 41,
		block: "d-block",
	},
	Mo: {
		name: "Molybdenum",
		symbol: "Mo",
		atomic_number: 42,
		block: "d-block",
	},
	Tc: {
		name: "Technetium",
		symbol: "Tc",
		atomic_number: 43,
		block: "d-block",
	},
	Ru: {
		name: "Ruthenium",
		symbol: "Ru",
		atomic_number: 44,
		block: "d-block",
	},
	Rh: {
		name: "Rhodium",
		symbol: "Rh",
		atomic_number: 45,
		block: "d-block",
	},
	Pd: {
		name: "Palladium",
		symbol: "Pd",
		atomic_number: 46,
		block: "d-block",
	},
	Ag: {
		name: "Silver",
		symbol: "Ag",
		atomic_number: 47,
		block: "d-block",
	},
	Cd: {
		name: "Cadmium",
		symbol: "Cd",
		atomic_number: 48,
		block: "d-block",
	},
	In: {
		name: "Indium",
		symbol: "In",
		atomic_number: 49,
		block: "p-block",
	},
	Sn: {
		name: "Tin",
		symbol: "Sn",
		atomic_number: 50,
		block: "p-block",
	},
	Sb: {
		name: "Antimony",
		symbol: "Sb",
		atomic_number: 51,
		block: "p-block",
	},
	Te: {
		name: "Tellurium",
		symbol: "Te",
		atomic_number: 52,
		block: "p-block",
	},
	I: {
		name: "Iodine",
		symbol: "I",
		atomic_number: 53,
		block: "p-block",
	},
	Xe: {
		name: "Xenon",
		symbol: "Xe",
		atomic_number: 54,
		block: "p-block",
	},
	Cs: {
		name: "Cesium",
		symbol: "Cs",
		atomic_number: 55,
		block: "s-block",
	},
	Ba: {
		name: "Barium",
		symbol: "Ba",
		atomic_number: 56,
		block: "s-block",
	},
	La: {
		name: "Lanthanum",
		symbol: "La",
		atomic_number: 57,
		block: "f-block",
	},
	Ce: {
		name: "Cerium",
		symbol: "Ce",
		atomic_number: 58,
		block: "f-block",
	},
	Pr: {
		name: "Praseodymium",
		symbol: "Pr",
		atomic_number: 59,
		block: "f-block",
	},
	Nd: {
		name: "Neodymium",
		symbol: "Nd",
		atomic_number: 60,
		block: "f-block",
	},
	Pm: {
		name: "Promethium",
		symbol: "Pm",
		atomic_number: 61,
		block: "f-block",
	},
	Sm: {
		name: "Samarium",
		symbol: "Sm",
		atomic_number: 62,
		block: "f-block",
	},
	Eu: {
		name: "Europium",
		symbol: "Eu",
		atomic_number: 63,
		block: "f-block",
	},
	Gd: {
		name: "Gadolinium",
		symbol: "Gd",
		atomic_number: 64,
		block: "f-block",
	},
	Tb: {
		name: "Terbium",
		symbol: "Tb",
		atomic_number: 65,
		block: "f-block",
	},
	Dy: {
		name: "Dysprosium",
		symbol: "Dy",
		atomic_number: 66,
		block: "f-block",
	},
	Ho: {
		name: "Holmium",
		symbol: "Ho",
		atomic_number: 67,
		block: "f-block",
	},
	Er: {
		name: "Erbium",
		symbol: "Er",
		atomic_number: 68,
		block: "f-block",
	},
	Tm: {
		name: "Thulium",
		symbol: "Tm",
		atomic_number: 69,
		block: "f-block",
	},
	Yb: {
		name: "Ytterbium",
		symbol: "Yb",
		atomic_number: 70,
		block: "f-block",
	},
	Lu: {
		name: "Lutetium",
		symbol: "Lu",
		atomic_number: 71,
		block: "d-block",
	},
	Hf: {
		name: "Hafnium",
		symbol: "Hf",
		atomic_number: 72,
		block: "d-block",
	},
	Ta: {
		name: "Tantalum",
		symbol: "Ta",
		atomic_number: 73,
		block: "d-block",
	},
	W: {
		name: "Tungsten",
		symbol: "W",
		atomic_number: 74,
		block: "d-block",
	},
	Re: {
		name: "Rhenium",
		symbol: "Re",
		atomic_number: 75,
		block: "d-block",
	},
	Os: {
		name: "Osmium",
		symbol: "Os",
		atomic_number: 76,
		block: "d-block",
	},
	Ir: {
		name: "Iridium",
		symbol: "Ir",
		atomic_number: 77,
		block: "d-block",
	},
	Pt: {
		name: "Platinum",
		symbol: "Pt",
		atomic_number: 78,
		block: "d-block",
	},
	Au: {
		name: "Gold",
		symbol: "Au",
		atomic_number: 79,
		block: "d-block",
	},
	Hg: {
		name: "Mercury",
		symbol: "Hg",
		atomic_number: 80,
		block: "d-block",
	},
	Tl: {
		name: "Thallium",
		symbol: "Tl",
		atomic_number: 81,
		block: "p-block",
	},
	Pb: {
		name: "Lead",
		symbol: "Pb",
		atomic_number: 82,
		block: "p-block",
	},
	Bi: {
		name: "Bismuth",
		symbol: "Bi",
		atomic_number: 83,
		block: "p-block",
	},
	Po: {
		name: "Polonium",
		symbol: "Po",
		atomic_number: 84,
		block: "p-block",
	},
	At: {
		name: "Astatine",
		symbol: "At",
		atomic_number: 85,
		block: "p-block",
	},
	Rn: {
		name: "Radon",
		symbol: "Rn",
		atomic_number: 86,
		block: "p-block",
	},
	Fr: {
		name: "Francium",
		symbol: "Fr",
		atomic_number: 87,
		block: "s-block",
	},
	Ra: {
		name: "Radium",
		symbol: "Ra",
		atomic_number: 88,
		block: "s-block",
	},
	Ac: {
		name: "Actinium",
		symbol: "Ac",
		atomic_number: 89,
		block: "f-block",
	},
	Th: {
		name: "Thorium",
		symbol: "Th",
		atomic_number: 90,
		block: "f-block",
	},
	Pa: {
		name: "Protactinium",
		symbol: "Pa",
		atomic_number: 91,
		block: "f-block",
	},
	U: {
		name: "Uranium",
		symbol: "U",
		atomic_number: 92,
		block: "f-block",
	},
	Np: {
		name: "Neptunium",
		symbol: "Np",
		atomic_number: 93,
		block: "f-block",
	},
	Pu: {
		name: "Plutonium",
		symbol: "Pu",
		atomic_number: 94,
		block: "f-block",
	},
	Am: {
		name: "Americium",
		symbol: "Am",
		atomic_number: 95,
		block: "f-block",
	},
	Cm: {
		name: "Curium",
		symbol: "Cm",
		atomic_number: 96,
		block: "f-block",
	},
	Bk: {
		name: "Berkelium",
		symbol: "Bk",
		atomic_number: 97,
		block: "f-block",
	},
	Cf: {
		name: "Californium",
		symbol: "Cf",
		atomic_number: 98,
		block: "f-block",
	},
	Es: {
		name: "Einsteinium",
		symbol: "Es",
		atomic_number: 99,
		block: "f-block",
	},
	Fm: {
		name: "Fermium",
		symbol: "Fm",
		atomic_number: 100,
		block: "f-block",
	},
	Md: {
		name: "Mendelevium",
		symbol: "Md",
		atomic_number: 101,
		block: "f-block",
	},
	No: {
		name: "Nobelium",
		symbol: "No",
		atomic_number: 102,
		block: "f-block",
	},
	Lr: {
		name: "Lawrencium",
		symbol: "Lr",
		atomic_number: 103,
		block: "d-block",
	},
	Rf: {
		name: "Rutherfordium",
		symbol: "Rf",
		atomic_number: 104,
		block: "d-block",
	},
	Db: {
		name: "Dubnium",
		symbol: "Db",
		atomic_number: 105,
		block: "d-block",
	},
	Sg: {
		name: "Seaborgium",
		symbol: "Sg",
		atomic_number: 106,
		block: "d-block",
	},
	Bh: {
		name: "Bohrium",
		symbol: "Bh",
		atomic_number: 107,
		block: "d-block",
	},
	Hs: {
		name: "Hassium",
		symbol: "Hs",
		atomic_number: 108,
		block: "d-block",
	},
	Mt: {
		name: "Meitnerium",
		symbol: "Mt",
		atomic_number: 109,
		block: "d-block",
	},
	Ds: {
		name: "Darmstadtium",
		symbol: "Ds",
		atomic_number: 110,
		block: "d-block",
	},
	Rg: {
		name: "Roentgenium",
		symbol: "Rg",
		atomic_number: 111,
		block: "d-block",
	},
	Cn: {
		name: "Copernicium",
		symbol: "Cn",
		atomic_number: 112,
		block: "d-block",
	},
	Nh: {
		name: "Nihonium",
		symbol: "Nh",
		atomic_number: 113,
		block: "p-block",
	},
	Fl: {
		name: "Flerovium",
		symbol: "Fl",
		atomic_number: 114,
		block: "p-block",
	},
	Mc: {
		name: "Moscovium",
		symbol: "Mc",
		atomic_number: 115,
		block: "p-block",
	},
	Lv: {
		name: "Livermorium",
		symbol: "Lv",
		atomic_number: 116,
		block: "p-block",
	},
	Ts: {
		name: "Tennessine",
		symbol: "Ts",
		atomic_number: 117,
		block: "p-block",
	},
	Og: {
		name: "Oganesson",
		symbol: "Og",
		atomic_number: 118,
		block: "p-block",
	},
	Uue: {
		name: "Ununennium",
		symbol: "Uue",
		atomic_number: 119,
		block: undefined,
	},
};

const element_list = [
	"H",
	"He",
	"Li",
	"Be",
	"B",
	"C",
	"N",
	"O",
	"F",
	"Ne",
	"Na",
	"Mg",
	"Al",
	"Si",
	"P",
	"S",
	"Cl",
	"Ar",
	"K",
	"Ca",
	"Sc",
	"Ti",
	"V",
	"Cr",
	"Mn",
	"Fe",
	"Co",
	"Ni",
	"Cu",
	"Zn",
	"Ga",
	"Ge",
	"As",
	"Se",
	"Br",
	"Kr",
	"Rb",
	"Sr",
	"Y",
	"Zr",
	"Nb",
	"Mo",
	"Tc",
	"Ru",
	"Rh",
	"Pd",
	"Ag",
	"Cd",
	"In",
	"Sn",
	"Sb",
	"Te",
	"I",
	"Xe",
	"Cs",
	"Ba",
	"La",
	"Ce",
	"Pr",
	"Nd",
	"Pm",
	"Sm",
	"Eu",
	"Gd",
	"Tb",
	"Dy",
	"Ho",
	"Er",
	"Tm",
	"Yb",
	"Lu",
	"Hf",
	"Ta",
	"W",
	"Re",
	"Os",
	"Ir",
	"Pt",
	"Au",
	"Hg",
	"Tl",
	"Pb",
	"Bi",
	"Po",
	"At",
	"Rn",
	"Fr",
	"Ra",
	"Ac",
	"Th",
	"Pa",
	"U",
	"Np",
	"Pu",
	"Am",
	"Cm",
	"Bk",
	"Cf",
	"Es",
	"Fm",
	"Md",
	"No",
	"Lr",
	"Rf",
	"Db",
	"Sg",
	"Bh",
	"Hs",
	"Mt",
	"Ds",
	"Rg",
	"Cn",
	"Nh",
	"Fl",
	"Mc",
	"Lv",
	"Ts",
	"Og",
	"Uue",
];

var list = [];
for (var elm of element_list) {
	var x = document.createElement("option");
	x.text = elm;
	x.value = elm;
	list.push(x);
}
console.log(list);
for (var html of list) {
	//console.log(html);
	document.getElementById("elements").appendChild(html);
}
// Now we have our bare elements.

function get_configeration(element) {
	console.log("<br>");
	const { name, symbol, atomic_number, block } = elements[element];
	const electrons = atomic_number; // NO ISOTOPES
	var used = 0;
	var counter = 0;
	var str = "";
	console.log(`Getting ${symbol}, as #${atomic_number}.`);
	while (used < electrons) {
		var what = "";
		var brk = false;
		var orb = levels[counter];
		var loop;
		var actual;
		if (orb.includes("s")) {
			what = "s";
			loop = 2;
			used += 2;
		} else if (orb.includes("p")) {
			what = "p";
			loop = 6;
			used += 6;
		} else if (orb.includes("d")) {
			what = "d";
			loop = 10;
			used += 10;
		} else if (orb.includes("f")) {
			what = "f";
			loop = 14;
			used += 14;
		} else {
			used = 999999999999;
			return (str = "BAD_CHECK");
		}
		var check = electrons - used;
		if (check < 0) {
			var rm = check * -1;
			actual = (rm - loop) * -1;
			if (actual == 0) {
				actual = orbitals[what];
			}
			//console.info(actual);
			brk = true;
		} else {
			actual = loop;
		}
		console.log(
			`Completed loop ${
				counter + 1
			}, with this loop: ${actual}, total used: ${used}`
		);
		str += orb;
		str += `<sup>${actual}</sup>`;
		counter++;
		if (brk) break;
	}
	//var real = `Element | ${name} <br> Symbol | ${symbol} <br> Block | ${block} <br> Config | ${str}`;
	//return document.getElementById('result').innerHTML = real;
	generateTable(name, symbol, atomic_number, block, str, valenceElectrons);
}

const orbitals = {
	s: 2,
	p: 6,
	d: 10,
	f: 14,
};

const levels = [
	"1s",
	"2s",
	"2p",
	"3s",
	"3p",
	"4s",
	"3d",
	"4p",
	"5s",
	"4d",
	"5p",
	"6s",
	"4f",
	"5d",
	"6p",
	"7s",
	"5f",
	"6d",
	"7p",
	"ext: use sheet",
];

/**
 *
 * @param {string} element
 * @param {string} symbol
 * @param {number} atomic_number
 * @param {string} block
 * @param {string} config
 * @param {number} valence
 * @returns {WroteHTMLtable} table
 */

function generateTable(element, symbol, atomic_number, block, config, valence) {
	document.getElementById("result").innerHTML = `
<div class="container text-center left row justify-content-start">
   <div class='row'>
      <div class="col-6 col-sm-3">Element</div>
      <div class="col-6 col-sm-3">${element}</div>
   </div>
   <div class="row">
      <div class="col-6 col-sm-3">Symbol</div>
      <div class="col-6 col-sm-3">${symbol}</div>
   </div>
   <div class="row">
      <div class="col-6 col-sm-3">Number</div>
      <div class="col-6 col-sm-3">${atomic_number}</div>
   </div>
   <div class="row">
      <div class="col-6 col-sm-3">Block</div>
      <div class="col-6 col-sm-3">${block}</div>
   </div>
   <div class="row">
      <div class="col-6 col-sm-3">Config</div>
      <div class="col-6">${config}</div>
   </div>
   
</div>
`;
}

/* WIP?
<div class="row">
      <div class="col-6 col-sm-3">Valence Electrons</div>
      <div class="col-6 col-sm-3">${valence}</div>
   </div> 
*/
