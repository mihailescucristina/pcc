import {
    Paper,
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
} from '@material-ui/core';

const Table = ({ keys, orderBy, order, sort, filteredData }) => {
    return (
        <TableContainer component={Paper}>
            <MuiTable>
                <TableHead>
                    <TableRow key="head">
                        {keys.map(key => {
                            return (
                                <TableCell
                                    align="left"
                                    sortDirection={
                                        orderBy === key.toString()
                                            ? order
                                            : false
                                    }
                                >
                                    {['id', 'firstName', 'lastName'].includes(
                                        key.toString()
                                    ) ? (
                                        <TableSortLabel
                                            active={orderBy === key.toString()}
                                            direction={
                                                orderBy === key.toString()
                                                    ? order
                                                    : 'asc'
                                            }
                                            onClick={sort(key.toString())}
                                        >
                                            {key}
                                        </TableSortLabel>
                                    ) : (
                                        key
                                    )}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredData.map(data => (
                        <TableRow key={data.id}>
                            {keys.map(
                                key =>
                                    keys.includes(key) && (
                                        <TableCell align="left">
                                            {data[key]
                                                ? data[key].toString()
                                                : data[key]}
                                        </TableCell>
                                    )
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </MuiTable>
        </TableContainer>
    );
};

export default Table;