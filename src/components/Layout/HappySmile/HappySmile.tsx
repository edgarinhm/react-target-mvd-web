import happySmiles from 'assets/layout/media/happy-smiles.png';

export interface HappySmileProp {
  small?: string;
}

const HappySmile = ({ small = 'smiles' }: HappySmileProp) => {
  return <img className={small} src={happySmiles} alt="happy smile"></img>;
};

export default HappySmile;
