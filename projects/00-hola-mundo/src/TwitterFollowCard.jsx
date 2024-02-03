export function TwitterFollowCard ({ children, formatUserName, userName = 'unknown', isFollowing }) {
  //const imageSrc = `https://unavatar.io/${userName}`
  //const addAt = (userName) => `@${userName}`;
  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button';

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar' 
          alt="El avatar de midudev" 
          src={`https://unavatar.io/${userName}`} />
        <div className='tw-followCard-info'>
          {children}
          <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName}>
          {text}
        </button>
      </aside>
    </article>
  )
}