import DefaultTags from '@/ui/DefaultTags';

export default function Head() {
  return (
    <>
      <DefaultTags />

      <title>Peer-at Code</title>

      <meta name="title" content="Peer-at Code" />

      <meta
        name="description"
        content="Peer-at Code a pour but de donner l’envie de coder et d’apprendre par le jeu!"
      />

      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content="https://peer-at-code.be/" /> */}
      <meta property="og:title" content="Peer-at Code" />
      <meta
        property="og:description"
        content="Peer-at Code a pour but de donner l’envie de coder et d’apprendre par le jeu!"
      />

      {/* <meta property="og:image" content="/assets/social.jpg" /> */}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://peet-at-code.be/" />
      <meta property="twitter:title" content="Peer-at Code" />
      <meta
        property="twitter:description"
        content="Peer-at Code a pour but de donner l’envie de coder et d’apprendre par le jeu!"
      />
      {/* <meta property="twitter:image" content="/assets/social.jpg" /> */}
    </>
  );
}
