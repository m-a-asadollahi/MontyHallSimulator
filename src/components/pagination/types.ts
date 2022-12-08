export enum EButtonDirection {
  LEFT,
  RIGHT,
}
export interface PaginationButtonTypes {
  size: string;
  thickness: string;
  angle: number;
  hoverAngle: number;
  color: string;
  direction: EButtonDirection;
}

export interface PaginationPropsTypes {
  totalCounts: number;
}
