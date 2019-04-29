var 2 = document.cookie = 'game2=' + game2input + '"';
var 4 = document.cookie = 'game4=' + game4input + '"';
var 8 = document.cookie = 'game8=' + game8input + '"';
var 16 = document.cookie = 'game16=' + game16input + '"';
var 32 = document.cookie = 'game32=' + game32input + '"';
var 64 = document.cookie = 'game64=' + game64input + '"';
var 128 = document.cookie = 'game128=' + game128input + '"';
var 256 = document.cookie = 'game256=' + game256input + '"';
var 512 = document.cookie = 'game512=' + game512input + '"';
var 1024 = document.cookie = 'game1024=' + game1024input + '"';
var 2048 = document.cookie = 'game2048=' + game2048input + '"';
var game2input = document.getElementsByClassName("input2")[0].value;
var game4input = document.getElementsByClassName("input4")[0].value;
var game8input = document.getElementsByClassName("input8")[0].value;
var game16input = document.getElementsByClassName("input16")[0].value;
var game32input = document.getElementsByClassName("input32")[0].value;
var game64input = document.getElementsByClassName("input64")[0].value;
var game128input = document.getElementsByClassName("input128")[0].value;
var game256input = document.getElementsByClassName("input256")[0].value;
var game512input = document.getElementsByClassName("input512")[0].value;
var game1024input = document.getElementsByClassName("input1024")[0].value;
var game2048input = document.getElementsByClassName("input2048")[0].value;
addStyleString('  .tile.tile-2 .tile-inner { background-image: url("' + 2 + '"}');
addStyleString('  .tile.tile-4 .tile-inner { background-image: url("' + 4 + '"}');
addStyleString('  .tile.tile-8 .tile-inner { background-image: url("' + 8 + '"}');
addStyleString('  .tile.tile-16 .tile-inner { background-image: url("' + 16 + '"}');
addStyleString('  .tile.tile-32 .tile-inner { background-image: url("' + 32 + '"}');
addStyleString('  .tile.tile-64 .tile-inner { background-image: url("' + 64 + '"}');
addStyleString('  .tile.tile-128 .tile-inner { background-image: url("' + 128 + '"}');
addStyleString('  .tile.tile-256 .tile-inner { background-image: url("' + 256 + '"}');
addStyleString('  .tile.tile-512 .tile-inner { background-image: url("' + 512 + '"}');
addStyleString('  .tile.tile-1024 .tile-inner { background-image: url("' + 1024 + '"}');
addStyleString('  .tile.tile-2048 .tile-inner { background-image: url("' + 2048 + '"}');






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
