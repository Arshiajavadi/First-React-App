import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [selected, setSelected] = useState(false);

  const toggle = () => {
    setSelected(!selected);
    console.log('Liked')
  };

  if (selected === true)
    return <FaHeart color="red" size={34} cursor="pointer" onClick={toggle} />;
  else
    return (
      <FaRegHeart color="red" size={34} cursor="pointer" onClick={toggle} />
    );
};

export default Like;
