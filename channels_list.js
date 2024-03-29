const api_url="https://catalogapi.zee5.com/v1/channel?sort_by_field=channel_number&page=1&page_size=126&country=IN&translation=en&languages=en,hi,mr,ta,te";
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

    const sony = ["https://pubads.g.doubleclick.net/ssai/event/FjgK4WcrRrSSthZtnSvXMQ/master.m3u8","https://livehin.fancode.com/hls/live/2093039/5270hindi49752ta-no/1080p.m3u8","https://pubads.g.doubleclick.net/ssai/event/yeYP86THQ4yl7US8Zx5eug/master.m3u8","https://pubads.g.doubleclick.net/ssai/event/Syu8F41-R1y_JmQ7x0oNxQ/master.m3u8",
                    "https://pubads.g.doubleclick.net/ssai/event/nmQFuHURTYGQBNdUG-2Qdw/master.m3u8","https://pubads.g.doubleclick.net/ssai/event/x4LxWUcVSIiDaq1VCM7DSA/master.m3u8",
                    "https://pubads.g.doubleclick.net/ssai/event/DD7fA-HgSUaLyZp9AjRYxQ/master.m3u8",
                "https://pubads.g.doubleclick.net/ssai/event/Qyqz40bSQriqSuAC7R8_Fw/master.m3u8","https://pubads.g.doubleclick.net/ssai/event/HgaB-u6rSpGx3mo4Xu3sLw/master.m3u8",
            "https://pubads.g.doubleclick.net/ssai/event/8FR5Q-WfRWCkbMq_GxZ77w/master.m3u8","https://pubads.g.doubleclick.net/ssai/event/UI4QFJ_uRk6aLxIcADqa_A/master.m3u8",
        "https://pubads.g.doubleclick.net/ssai/event/4Jcu195QTpCNBXGnpw2I6g/master.m3u8","https://pubads.g.doubleclick.net/ssai/event/rPzF28qORbKZkhci_04fdQ/master.m3u8",
    "https://pubads.g.doubleclick.net/ssai/event/H_ZvXWqHRGKpHcdDE5RcDA/master.m3u8","https://pubads.g.doubleclick.net/ssai/event/V73ovbgASP-xGvQQOukwTQ/master.m3u8"];

    const sony_img =["https://fancode.com/skillup-uploads/prod-images/2023/07/PAK-vs-IND_Final-1.png","https://fancode.com/skillup-uploads/prod-images/2022/07/India-Tour-of-West-Indies_Match-Card_02.jpg","http://sptnacdnems02.cdnsrv.jio.com/jiotv.catchup.cdn.jio.com/dare_images/images/Ten_HD.png","http://sptnacdnems02.cdnsrv.jio.com/jiotv.catchup.cdn.jio.com/dare_images/images/Ten2_HD.png",
                        "http://sptnacdnems02.cdnsrv.jio.com/jiotv.catchup.cdn.jio.com/dare_images/images/Ten3_HD.png","http://sptnacdnems02.cdnsrv.jio.com/jiotv.catchup.cdn.jio.com/dare_images/images/Ten_4_Telugu.png",
                        "http://sptnacdnems02.cdnsrv.jio.com/jiotv.catchup.cdn.jio.com/dare_images/images/Six_HD.png",
                    "http://sptnacdnems02.cdnsrv.jio.com/jiotv.catchup.cdn.jio.com/dare_images/images/Sony_Max_HD.png","http://sptnacdnems02.cdnsrv.jio.com/jiotv.catchup.cdn.jio.com/dare_images/images/Sony_SD.png",
                "http://sptnacdnems02.cdnsrv.jio.com/jiotv.catchup.cdn.jio.com/dare_images/images/Sony_Pix_HD.png","http://sptnacdnems02.cdnsrv.jio.com/jiotv.catchup.cdn.jio.com/dare_images/images/Sony_SAB.png",
            "http://sptnacdnems02.cdnsrv.jio.com/jiotv.catchup.cdn.jio.com/dare_images/images/Sony_MAX2.png","http://sptnacdnems02.cdnsrv.jio.com/jiotv.catchup.cdn.jio.com/dare_images/images/Sony_Pal.png",
        "http://sptnacdnems02.cdnsrv.jio.com/jiotv.catchup.cdn.jio.com/dare_images/images/Sony_Wah.png","http://sptnacdnems02.cdnsrv.jio.com/jiotv.catchup.cdn.jio.com/dare_images/images/Sony_BBC_Earth_HD.png"];
    for(let i =0;i<15;i++){
    var div = document.createElement('div');
    var img=document.createElement('img');
    img.setAttribute("src",sony_img[i]);
    var a = document.createElement('a');
    a.setAttribute("href",sony[i]);
    a.appendChild(div);
    div.className = 'sony';
    div.appendChild(img);
    ch_list.appendChild(a);
    }
    for(let i=0; i<126; i++)
    {
    var div = document.createElement('div');
    var img=document.createElement('img');
    var img_val = "https://akamaividz2.zee5.com/image/upload/w_264,h_149,c_scale,f_webp,q_auto:eco/resources/"+data.items[i].id+"/channel_list/"+data.items[i].list_image;
    img.setAttribute("src",img_val);
    div.id = data['items'][i].id;
    div.addEventListener("click",function (){view(this.id)});
    div.className = 'channel';
    div.appendChild(img);
    ch_list.appendChild(div);
    }
    
}
// Calling that async function
getapi(api_url);




