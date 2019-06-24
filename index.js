
var songList = $(`.songlist`);
var button = $(`.submit`);

button.on('click',appendsong);

function appendsong(){
  event.preventDefault();
  var song = $(`.song`).val();
  var album = $(`.album`).val();
  var artist = $(`.artist`).val();


  songList.append(`

    <div class="item">

          <p><input class="checkbox" type="checkbox">${song} from ${album} by ${artist}</p>
    </div>
  `);

$('.song').val("");
$('.album').val("");
$('.artist').val("");

var checkbox = $('.checkbox');
checkbox.on("click", remove);

function remove(){

  event.target.parentNode.remove();
}


}
