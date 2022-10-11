var mainDiv = document.getElementById('main');
var cards_text = document.getElementsByClassName('postcard__preview-txt');
async function Filter_on_Text() {
    var text = await document.getElementById('filter_text');
    for (let i = 0; i < cards_text.length; i++) {
        if (cards_text[i].innerHTML.includes(text.value)) {
            if (text.value != '') {
                cards_text[i].style.color = 'orange';
            }
        }
        else {
            cards_text[i].style.color = 'white';
        }
    }
}
function Filter_on_Title(e) {
    var title = document.getElementById('filter_title');
}
function AddNote() {
    var text_input = document.getElementById('text');
    var title_input = document.getElementById('title');
    var image_input = document.getElementById('image');

    //remove_btn
    var remove_btn = document.createElement('button');
    remove_btn.innerHTML = 'X';
    remove_btn.className = "tag__item play blue";
    remove_btn.onclick = (e) => Delete(e);

    //postcard__img
    var card_Image = document.createElement('img');
    card_Image.src = image_input.value;
    card_Image.alt = 'Image Title';
    card_Image.className = 'postcard__img';

    //postcard__title blue
    var card_title_h1 = document.createElement('h1');
    var card_text_a = document.createElement('a');
    card_title_h1.className = 'postcard__title blue';
    card_text_a.href = '#';
    card_text_a.innerHTML = title_input.value;
    card_title_h1.appendChild(card_text_a);

    //postcard__img_link
    var card_a_image = document.createElement('a');
    card_a_image.className = 'postcard__img_link';
    card_a_image.href = '#';
    card_a_image.appendChild(card_Image);

    //postcard__preview-txt
    var postcard__preview_txt_div = document.createElement('div');
    postcard__preview_txt_div.className = 'postcard__preview-txt';
    postcard__preview_txt_div.innerHTML = text_input.value;

    //fas_fa_tag_mr_2_i
    var fas_fa_tag_mr_2_i = document.createElement('i');
    fas_fa_tag_mr_2_i.className = 'fas fa-tag mr-2';

    //tag__item__li
    var tag__item__li = document.createElement('li');
    tag__item__li.className = 'tag__item';
    tag__item__li.appendChild(fas_fa_tag_mr_2_i);
    tag__item__li.innerHTML = 'Podcast';

    //tag__item play blue
    var tag__item_play_blue = document.createElement('li');
    tag__item_play_blue.className = 'tag__item play blue';
    tag__item_play_blue.innerHTML = 'X';
    tag__item_play_blue.onclick = (e) => Delete(e);

    //postcard__tagbox
    var postcard__tagbox = document.createElement('ul');
    postcard__tagbox.className = 'postcard__tagbox';
    postcard__tagbox.appendChild(tag__item__li);
    postcard__tagbox.appendChild(tag__item_play_blue);
    //postcard__text - div
    var div_card_text = document.createElement('div');
    div_card_text.className = 'postcard__text';
    div_card_text.appendChild(card_title_h1);
    div_card_text.appendChild(postcard__preview_txt_div);
    div_card_text.appendChild(postcard__tagbox);

    //postcard dark blue - arcticle
    var card_arcticle = document.createElement('arcticle');
    card_arcticle.className = 'postcard dark blue';
    card_arcticle.appendChild(card_a_image);
    card_arcticle.appendChild(div_card_text);



    if (text_input.value == "" || title_input.value == "") {
        alert("Empty data");
    }
    else {
        mainDiv.appendChild(card_arcticle);
        text_input.value = '';
        title_input.value = '';
        image_input.value = '';
    }

}

function Delete(e) {
    e.target.parentElement.parentElement.parentElement.remove();
}



                        
                        