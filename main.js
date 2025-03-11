const company = {
    department1: [
        { name: "Ілля", salary: 500 },
        { name: "Марія", salary: 600 }
    ],
    department2: {
        teamA: [
            { name: "Олексій", salary: 700 },
            { name: "Софія", salary: 800 }
        ],
        teamB: [
            { name: "Андрій", salary: 650 },
            { name: "Олена", salary: 550 }
        ],
        teamC: [
            { name: "Марат", salary: 300 },
            { name: "Анна", salary: 400 }
        ]
    },
    department3: [
        { name: "Петро", salary: 1000 },
        { name: "Олівія", salary: 250 },
        { name: "Маруся", salary: 400 }
    ]
};

const calc = (company) => {
    let sum = 0;

    const calc = (department) => {
        if (Array.isArray(department)) {
            sum += department.reduce((acc, employee) => acc + employee.salary, 0);
        } else {
            Object.values(department).forEach(subDept => calc(subDept));
        }
    };

    Object.values(company).forEach(department => calc(department));

    return sum;
};

console.log(calc(company));



