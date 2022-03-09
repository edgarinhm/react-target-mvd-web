import happySmiles from 'assets/layout/media/happy-smiles.png';

export interface HappySmileProp {
  styleClass?: string;
}

const HappySmile = ({ styleClass = 'smiles' }: HappySmileProp) => {
  return <img className={styleClass} src={happySmiles} alt="happy smile"></img>;
};

export default HappySmile;
