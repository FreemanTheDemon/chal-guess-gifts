const guessGifts = (wishlist, presents) => {
    let result = [];
    for (let i = 0; i < wishlist.length; i++) {
        if (result.length === presents.length) {
            break;
        }
        let toy = wishlist[i];
        for (let i = 0; i < presents.length; i++) {
            let mystery = presents[i];
            if (toy.size === mystery.size && toy.clatters === mystery.clatters && toy.weight === mystery.weight) {
                result.push(toy.name);
                break;
            }
        }
    }
    return result;
}

var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

console.log(guessGifts(wishlist, presents)); // must return ["Toy Car", "Mini Puzzle"]