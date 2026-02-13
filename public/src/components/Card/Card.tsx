import { type CardProps } from './Card.types';
import { baseStyles, colorVariants, iconBgVariants } from './Card.styles';

export const Card = ({ title, icon, color, onClick }: CardProps) => {
  const iconPath = `../../assets/images/${icon}.svg`;

  return (
    <div className={`${baseStyles.container} ${colorVariants[color] || colorVariants.blue}`} onClick={onClick}>
      <div className={`${baseStyles.iconContainer} ${iconBgVariants[color] || iconBgVariants.blue}`}>
        <img 
          src={iconPath}
          alt={`Icono de ${title}`} 
          className={baseStyles.iconImage}
        />
      </div>
      
      <h3 className={baseStyles.title}>{title}</h3>
    </div>
  );
};