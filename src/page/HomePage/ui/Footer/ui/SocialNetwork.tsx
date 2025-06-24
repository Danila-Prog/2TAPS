import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./SocialNetwork.module.scss";

interface ISocialNetwork {
  hrefLink: string;
  srcImage: StaticImageData;
  altImage: string;
}

export const SocialNetwork = ({
  hrefLink,
  srcImage,
  altImage,
}: ISocialNetwork) => {
  return (
    <li>
      <Link href={hrefLink} className={styles.socialNetwork} target="_blank">
        <Image src={srcImage} alt={altImage} />
      </Link>
    </li>
  );
};
