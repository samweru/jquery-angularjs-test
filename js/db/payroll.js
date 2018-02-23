function newDate(date){

	var d = new Date(date);

	return d.toDateString();
}

users = TAFFY([

	{
		username:"sa", 
		password:"p@55w0rd",
		role:1
	}
])

period = TAFFY([

	{
		id:1,
		start: newDate("01/01/2018"),
		end: newDate("01/31/2018"),
		status: "Closed",
		active: false
	},
	{
		id:2,
		start: newDate("02/01/2018"),
		end: newDate("02/28/2018"),
		status: "Open",
		active: true
	}
])

roles = TAFFY([
	
	{
		id:1,
		name:'Administrator',
		descr:'Super Administrator/Root User'
	},
	{
		id:2,
		name:'Payroll Administrator',
		descr:'Payroll Administrator/Payroll Manager'
	},
	{
		id:4,
		name:'Payroll User',
		descr:'Normal User/Payroll User'
	}
]);

depts = TAFFY([

	{
		id:1,
		alias:'HR',
		descr:'Human Resource Department'
	},
	{
		id:3,
		alias:'FIN',
		descr:'Finance Department'
	},
	{
		id:4,
		alias:'IT',
		descr:'Information Technology and Support'
	}
])

posts = TAFFY([

	{
		id:1,
		dept:1,
		name:'HR Manager',
		descr:'Human Resource Managers'
	},
	{
		id:3,
		dept:3,
		name:'Finance Manager',
		descr:'Finance Head'
	}
]);

benefits = TAFFY([

	{
		id:5,
		name:'Travel Expenses',
		amount:"10000.00",
		descr:'N/A',
		percentage:"False",
		deduct:"False",
		taxable:"False",
		active:"True"
	},
	{
		id:6,
		name:'Child Allowance',
		amount:"10",
		descr:'N/A',
		percentage:"True",
		deduct:"False",
		taxable:"False",
		active:"False"
	},
	{
		id:9,
		name:'Housing Allowance',
		amount:"10000.00",
		descr:'N/A',
		percentage:"False",
		deduct:"False",
		taxable:"True",
		active:"True"
	},
	{
		id:11,
		name:"NHIF",
		amount:"320.00",
		descr:"National Hospital Insurance Fund",
		percentage:"False",
		deduct:"True",
		taxable:"False",
		active:"True"
	},
	{
		id:12,
		name:"NSSF",
		amount:"320.00",
		descr:"National Social Security Fund",
		percentage:"False",
		deduct:"True",
		taxable:"False",
		active:"True"
	}
])

employees = TAFFY([

	{
		"id": 1, 
		"email": "dena.delzell@hotmail.com",
		"county": "Nakuru", 
		"mobile": "7977625049", 
		"status": "Active",
		"address": "Superland",
		"married": "No",
		"employed": "Yes",
		"lastname": "Delzell", 
		"firstname": "Dena"
	},
	{
		"id": 2, 
		"email": "veola.fansler@gmail.com",
		"county": "Nakuru", 
		"mobile": "7843026380", 
		"status": "Inactive",
		"address": "Koleni",
		"married": "Not Stated",
		"employed": "Yes",
		"lastname": "Fansler", 
		"firstname": "Veola"
	},
	{
		"id": 3, 
		"email": "joanie.brenner@hotmail.com",
		"county": "Birmingham", 
		"mobile": "7849307870", 
		"status": "Active",
		"address": "Superland",
		"married": "No",
		"employed": "Self",
		"lastname": "Brenner", 
		"firstname": "Joanie"
	},
	{
		"id": 4, 
		"email": "sharyl.seibert@ymail.com",
		"county": "Fairy Tale", 
		"mobile": "7833196426", 
		"status": "Pending",
		"address": "Superland",
		"married": "Not Stated",
		"employed": "No",
		"lastname": "Seibert", 
		"firstname": "Sharyl"
	},
	{
		"id": 5, 
		"email": "zulma.abrev@gmail.com",
		"county": "Birmingham", 
		"mobile": "7839917497", 
		"status": "Inactive",
		"address": "Superland",
		"married": "Yes",
		"employed": "Self",
		"lastname": "Abrev", 
		"firstname": "Zulma"
	},
	{
		"id": 6, 
		"email": "delphine.hepburn@ymail.com",
		"county": "Kisumu", 
		"mobile": "7890240541", 
		"status": "Inactive",
		"address": "Westbrough",
		"married": "Yes",
		"employed": "No",
		"lastname": "Hepburn", 
		"firstname": "Delphine"
	},
	{
		"id": 7, 
		"email": "marcus.effinger@ymail.com",
		"county": "Nairobi", 
		"mobile": "7935219948", 
		"status": "Pending",
		"address": "Superland",
		"married": "Not Stated",
		"employed": "Self",
		"lastname": "Effinger", 
		"firstname": "Marcus"
	},
	{
		"id": 8, 
		"email": "cleo.hysell@ymail.com",
		"county": "Nakuru", 
		"mobile": "7918735957", 
		"status": "Inactive",
		"address": "Westbrough",
		"married": "Yes",
		"employed": "Yes",
		"lastname": "Hysell", 
		"firstname": "Cleo"
	},
	{
		"id": 9, 
		"email": "yuk.effinger@hotmail.com",
		"county": "Winchester", 
		"mobile": "7813164374", 
		"status": "Active",
		"address": "Superland",
		"married": "Yes",
		"employed": "Yes",
		"lastname": "Effinger", 
		"firstname": "Yuk"
	},
	{
		"id": 10, 
		"email": "sharyl.allbright@ymail.com",
		"county": "Fairy Tale", 
		"mobile": "7879904217", 
		"status": "Active",
		"address": "Koleni",
		"married": "Yes",
		"employed": "Yes",
		"lastname": "Allbright", 
		"firstname": "Sharyl"
	},
	{
		"id": 11, 
		"email": "sallie.seibert@hotmail.com",
		"county": "Winchester", 
		"mobile": "7844754456", 
		"status": "Active",
		"address": "Superland",
		"married": "Not Stated",
		"employed": "Self",
		"lastname": "Seibert", 
		"firstname": "Sallie"
	},
	{
		"id": 12, 
		"email": "makeda.lemaire@hotmail.com",
		"county": "Fairy Tale", 
		"mobile": "7859950053", 
		"status": "Pending",
		"address": "Lando",
		"married": "Yes",
		"employed": "Self",
		"lastname": "Lemaire", 
		"firstname": "Makeda"
	},
	{
		"id": 13, 
		"email": "marietta.sabella@ymail.com",
		"county": "Winchester", 
		"mobile": "7894658665", 
		"status": "Active",
		"address": "Superland",
		"married": "Not Stated",
		"employed": "No",
		"lastname": "Sabella", 
		"firstname": "Marietta"
	},
	{
		"id": 14, 
		"email": "francisca.ertel@gmail.com",
		"county": "Winchester", 
		"mobile": "7829596315", 
		"status": "Pending",
		"address": "Bedrock",
		"married": "Not Stated",
		"employed": "No",
		"lastname": "Ertel", 
		"firstname": "Francisca"
	},
	{
		"id": 15, 
		"email": "lakia.sabella@hotmail.com",
		"county": "Nakuru", 
		"mobile": "7899434488", 
		"status": "Inactive",
		"address": "Westbrough",
		"married": "Not Stated",
		"employed": "Self",
		"lastname": "Sabella", 
		"firstname": "Lakia"
	},
	{
		"id": 16, 
		"email": "joanie.brenner@hotmail.com",
		"county": "Winchester", 
		"mobile": "7990301522", 
		"status": "Inactive",
		"address": "Bedrock",
		"married": "Yes",
		"employed": "Yes",
		"lastname": "Brenner", 
		"firstname": "Joanie"
	},
	{
		"id": 17, 
		"email": "chun.alvelo@gmail.com",
		"county": "Birmingham", 
		"mobile": "7828257778", 
		"status": "Active",
		"address": "Bedrock",
		"married": "Not Stated",
		"employed": "No",
		"lastname": "Alvelo", 
		"firstname": "Chun"
	},
	{
		"id": 18, 
		"email": "ha.respass@ymail.com",
		"county": "Birmingham", 
		"mobile": "7979165696", 
		"status": "Pending",
		"address": "Koleni",
		"married": "Not Stated",
		"employed": "Yes",
		"lastname": "Respass", 
		"firstname": "Ha"
	},
	{
		"id": 19, 
		"email": "marcus.ramos@hotmail.com",
		"county": "Winchester", 
		"mobile": "7976066458", 
		"status": "Pending",
		"address": "Superland",
		"married": "No",
		"employed": "No",
		"lastname": "Ramos", 
		"firstname": "Marcus"
	},
	{
		"id": 20, 
		"email": "raquel.beson@gmail.com",
		"county": "Nakuru", 
		"mobile": "7921852316", 
		"status": "Pending",
		"address": "Koleni",
		"married": "No",
		"employed": "Self",
		"lastname": "Beson", 
		"firstname": "Raquel"
	},
	{
		"id": 21, 
		"email": "morgan.ramos@gmail.com",
		"county": "Birmingham", 
		"mobile": "7908967698", 
		"status": "Pending",
		"address": "Koleni",
		"married": "Not Stated",
		"employed": "Self",
		"lastname": "Ramos", 
		"firstname": "Morgan"
	},
	{
		"id": 22, 
		"email": "kent.haddock@ymail.com",
		"county": "Birmingham", 
		"mobile": "7795269626", 
		"status": "Active",
		"address": "Superland",
		"married": "No",
		"employed": "Yes",
		"lastname": "Haddock", 
		"firstname": "Kent"
	},
	{
		"id": 23, 
		"email": "morgan.driskell@ymail.com",
		"county": "Nakuru", 
		"mobile": "7913527001", 
		"status": "Pending",
		"address": "Westbrough",
		"married": "Not Stated",
		"employed": "Yes",
		"lastname": "Driskell", 
		"firstname": "Morgan"
	},
	{
		"id": 24, 
		"email": "chun.abrev@ymail.com",
		"county": "Winchester", 
		"mobile": "7981821696", 
		"status": "Pending",
		"address": "Koleni",
		"married": "Not Stated",
		"employed": "Yes",
		"lastname": "Abrev", 
		"firstname": "Chun"
	},
	{
		"id": 25, 
		"email": "clare.delzell@ymail.com",
		"county": "Nairobi", 
		"mobile": "7821935077", 
		"status": "Active",
		"address": "Koleni",
		"married": "No",
		"employed": "Self",
		"lastname": "Delzell", 
		"firstname": "Clare"
	},
	{
		"id": 26, 
		"email": "princess.hoeppner@gmail.com",
		"county": "Birmingham", 
		"mobile": "7951463052", 
		"status": "Inactive",
		"address": "Westbrough",
		"married": "No",
		"employed": "No",
		"lastname": "Hoeppner", 
		"firstname": "Princess"
	},
	{
		"id": 27, 
		"email": "veola.hepburn@ymail.com",
		"county": "Kisumu", 
		"mobile": "7831714012", 
		"status": "Inactive",
		"address": "Bedrock",
		"married": "No",
		"employed": "No",
		"lastname": "Hepburn", 
		"firstname": "Veola"
	},
	{
		"id": 28, 
		"email": "belle.sher@hotmail.com",
		"county": "Nakuru", 
		"mobile": "7816381368", 
		"status": "Inactive",
		"address": "Koleni",
		"married": "Not Stated",
		"employed": "Yes",
		"lastname": "Sher", 
		"firstname": "Belle"
	},
	{
		"id": 29, 
		"email": "peter.hoeppner@ymail.com",
		"county": "Kisumu", 
		"mobile": "7936714616", 
		"status": "Active",
		"address": "Superland",
		"married": "Yes",
		"employed": "Yes",
		"lastname": "Hoeppner", 
		"firstname": "Peter"
	},
	{
		"id": 30, 
		"email": "peter.ramos@hotmail.com",
		"county": "Kisumu", 
		"mobile": "7973812179", 
		"status": "Inactive",
		"address": "Koleni",
		"married": "Yes",
		"employed": "No",
		"lastname": "Ramos", 
		"firstname": "Peter"
	},
	{
		"id": 31, 
		"email": "ha.sereno@ymail.com",
		"county": "Kisumu", 
		"mobile": "7987999398", 
		"status": "Inactive",
		"address": "Westbrough",
		"married": "Yes",
		"employed": "Yes",
		"lastname": "Sereno", 
		"firstname": "Ha"
	},
	{
		"id": 32, 
		"email": "veola.stutz@ymail.com",
		"county": "Kisumu", 
		"mobile": "7777187152", 
		"status": "Inactive",
		"address": "Bedrock",
		"married": "Not Stated",
		"employed": "Self",
		"lastname": "Stutz", 
		"firstname": "Veola"
	},
	{
		"id": 33, 
		"email": "peter.sereno@gmail.com",
		"county": "Nairobi", 
		"mobile": "7923590748", 
		"status": "Active",
		"address": "Bedrock",
		"married": "Yes",
		"employed": "Self",
		"lastname": "Sereno", 
		"firstname": "Peter"
	},
	{
		"id": 34, 
		"email": "zulma.koelling@gmail.com",
		"county": "Nakuru", 
		"mobile": "7991905546", 
		"status": "Active",
		"address": "Westbrough",
		"married": "No",
		"employed": "Self",
		"lastname": "Koelling", 
		"firstname": "Zulma"
	},
	{
		"id": 35, 
		"email": "chauncey.stutz@hotmail.com",
		"county": "Fairy Tale", 
		"mobile": "7900923852", 
		"status": "Active",
		"address": "Lando",
		"married": "No",
		"employed": "Yes",
		"lastname": "Stutz", 
		"firstname": "Chauncey"
	},
	{
		"id": 36, 
		"email": "kent.abrev@ymail.com",
		"county": "Birmingham", 
		"mobile": "7923020198", 
		"status": "Pending",
		"address": "Westbrough",
		"married": "Not Stated",
		"employed": "Yes",
		"lastname": "Abrev", 
		"firstname": "Kent"
	},
	{
		"id": 37, 
		"email": "dena.ramos@hotmail.com",
		"county": "Winchester", 
		"mobile": "7940321700", 
		"status": "Inactive",
		"address": "Westbrough",
		"married": "No",
		"employed": "Yes",
		"lastname": "Ramos", 
		"firstname": "Dena"
	},
	{
		"id": 38, 
		"email": "chauncey.abrev@hotmail.com",
		"county": "Nairobi", 
		"mobile": "7955760737", 
		"status": "Active",
		"address": "Bedrock",
		"married": "Yes",
		"employed": "Self",
		"lastname": "Abrev", 
		"firstname": "Chauncey"
	},
	{
		"id": 39, 
		"email": "randee.highfield@hotmail.com",
		"county": "Birmingham", 
		"mobile": "7925737110", 
		"status": "Inactive",
		"address": "Superland",
		"married": "Yes",
		"employed": "Yes",
		"lastname": "Highfield", 
		"firstname": "Randee"
	},
	{
		"id": 40, 
		"email": "lakeisha.batton@gmail.com",
		"county": "Nairobi", 
		"mobile": "7849879504", 
		"status": "Inactive",
		"address": "Superland",
		"married": "Not Stated",
		"employed": "No",
		"lastname": "Batton", 
		"firstname": "Lakeisha"
	},
	{
		"id": 41, 
		"email": "cleo.hepburn@hotmail.com",
		"county": "Nairobi", 
		"mobile": "7904137614", 
		"status": "Active",
		"address": "Bedrock",
		"married": "Not Stated",
		"employed": "Yes",
		"lastname": "Hepburn", 
		"firstname": "Cleo"
	},
	{
		"id": 42, 
		"email": "clare.haddock@hotmail.com",
		"county": "Nairobi", 
		"mobile": "7799830005", 
		"status": "Active",
		"address": "Superland",
		"married": "No",
		"employed": "Yes",
		"lastname": "Haddock", 
		"firstname": "Clare"
	},
	{
		"id": 43, 
		"email": "frances.stutz@ymail.com",
		"county": "Kisumu", 
		"mobile": "7858299910", 
		"status": "Pending",
		"address": "Lando",
		"married": "Yes",
		"employed": "Self",
		"lastname": "Stutz", 
		"firstname": "Frances"
	},
	{
		"id": 44, 
		"email": "delphine.sher@hotmail.com",
		"county": "Birmingham", 
		"mobile": "7810693229", 
		"status": "Active",
		"address": "Westbrough",
		"married": "No",
		"employed": "No",
		"lastname": "Sher", 
		"firstname": "Delphine"
	},
	{
		"id": 45, 
		"email": "raquel.sickler@ymail.com",
		"county": "Birmingham", 
		"mobile": "7876889336", 
		"status": "Active",
		"address": "Lando",
		"married": "No",
		"employed": "Self",
		"lastname": "Sickler", 
		"firstname": "Raquel"
	},
	{
		"id": 46, 
		"email": "dena.ramos@hotmail.com",
		"county": "Fairy Tale", 
		"mobile": "7864764946", 
		"status": "Inactive",
		"address": "Koleni",
		"married": "Yes",
		"employed": "No",
		"lastname": "Ramos", 
		"firstname": "Dena"
	},
	{
		"id": 47, 
		"email": "brook.bowens@gmail.com",
		"county": "Winchester", 
		"mobile": "7875175158", 
		"status": "Inactive",
		"address": "Westbrough",
		"married": "Yes",
		"employed": "No",
		"lastname": "Bowens", 
		"firstname": "Brook"
	},
	{
		"id": 48, 
		"email": "michael.hysell@gmail.com",
		"county": "Fairy Tale", 
		"mobile": "7871552281", 
		"status": "Inactive",
		"address": "Bedrock",
		"married": "No",
		"employed": "No",
		"lastname": "Hysell", 
		"firstname": "Michael"
	},
	{
		"id": 49, 
		"email": "michael.abrev@gmail.com",
		"county": "Fairy Tale", 
		"mobile": "7832423780", 
		"status": "Pending",
		"address": "Koleni",
		"married": "No",
		"employed": "No",
		"lastname": "Abrev", 
		"firstname": "Michael"
	},
	{
		"id": 50, 
		"email": "belle.sher@ymail.com",
		"county": "Winchester", 
		"mobile": "7968210634", 
		"status": "Pending",
		"address": "Lando",
		"married": "Not Stated",
		"employed": "Self",
		"lastname": "Sher", 
		"firstname": "Belle"
	}
]);