import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Index = () => (
  <>
    <Head>
      <title>Mathias Lindholm</title>
      <meta name="author" content="Mathias Lindholm" />
      <meta name="description" content="Mathias Lindholm is a product designer from Helsinki" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="https://www.gravatar.com/avatar/a99d3b485de42ba1f8e0fc81e1cb3d65?s=64" />
    </Head>
    <Header
      image="https://www.gravatar.com/avatar/a99d3b485de42ba1f8e0fc81e1cb3d65?s=250"
      title="Mathias Lindholm"
      description="📍 Helsinki, Finland"
    />
    <main>
      <section>
        <p>I’m a product designer from Helsinki with a love for mountain biking, pizza, craft beer and the great outdoors.</p>
        <p>For the past 10 years, I’ve worked as a designer across various business sectors, delivering successful digital products in outstanding teams.</p>
        <p>Currently I’m working at <a href="https://about.neverthink.tv">Neverthink</a> as VP&nbsp;of&nbsp;Product.</p>
      </section>
      <section>
        <h2>Highlights</h2>
        <table>
          <tr>
            <td>2018</td>
            <td>Took a leap of faith and joined a small startup</td>
          </tr>
          <tr>
            <td>2018</td>
            <td>Shut down <a href="https://dookie-1a65d.firebaseapp.com">Dookie</a></td>
          </tr>
          <tr>
            <td>2016</td>
            <td>Released <a href="https://simplepinapp.com/">Simplepin</a></td>
          </tr>
          <tr>
            <td>2015</td>
            <td>Lead the rebranding of <a href="https://amplerbikes.com/">Ampler</a></td>
          </tr>
          <tr>
            <td>2013</td>
            <td>Made the switch from ad agency to tech consultancy</td>
          </tr>
          <tr>
            <td>2012</td>
            <td>Designed my first typeface <a href="https://github.com/mlindholm/resultat">Resultat</a></td>
          </tr>
          <tr>
            <td>2008</td>
            <td>Started my design studies</td>
          </tr>
        </table>
      </section>
      <section>
        <h2>Elsewhere</h2>
        <table>
          <tr>
            <td>Twitter</td>
            <td><a href="https://twitter.com/thisismatu">@thisismatu</a></td>
          </tr>
          <tr>
            <td>GitHub</td>
            <td><a href="https://github.com/mlindholm">@mlindholm</a></td>
          </tr>
          <tr>
            <td>Dribble</td>
            <td><a href="https://dribbble.com/mlindholm/">@mlindholm</a></td>
          </tr>
        </table>
      </section>
    </main>
    <Footer />
  </>
)

export default Index
