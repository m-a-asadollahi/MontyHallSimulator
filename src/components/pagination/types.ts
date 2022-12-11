//* Enum for pagination 's button direction
export enum EButtonDirection {
  LEFT,
  RIGHT,
}
//* Type of pagination's button style
export interface PaginationButtonTypes {
  size: string;
  thickness: string;
  angle: number;
  hoverAngle: number;
  color: string;
  direction: EButtonDirection;
}

//* Type of pagination component's props
export interface PaginationPropsTypes {
  totalCounts: number;
}
