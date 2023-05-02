const users = [
    {firstName:'Ajay', lastName: 'tyagi', age: 23},
    {firstName:'mummy', lastName: 'ji', age: 48},
    {firstName:'papa', lastName: 'ji', age: 55},
    {firstName:'tanu', lastName: 'bhati', age: 26},
]

const res = users.reduce(function(acc, x) {
    if(x.age < 30){
        acc.push(x.firstName);
    }
    return acc;
}, [])



console.info('res', res);
