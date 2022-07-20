import Image from 'next/image';

interface PostProps {
  name: string;
  image: string;
  description: string;
}

const Post = ({ name, image, description }: PostProps) => {
  return (
    <div>
      <p>{name}</p>
      <Image src={image} alt={`${name} 사진`} />
      <p>{description}</p>
    </div>
  );
};

export default Post;
