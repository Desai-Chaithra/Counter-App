const person = {
    name: "Chaithra Desai",
    address: {
        line1: "Bakers street",
        city: "London",
        Country: "UK",
    },

    profiles: ["twitter", "linkedin", "instagram"],
    printProfile: () => {
        person.profiles.map((profile) => {
            console.log(profile)
        })
        console.log(person.profiles[1])}
}



export default function LearningJavaScript(){

    return (
        <>
        <div>{person.name}</div>
        <div>{person.address.line1}</div>
        <div>{person.address.city}</div>
        <div>{person.address.Country}</div>
        <div>{person.profiles[0]}</div>
        <div>{person.printProfile()}</div>
        </>
    )
}

