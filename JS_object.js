let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

function iterate(arr){
    for (i=0; i < arr.length; i++){
        console.log(Object.keys(arr[i])[0]+": "+ arr[i][Object.keys(arr[i])[0]] + ", " + Object.keys(arr[i])[1]+": "+ arr[i][Object.keys(arr[i])[1]]);
    }
}

function challenge2(obj){
    for (i in obj){
        console.log(i.toUpperCase());
        for (j=0; j < obj[i].length; j++){
            console.log(String(j+1)+" - "+obj[i][j][Object.keys(obj[i][j])[1]].toUpperCase()+", "+obj[i][j][Object.keys(obj[i][j])[0]].toUpperCase()+" - "+String(obj[i][j][Object.keys(obj[i][j])[1]].length+obj[i][j][Object.keys(obj[i][j])[0]].length));
        }
    }
}
challenge2(users);