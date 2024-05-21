let btn = document.getElementById('new-quote');
let quote = document.querySelector(".quote");
let persons = document.querySelector(".person");

const quotes = [
    {
        quote:'"If you dont have time to read, you dont have the time  to write. Simple as that.”',
        person: 'Stephen King'
    },

    {
        quote: '“You should write because you love the shape of stories and sentences and the creation of different words on a page. Writing comes from reading, and reading is the finest teacher of how to write.”' ,
        person:  'Annie Proulx'
    },

    {
        quote: '“Indeed, learning to write may be part of learning to read. For all I know, writing comes out of a superior devotion to reading.”',
        person:  'Eudora Welty'
    },

    {
        quote: '“Read, read, read. Read everything  —  trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. Read! You absorb it. Then write. If its good, you find out. If its not, throw it out of the window.”',
        person: 'William Faulkner'
    },

    {
        quote: '“I kept always two books in my pocket: one to read, one to write in.”' ,
        person: 'Robert Louis Stevenson' 
    }
]

btn.addEventListener("click", function(){
    const random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    persons.innerText = quotes[random].person;

})
