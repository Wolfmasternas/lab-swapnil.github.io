    /*  created by : SwapniL */
document.addEventListener('DOMContentLoaded',()=>{const base=document.querySelector('#base');base.style.visibility="hidden";});window.onload=()=>{showLoader();} 
function showLoader(){const bodyTag=document.querySelector('body');const loaderTag=document.createElement('img');loaderTag.setAttribute('id','loader');loaderTag.src='https://icons8.com/preloaders/preloaders/285/Moving%20blocks.gif';loaderTag.style.height=0x64+'px';loaderTag.style.width=0x64+'px';loaderTag.style.position='absolute';loaderTag.style.top='calc(50% - '+0x32+'px)';loaderTag.style.left='calc(50% - '+0x32+'px)';bodyTag.appendChild(loaderTag);setTimeout(displayContent,0x3E8);}function displayContent(){const loader=document.getElementById('loader');loader.style.visibility="hidden";showIntroCard();}function showIntroCard(){const bodyTag=document.querySelector('body');bodyTag.style.margin=0x0;bodyTag.style.padding=0x0;bodyTag.style.boxSizing='border-box';const surface=document.createElement('div');surface.setAttribute('id','surface-id');surface.style.fontFamily='monospace';surface.style.position='absolute';surface.style.top=0x0;surface.style.zIndex=0x2710;surface.style.backgroundColor='rgb(0, 0, 0, 0.75)';surface.style.height=0x64+'vh';surface.style.width=0x64+'vw';bodyTag.appendChild(surface);const card=document.createElement('div');card.style.position='absolute';card.style.backgroundColor='black';card.style.color='white';card.style.zIndex=0x2710;card.style.height=0x12c+'px';card.style.width=0xdc+'px';card.style.borderRadius=0xa+'px';card.style.padding=0xa+'px';card.style.top='calc(50% - '+0x96+'px)';card.style.left='calc(50% - '+0x69+'px)';card.animate([{transform:'scale(1)'},{transform:'scale(0.9)'},{transform:'scale(1.1)'},{transform:'scale(0.9)'},{transform:'scale(1)'}],{duration:0x190,iterations:0x1,easing:'linear'});surface.appendChild(card);const imgHead=document.createElement('h3');imgHead.style.textAlign='center';const imgTag=document.createElement('img');imgTag.style.height=0x50+'px';imgTag.style.width=0x6e+'px';imgTag.src='https://i.pinimg.com/originals/70/a5/52/70a552e8e955049c8587b2d7606cd6a6.gif';imgHead.appendChild(imgTag);card.appendChild(imgHead);const headTagText=document.createTextNode('Created by:SwapniL');const headTextTag=document.createElement('h3');headTextTag.style.textAlign='center';headTextTag.style.fontSize=0x10+'px';headTextTag.appendChild(headTagText);card.appendChild(headTextTag);const headTag2Text=document.createTextNode('Wanna Play Music??');const headTag2=document.createElement('h1');headTag2.style.textAlign='center';headTag2.style.marginTop=0xe+'px';headTag2.style.fontSize=0xe+'px';headTag2.appendChild(headTag2Text);card.appendChild(headTag2);const para3=document.createElement('h3');para3.style.textAlign='center';card.appendChild(para3);const button=document.createElement('button');button.innerText='sure';button.style.outline='none';button.style.color='white';button.style.border='1px solid white';button.style.backgroundColor='transparent';button.style.padding='0.5em 2em';button.style.marginTop=0xe+'px';button.style.borderRadius=0x5+'px';para3.appendChild(button);button.setAttribute('onclick','hideIntroCard(true)');const button2=document.createElement('button');button2.innerText='nope';button2.style.outline='none';button2.style.color='white';button2.style.border='1px solid white';button2.style.backgroundColor='transparent';button2.style.padding='0.5em 2em';button2.style.marginTop=0xe+'px';button2.style.borderRadius=0x5+'px';para3.appendChild(button2);button2.setAttribute('onclick','hideIntroCard(false)');const music=document.createElement('audio');music.setAttribute('src','https://www.ringtonesfx.com/wp-content/uploads/2/Happy-Birthday-To-You-Ji-Cake-Shake-Hindi-Ringtone.mp3');music.setAttribute('loop','true');music.setAttribute('id','music');bodyTag.appendChild(music);}function hideIntroCard(e){if(e){play();setTimeout(hideLoadOne, 5000);}document.body.removeChild(document.getElementById('surface-id'));const base=document.getElementById('base');base.style.visibility="visible";setTimeout(hideLoadOne, 5000);}function play(){document.getElementById('music').play(); setTimeout(hideLoadOne, 5000);}
/*  created by : SwapniL */
