// Document Reference

const course = {
    name: "", time: "", teacher: id, //.....
}

const teacher = {
    id: "", name: ""
}

// Document Embedded

const course = {
    name: "", time: "", teacher: {
        name: ""
        //....
    }, // .....

}


// Document Hybrid

const course = {
    name: "", time: "", teacher: {id: "id", name: "name"}, //.....
}

const teacher = {
    id: "", name: ""
}