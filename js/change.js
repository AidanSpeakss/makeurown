var 2 = document.cookie = 'game2=' + game2input + '"';
var 4 = document.cookie = 'game4=' + game4input + '"';
addStyleString('  .tile.tile-2 .tile-inner { background-image: url("' + 2 + '"}');
addStyleString('  .tile.tile-4 .tile-inner { background-image: url("' + 4 + '"}');



document.body.getElementsByClass('sam')[0].innerHTML = '
<h1> Change Images </h1>
<br>
<p> Image for 2 </p>
<textarea class="input2" placeholder="www.starwars.com/darkvader.png">
</textarea>
<br>
<p> Image for 4 </p>
<textarea class="input4" placeholder="www.starwars.com/lukeskywalker.png">
</textarea>
<br>
<p> Image for 8 </p>
<textarea class="input8" placeholder="www.starwars.com/yoda.png">
</textarea>
<br>
<p> Image for 16 </p>
<textarea class="input16" placeholder="www.starwars.com/samtheevil.png">
</textarea>
<br>
<p> Image for 32 </p>
<textarea class="input32" placeholder="www.starwars.com/aidanthehacker.png">
</textarea>
<br>
<p> Image for 64 </p>
<textarea class="input64" placeholder="www.starwars.com/urmom.png">
</textarea>
<br>
<p> Image for 128 </p>
<textarea class="input128" placeholder="www.starwars.com/urdad.png">
</textarea>
<br>
<p> Image for 256 </p>
<textarea class="input256" placeholder="www.starwars.com/ursister1.png">
</textarea>
<br>
<p> Image for 512 </p>
<textarea class="input512" placeholder="www.starwars.com/ursister2.png">
</textarea>
<br>
<p> Image for 1024 </p>
<textarea class="input1024" placeholder="www.starwars.com/urbrother1.png">
</textarea>
<br>
<p> Image for 2048 </p>
<textarea class="input2048" placeholder="www.starwars.com/urbrother2_aidan_ur_awesome_sam_keep_doing_you.png">
</textarea>
<br>
'
