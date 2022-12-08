import _ from "lodash";
import { setCurrentPage } from "../../store/dataPagination/paginationSlice";
import { useAppDispatch, useAppSelector } from "../../store/storeHook";
import {
  Counter,
  PaginationButton,
  Number,
  Pagination,
  PaginationPanel,
  PaginationContainerStyled,
} from "./paginationNavStyles";

import { EButtonDirection, PaginationPropsTypes } from "./types";

const PaginationNav = (props: PaginationPropsTypes) => {
  const pagination = useAppSelector((state) => state.pagination);
  const dispatch = useAppDispatch();

  const pagesCount = Math.ceil(props.totalCounts / pagination.pageSize);

  if (pagesCount === 1) return null;

  const onChangePage = (direction: EButtonDirection) => {
    if (direction === EButtonDirection.LEFT) {
      dispatch(
        setCurrentPage(
          pagination.currentPage === 1
            ? pagination.currentPage
            : pagination.currentPage - 1
        )
      );
    } else if (direction === EButtonDirection.RIGHT) {
      dispatch(
        setCurrentPage(
          pagination.currentPage === pagesCount
            ? pagination.currentPage
            : pagination.currentPage + 1
        )
      );
    }
  };

  return (
    <PaginationContainerStyled>
      <Pagination>
        <PaginationButton
          angle={40}
          color="#645caa"
          hoverAngle={30}
          size="60px"
          thickness="3px"
          direction={EButtonDirection.LEFT}
          className={pagination.currentPage === 1 ? "disable" : ""}
          onClick={() => onChangePage(EButtonDirection.LEFT)}
        />
        <PaginationPanel>
          <Counter>
            <Number>{pagination.currentPage}</Number>
            <Number>{pagesCount}</Number>
          </Counter>
        </PaginationPanel>
        <PaginationButton
          angle={40}
          color="#645caa"
          hoverAngle={30}
          size="60px"
          thickness="3px"
          direction={EButtonDirection.RIGHT}
          className={pagination.currentPage === pagesCount ? "disable" : ""}
          onClick={() => onChangePage(EButtonDirection.RIGHT)}
        />
      </Pagination>
    </PaginationContainerStyled>
  );
};

export default PaginationNav;
