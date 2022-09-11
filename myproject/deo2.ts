var printData = (data: any) => {

    if (typeof (data) === 'string') {
        console.log(`Hello ${data}`)
    }else if (typeof (data) === 'number') {
        console.log(`Square is ${data * 2}`)
    }else if (Array.isArray(data)) {
        data.forEach((element) => {
            if (typeof (element) === 'number' && element % 2 == 0) {
                console.log(element)
            } else if (typeof (element) === 'string') {
                if (element.includes('apple')) {
                    console.log(element);
                }
            }
        })
    } else if (typeof(data) == "object") {
        for (var key in data) {
            console.log(`${key} is ${data[key]}`)
        }
    }

}

printData("priya");
printData(10);
printData(['apple', 'pineapple'])
printData([10, 15, 22])
printData({ name: "Radha", city: "Bangalore" });
