import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableBody, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    container: {
        maxWidth: 950,
        maxHeight: 440,
    },
    table: { minWidth: 650 },
    caption: { padding: '10px 10px' }
});

const CountriesTable = ({headData, mainData}) => {
    const classes = useStyles()
    return(
        <TableContainer className={classes.container}>
            <Table className={classes.table} size='small' stickyHeader aria-label="sticky simple table">
                <TableHead>
                    <TableRow>
                        {headData}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {mainData}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CountriesTable