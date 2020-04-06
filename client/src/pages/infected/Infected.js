import React, {useState, useEffect} from 'react'
import { TableRow, TableCell, Paper, Typography, makeStyles } from '@material-ui/core'
import { Header, CustomTable, ExportCVS, FormModal } from '../../components/index'
import { isAlive, createGender, createDate, tableHeadData, handleSort } from '../../helpers/infected'
import { getData } from '../../helpers/index'
import './Infected.scss'

const Infected = () => {
    const [infected, setInfected] = useState([])
    const [sortType, setSortType] = useState('asc')
    const [invertDirection] = useState({ asc: "desc", desc: "asc" })

    useEffect(() => {
        getData(setInfected, 'http://localhost:8080/api/infected')
        // fetchData(setInfected, 'http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected')
    }, [])

      
    const sortClass = columnName => columnName === 'Age' ? 'sort-class' : '';
    const toSort = columnName => columnName === 'Age' ? handleSort( invertDirection, sortType, setSortType, infected ) : '';

    const createHeadData = tableHeadData.map((t, i) => (
        <TableCell key={i}
            className={`head-text ${sortClass(t)}`}
            onClick={()=> {toSort(t)}}>{t}
        </TableCell>)
    )
    
    const createMainData = infected.map((d, i) => <TableRow key={i} className={isAlive(d)}>
            <TableCell>{d.first_name}</TableCell>
            <TableCell>{d.last_name}</TableCell>
            <TableCell>{d.country}</TableCell>
            <TableCell>{d.age}</TableCell>
            <TableCell>{createGender(d)}</TableCell>
            <TableCell>{createDate(d)}</TableCell>
        </TableRow>
    )

    const useStyles = makeStyles({
        root: { padding: '15px 10px' }
    });
    const classes = useStyles()

    return(
        <>
            <Header/>
            <section className='infected-container' id='infected'>
                <Paper variant='outlined' elevation={3} className={classes.root}>
                    <div className='header-infected' >
                    <Typography variant='h4' >Infected people</Typography>
                    <div className='buttons-infected'>
                        <FormModal/>
                        <ExportCVS csvData={infected} fileName='infected-data'/>

                    </div>
                    </div>
                    <CustomTable headData={createHeadData} mainData={createMainData}/>
                </Paper>
            </section>
        </>
    )
}

export default Infected