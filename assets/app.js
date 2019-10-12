
const string = "AbraCadABraAlakAzam";
// const badString = "123ASDASD$%$#$23elkajsdf";
// const secondString = "IiAaMmAaMmaann";

function removeDuplicates(input) {
    if (!/[^a-z]/i.test(input)) {

        console.log("String is all letters");

        const array = input.split('');
        let dedupeObj = {};
        let dedupedArray = [];
        array.forEach(letter => {
            if (!dedupeObj[letter.toLowerCase()]) {
                dedupedArray.push(letter) 
            }
            dedupeObj[letter.toLowerCase()] = true
        });

        console.log(`Your new string is: ${dedupedArray.join("")}`)
        return true;

    } else {
        console.log("String is not all letters!");
        return false;
    };
};



removeDuplicates(string);
// removeDuplicates(badString);
// removeDuplicates(secondString);

