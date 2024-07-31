
const Album = ({ albumArt }: any) => {
  return (
    <div className='album'>
      <img className='album-cover' src={albumArt} alt='PandaMylk Album Art' />
    </div>
  );
}

export default Album;