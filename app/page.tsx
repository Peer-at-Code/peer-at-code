'use client';

import AppLink from '@/ui/AppLink';
import { HtmlHTMLAttributes, useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    let visible:boolean = true;
    let animation:boolean = true; //TODO ajouter un bouton pour arreter l'animation
    let con: HTMLElement | null = document.getElementById('console');
    window.setInterval(function() {
      if(con !== null && visible === true && animation === true){
        con.className = 'console invisible';
        visible = false;
      }else if(con !== null && animation ===true){
        con.className = 'console';
        visible = true;
      }
    }, 400);
    let word:HTMLElement | null = document.getElementById('text')
    let text: string= "Peer-at-Code";
    for (let i:number = 0; i < text.length; i++) {
        setTimeout(function(){
        if(word !== null)
          word.innerHTML += text.charAt(i);
      }, 410 * i )
    }
  } , []);
  return (
    <div className="flex h-screen w-full">
      <div className="m-auto flex flex-col">
        <h1 className="text-center text-6xl font-bold">
          Bienvenu sur
        </h1>
        <h1 className='flex text-4xl' >
          <span id="text"></span>
          <div className='console' id="console">&#95;</div>
        </h1>
        <br></br>
        <AppLink href="/dashboard">Dashboard</AppLink>
      </div>
    </div>
  );
}

