const api_url="https://catalogapi.zee5.com/v1/channel?sort_by_field=channel_number&page=1&page_size=90&country=IN&translation=en&languages=en,hi";
const token_url="https://useraction.zee5.com/token/live.php";
const m3u8_link="https://catalogapi.zee5.com/v1/channel/"

async function view(id)
{
    const get_token= await (await fetch(token_url)).json();
    const m3u8= await (await fetch(m3u8_link+id)).json();
    window.open(m3u8.stream_url_hls+get_token.video_token,'_parent');
}

async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    const ch_list=document.getElementById("ch_list");
    // Storing data in form of JSON
    let data = await response.json();

    for(let i=0; i<90; i++)
    {
    var div = document.createElement('div');
    div.id = data['items'][i].id;
    div.innerHTML = data['items'][i].title;
    div.addEventListener("click",function (){view(this.id)});
    div.className = 'channel';
    ch_list.appendChild(div);
    }
    
}
// Calling that async function
getapi(api_url);




