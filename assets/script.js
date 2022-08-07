const GAME_IN_BTN = document.getElementById('game-input-submit');
const VIDEO = document.getElementById('video');

GAME_IN_BTN.addEventListener('click', function(){

    const RE_COMBO_1 = /(7681)/;
    const RE_COMBO_2 = /(1234)/;
    const RE_COMBO_3 = /(864)/;

    const GAME_IN_TEXT = document.getElementById('game-input-text');
    const COMBO = GAME_IN_TEXT.value;
    console.log(COMBO);

    if(RE_COMBO_1.test(COMBO) == true){
        console.log("Chain React");
        VIDEO.src = "/videos/Chain React.mp4";
        VIDEO.play();
        VIDEO.loop = true;

    }else if(RE_COMBO_2.test(COMBO) == true){
        console.log("Victory Pose");
        VIDEO.src = "/videos/Hellfire Kata.mp4";
        VIDEO.play();
        VIDEO.loop = true;

    }else if(RE_COMBO_3.test(COMBO) == true){
        console.log("Get Over Here!");
        VIDEO.src = "/videos/Get Over Here.mp4";
        VIDEO.play();
        VIDEO.loop = true;

    }else{
        console.log("Not Exist");
        VIDEO.src = "/videos/gallo.mp4";
        VIDEO.play();
        VIDEO.loop = true;
    }
});

console.log(VIDEO.src);

