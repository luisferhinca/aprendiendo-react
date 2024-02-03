import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  //const midudev = { formatUserName: formatUserName, isFollowing: true, userName: 'midudev' };
  //const pheralb = { formatUserName: formatUserName, isFollowing: false, userName: 'pheralb' };

  return (
    // FORMA 1:
    <section className="App">
      <TwitterFollowCard formatUserName={formatUserName} userName="midudev">
        <strong>Miguel Ángel Durán</strong>
      </TwitterFollowCard>

      <TwitterFollowCard formatUserName={formatUserName} userName="pheralb">
        <strong>Pablo Hernández</strong>
      </TwitterFollowCard>

      <TwitterFollowCard formatUserName={formatUserName} userName="elonmusk">
        <strong>Elon Musk</strong>
      </TwitterFollowCard>

      <TwitterFollowCard formatUserName={formatUserName} userName="vxnder">
        <strong>Vanderhart</strong>
      </TwitterFollowCard>

      <TwitterFollowCard formatUserName={formatUserName} >
        <strong>Algún Otro</strong>
      </TwitterFollowCard>
    </section>

    // FORMA 2:
    /*<section className="App">
      <TwitterFollowCard {...midudev}>
        <strong>Miguel Ángel Durán</strong>
      </TwitterFollowCard>

      <TwitterFollowCard {...pheralb}>
        <strong>Pablo Hernández</strong>
      </TwitterFollowCard>
    </section>
    */
  );
}