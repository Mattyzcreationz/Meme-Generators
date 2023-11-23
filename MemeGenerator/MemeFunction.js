//creating a DOMContentLoad to load the content appone SUBMITTION
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("dataHolder");
    //Event listener that will activate when clicking "button"
    document.addEventListener("click", function (event) {
        if (!event.target.classList.contains("form")) {
            return;
        }
        //Library add of the information I want it to load.

        const topOutPut = document.getElementById("topText");
        //Bottom Text inside Form
        const bottomOutPut = document.getElementById("bottomText");
        //Image OutPut
        const imageOutPut = document.getElementById("image");
        //Submit OutPut
        const button = document.getElementById("submit");
        //creating a container Element.
        event.preventDefault();
        //Creating Element Shells
        const topTextCreated = document.createElement('h1');
        topTextCreated.classList.add("toptext");

        topTextCreated.textContent = topOutPut.value;

        const bottomTextCreated = document.createElement('h1');
        bottomTextCreated.classList.add("bottomtext");

        bottomTextCreated.textContent = bottomOutPut.value;

        const imageContent = document.createElement('img');
        imageContent.classList.add('imgbackground');

        imageContent.src = imageOutPut.value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('deleteButton');
        //Delete button/ remove 
        //Creating the Li
        const data = document.createElement("li");
        if (!topTextCreated || !bottomTextCreated || !imageContent) {
            return;
        }
        //setting the Created Divs to the Rules as well as the data the consumer places.
        //Now properly appending the data thje container.      
        data.appendChild(topTextCreated);
        data.appendChild(bottomTextCreated);
        data.appendChild(imageContent);
        data.appendChild(deleteButton);

        //Displaying the Li
        dataHolder.appendChild(data);

        //input feilds should be clear in preporation for the next.
        topOutPut.value = '';
        bottomOutPut.value = '';
        imageOutPut.value = '';

        //On click then imageContent will have a style incress of '2em
        deleteButton.addEventListener('click', function () {
            dataHolder.removeChild(data);
        })

    });
});
//* Completed * Point 1; HTML pages shows a form with three inputs option. Completed.
//Point 4;  Users should be able to click on a button to delete/remove a meme from the page.
//Point 7; Be sure to style your meme generator! it should be functional but also look nice.


//form.addEventListener This will be added when the submit button is clicked