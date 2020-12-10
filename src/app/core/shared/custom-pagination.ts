import { MatPaginatorIntl } from '@angular/material/paginator';

const plRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length === 0 || pageSize === 0) { return `0 z ${length}`; }
  length = Math.max(length, 0);
  const startIndex = page * pageSize;
  const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
  return `${startIndex + 1} - ${endIndex} z ${length}`;
};

export function CustomPaginator(): any {
  const customPaginatorIntl = new MatPaginatorIntl();
  customPaginatorIntl.nextPageLabel = 'następna';
  customPaginatorIntl.previousPageLabel = 'poprzednia';
  customPaginatorIntl.itemsPerPageLabel = 'Postów na stronę:';
  customPaginatorIntl.getRangeLabel = plRangeLabel;
  return customPaginatorIntl;
}
