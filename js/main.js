// Button1 - Change page background on mouse over

var btn1 = document.getElementById('button1');

btn1.addEventListener('mouseenter', function () {
    document.body.className = 'alternate';
});

btn1.addEventListener('mouseout', function () {
    document.body.className = '';
});

// Button2 - Show Cat picture when you mouse down. It vanishes again when you release the mouse button.

var btn2 = document.getElementById('button2');

btn2.addEventListener('mousedown', function () {
    document.getElementById('CatWrapper').style.display = 'block';
});

btn2.addEventListener('mouseup', function () {
    document.getElementById('CatWrapper').style.display = 'none';
});

// Button3 - Show paragraph

var btn3 = document.getElementById('button3');
btn3.addEventListener('click', function () {
    var para = document.createElement('p');
    para.textContent = 'Plop down in the middle where everybody walks play riveting piece on synthesizer keyboard for scoot butt on the rug. Stares at human while pushing stuff off a table toy mouse squeak roll over lick human with sandpaper tongue somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock so brown cats with pink ears meow to be let in. Purr poop in litter box, scratch the walls and poop in the plant pot warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats. Mew stare at ceiling, for sun bathe, and its 3am, time to create some chaos so chase dog then run away or annoy the old grumpy cat, start a fight and then retreat to wash when i lose. Lick the curtain just to be annoying chase imaginary bugs, yet i could pee on this if i had the energy sniff catnip and act crazy. Hide at bottom of staircase to trip human im going to lap some water out of my masters cup meow for chase ball of string mice lick sellotape yowling nonstop the whole night. Cats secretly make all the worlds muffins. Sniff sniff kitten is playing with dead mouse. Cats making all the muffins lick left leg for ninety minutes, still dirty pose purrfectly to show my beauty for ask for petting attack feet. Run around the house at 4 in the morning. Catch mouse and gave it as a present i just saw other cats inside the house and nobody ask me before using my litter box yet leave fur on owners clothes, while happily ignoring when being called so scratch the furniture. Pee in humans bed until he cleans the litter box hunt by meowing loudly at 5am next to human slave food dispenser chase after silly colored fish toys around the house or fall asleep upside-down. Licks paws whos the baby eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap. Push your water glass on the floor hiding behind the couch until lured out by a feathery toy lick sellotape fooled again thinking the dog likes me eat all the power cords, but find something else more interesting annoy owner until he gives you food say meow repeatedly until belly rubs, feels good. Sit on the laptop hiding behind the couch until lured out by a feathery toy or ignore the human until she needs to get up, then climb on her lap and sprawl human give me attention meow. Demand to be let outside at once, and expect owner to wait for me as i think about it have secret plans or find something else more interesting human give me attention meow yet soft kitty warm kitty little ball of furr or sniff other cats butt and hang jaw half open thereafter yet chase imaginary bugs. Cough hairball, eat toilet paper flop over drool and sniff all the things so loved it, hated it, loved it, hated it. Stare at ceiling adventure always, i show my fluffy belly but its a trap! if you pet it i will tear up your hand but attack dog, run away and pretend to be victim lick yarn hanging out of own butt, sleep everywhere, but not in my bed. Love you, then bite you chase laser or sleep for knock over christmas tree refuse to leave cardboard box. Twitch tail in permanent irritation ooh, are those your $250 dollar sandals? lemme use that as my litter box. Eat the rubberband. Thinking longingly about tuna brine peer out window, chatter at birds, lure them to mouth and if human is on laptop sit on the keyboard. Claw at curtains stretch and yawn nibble on tuna ignore human bite human hand meow to be let out flop over, but sit and stare.';
    document.body.appendChild(para);
});
