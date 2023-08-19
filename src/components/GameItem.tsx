const GameItem = ({ img,projectLink}) => {
  return (
      <div className="gameItem ">
          <a href={projectLink} target="_blank">
              
      <img className="gameIcon" src={img} alt="" />
          </a>
    </div>
  );
};

export default GameItem;
