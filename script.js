var mainDiv = document.getElementById('main');
function Filter_on_Text(){
    var text = document.getElementById('filter_text').value;
}
function Filter_on_Title(e){
    var title = document.getElementById('filter_title').value;
}
function AddNote(){
    var name_input = document.getElementById('text');
    var info_input = document.getElementById('title');
    var image_input = document.getElementById('image');
    var div_Image = document.createElement('img');
    var div_title = document.createElement('h2');
    var div_Text = document.createElement('h3');
    var newDiv = document.createElement('div');
    var remove_btn = document.createElement('button');
    remove_btn.innerHTML='remove';
    remove_btn.className="remove_btn";
    remove_btn.onclick = (e) => Delete(e);
    div_Image.src = image_input.value;  
    div_Image.alt = 'Фотка не указана';
    div_Image.className = 'img_div';
    div_Text.innerHTML = info_input.value;
    newDiv.className = 'newDiv';
    div_title.className='div_title';
    div_title.innerHTML=name_input.value;

    if(name_input.value==" " || info_input.value==" "){
        alert("Empty data");
    }
    else{
        newDiv.appendChild(div_title);
        newDiv.appendChild(div_Image);
        newDiv.appendChild(div_Text);
        newDiv.appendChild(remove_btn);
        mainDiv.appendChild(newDiv);

        name_input.value=" ";
        info_input.value=" ";
        image_input.value =" ";
    }

}

function Delete(e){
    e.target.parentElement.remove();
}