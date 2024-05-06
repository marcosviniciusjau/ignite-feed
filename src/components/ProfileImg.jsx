import styles from './ProfileImg.module.css'


export function ProfileImg({hasBorder = true, src}){
    return(
        <img 
         className={hasBorder ? styles.profileImgWithBorder : styles.profileImg}
         src={src}/>
    );
}