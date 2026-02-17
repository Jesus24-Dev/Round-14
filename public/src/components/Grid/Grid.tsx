import { GridStyles } from "./Grid.styles";
import { type GridProps } from "./Grid.types";

export function Grid({sidebar, content}: GridProps) {
    return (
        <div className={GridStyles.container}>
            <div className={GridStyles.sidebar}>
                {sidebar}
            </div>
            <div className={GridStyles.content}>
                {content}
            </div>
        </div>
    )
}