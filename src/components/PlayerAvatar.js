import '../styles/PlayerAvatar.css';

const PlayerAvatar = ({ position }) => {
  return (
    <div
      className="player-avatar"
      style={{ top: position.y, left: position.x }}
    >
      👨‍💻
    </div>
  );
};

export default PlayerAvatar;