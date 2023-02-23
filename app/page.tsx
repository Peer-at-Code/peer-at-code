'use client';

import AppLink from '@/ui/AppLink';
<<<<<<< Updated upstream
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
=======
import { useEffect } from 'react';


export default function Home() {
  let start: boolean = true;
  useEffect(() => {
    if (start) {
      start = false;
      let visible: boolean = true;
      let animation: boolean = true; //TODO ajouter un bouton pour arreter l'animation
      let con: HTMLElement | null = document.getElementById('console');
      window.setInterval(function () {
        if (con !== null && visible === true && animation === true) {
          con.className = 'console invisible';
          visible = false;
        } else if (con !== null && animation === true) {
          con.className = 'console';
          visible = true;
        }
      }, 400);
      let word: HTMLElement | null = document.getElementById('text')
      let text: string = "Peer-at-Code";
      for (let i: number = 0; i < text.length; i++) {
        setTimeout(function () {
          if (word !== null)
            word.innerHTML += text.charAt(i);
        }, 410 * i)
      }
    }
  }, []);
  return (
    <div>
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
      <div className="flex h-screen w-full">
        <div className="text-center m-auto flex flex-col  space-x-0 md:flex-row md:space-x-6 md:space-y-0">
          <img className='md:w-2/6 ml-[11%] sm:w-0 w-0 ' src='https://media.discordapp.net/attachments/1070815084718334032/1074104191921959003/glazk0_a_minimalistic_logo_that_is_a_pirate_logo_white_and_blac_9b4eb1dd-5979-45dd-a70a-f880ee3b49ca.png?width=586&height=586'></img>
          <p className='self-center md:w-2/6 sm:w-3/6 w-4/6 text-justify'>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
          </p>  
        </div>
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

