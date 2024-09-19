import {
  AnalyticalTable,
  FlexBox,
  Button,
} from '@ui5/webcomponents-react';
import { useEffect } from 'react';

const ListDoc = ({ data }) => {
  useEffect(() => {
    console.log(data)
  }, [data]);
  return (
    <>
      <AnalyticalTable
        style={{ marginLeft: "1rem", width: "100% !important" }}
        columns={[
          {
            Header: 'DocumentDate',
            accessor: 'documentDate',
            headerTooltip: 'Full Name'
          },
          {
            Header: 'DocumentType',
            accessor: 'documentType',
            headerTooltip: 'Full Name'
          },
          {
            Header: 'Date',
            accessor: 'finished',
            hAlign: 'End'
          },
          {
            Header: 'Paid By',
            accessor: 'receiverName',
            hAlign: 'End'
          },
          {
            Header: "Amount",
            accessor: 'grossAmount',
            hAlign: 'End'


          },
          {
            Cell: (instance) => {
              const { cell, row, webComponentsReactProperties } = instance;
              // disable buttons if overlay is active to prevent focus
              const isOverlay = webComponentsReactProperties.showOverlay;
              // console.log('This is your row data', row.original);
              return (
                <FlexBox>
                  <Button icon="edit" disabled={isOverlay} />
                  <Button icon="delete" disabled={isOverlay} />
                </FlexBox>
              );
            },
            cellLabel: ({ cell }) => {
              // `cell.cellLabel` contains the internal `aria-label` of the respective cell
              return `${cell.cellLabel} press TAB to focus active elements inside this cell`;
            },
            Header: 'Actions',
            hAlign: 'End',
            accessor: '.',
            id: 'actions',
            width: 100
          }
        ]}
        data={data}
        filterable
        groupBy={[]}
        groupable
        header="Bills"
        infiniteScroll
        onColumnsReorder={() => { }}
        onGroup={() => { }}
        onLoadMore={() => { }}
        onRowClick={() => { }}
        onRowExpandChange={() => { }}
        onRowSelect={() => { }}
        onSort={() => { }}
        onTableScroll={() => { }}
        rowHeight={60}
        selectedRowIds={{ 3: true }}
        // selectionMode="Multiple"
        // renderRowSubComponent={renderRowSubComponent}
        scaleWidthMode="Auto"
      />



    </>
  );

}

export default ListDoc
