import Head from 'next/head'

const Index = () => {
  return (
    <>
      <Head>
        <title>Mathias Lindholm</title>
        <meta name="author" content="Mathias Lindholm" />
        <meta name="description" content="Mathias Lindholm is a product designer from Helsinki" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="https://www.gravatar.com/avatar/a99d3b485de42ba1f8e0fc81e1cb3d65?s=64" />
        <link href="https://fonts.googleapis.com/css2?family=Yrsa:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <h1>Mathias Lindholm</h1>
      <p>I’m a product designer from Helsinki with a love for mountain biking, pizza, craft beer and the great outdoors.</p>
      <p>For the past 10 years, I’ve worked as a designer across various business sectors, delivering successful digital products in outstanding teams.</p>
      <p>Currently I’m working at <a href="https://about.neverthink.tv" target="_blank" rel="noopener noreferrer">Neverthink</a> as VP&nbsp;of&nbsp;Product.</p>
      <h2>Highlights</h2>
      <table>
        <tbody>
          <tr>
            <td>2018</td>
            <td>Took a leap of faith and joined a small startup</td>
          </tr>
          <tr>
            <td>2018</td>
            <td>Shut down <a href="https://dookie-1a65d.firebaseapp.com" target="_blank" rel="noopener noreferrer">Dookie</a></td>
          </tr>
          <tr>
            <td>2016</td>
            <td>Released <a href="https://simplepinapp.com/" target="_blank" rel="noopener noreferrer">Simplepin</a></td>
          </tr>
          <tr>
            <td>2015</td>
            <td>Lead the rebranding of <a href="https://amplerbikes.com/" target="_blank" rel="noopener noreferrer">Ampler</a></td>
          </tr>
          <tr>
            <td>2013</td>
            <td>Made the switch from ad agency to tech consultancy</td>
          </tr>
          <tr>
            <td>2012</td>
            <td>Designed my first typeface <a href="https://github.com/mlindholm/resultat" target="_blank" rel="noopener noreferrer">Resultat</a></td>
          </tr>
          <tr>
            <td>2008</td>
            <td>Started my design studies</td>
          </tr>
        </tbody>
      </table>
      <h2>Elsewhere</h2>
      <table>
        <tbody>
          <tr>
            <td>Twitter</td>
            <td><a href="https://twitter.com/thisismatu" target="_blank" rel="noopener noreferrer">@thisismatu</a></td>
          </tr>
          <tr>
            <td>GitHub</td>
            <td><a href="https://github.com/mlindholm" target="_blank" rel="noopener noreferrer">@mlindholm</a></td>
          </tr>
          <tr>
            <td>Dribble</td>
            <td><a href="https://dribbble.com/mlindholm/" target="_blank" rel="noopener noreferrer">@mlindholm</a></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Index
