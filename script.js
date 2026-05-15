// window.addEventListener('keydown', function(event) {
//     // 1. Select the audio and div element based on the key pressed
//     // event.key gives us the string name of the key (e.g., "a")
//     const audio = document.querySelector(`audio[data-key="${event.key}"]`);
//     const key = document.querySelector(`.key[data-key="${event.key}"]`);

//     // 2. Safety Check: If no audio is mapped to that key, stop the function
//     if (!audio) return;

//     // 3. The "Rapid Fire" Trick: 
//     // Rewind the audio to the start so it can play again immediately
//     audio.currentTime = 0;
//     audio.play();

//     // 4. Visual Feedback: Add the CSS class
//     key.classList.add('playing');

//     // 5. Cleanup: Use a timer to remove the class after 100 milliseconds
//     setTimeout(function() {
//         key.classList.remove('playing');
//     }, 100);
// });

function playSound(key) {
    // Select the audio element using the semantic data-key
    const audio = document.querySelector(`audio[data-key="${key}"]`);

    // Select the 'li' element (the list item) instead of a generic div
    const keyItem = document.querySelector(`li[data-key="${key}"]`);



    // Guard Clause: Exit if the key pressed doesn't have an audio file
    if (!audio) return;

    // Reset and Play
    audio.currentTime = 0;
    audio.play();



    // Visual State: Update the list item
    keyItem.classList.add('playing');

    // Remove the class after the transition
    setTimeout(function () {
        keyItem.classList.remove('playing');
    }, 100);
}


// Attach the listener to the window
window.addEventListener('keydown', function (event) {
    playSound(event.key.toLowerCase());
});

// Attach click listener to the key list
document.querySelector('.keys').addEventListener('click', function (event) {
    const keyItem = event.target.closest('li[data-key]');
    if (!keyItem) return;
    playSound(keyItem.dataset.key);
});

// function stop(key) {
//     //stop sounds
//     const audio = document.querySelector(`audio[data-key="${key}"]`);

//     //To Stop it
//     audio.load();
//     audio.pause();
//     audio.currentTime = 0;

// };

// window.addEventListener('keydown', function (event) {
//     stop(event.key.toLowerCase());
// });

// document.querySelector('.keys').addEventListener('click', function (event) {
//     const keyItem = event.target.closest('li[data-key]');
//     if (!keyItem) return;
//     stop(keyItem.dataset.key)
// });