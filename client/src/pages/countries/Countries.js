import React, {useState, useEffect} from 'react'
import { fetchData } from '../../helpers/index'
import { Header, CountriesTable, CountriesChart } from '../../components/index'
import { Paper, TableRow, TableCell, Typography, makeStyles } from '@material-ui/core'
import './Countries.scss'

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetchData(setCountries, 'http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/countries')
      }, [])

    const tableHeadData = ['Countries', 'Infected']
    const createHeadData = tableHeadData.map((t, i) => <TableCell key={i} size='small' className='head-text'>{t}</TableCell>)

    const createMainData = countries.map((d, i) => (
        <TableRow key={i}>
            <TableCell>{d.name}</TableCell>
            <TableCell>{d.infected}</TableCell>
        </TableRow>
        )
    )
    
    const useStyles = makeStyles({
        root: { 
            padding: '15px 10px',
            display: 'flex',
            alignItems: 'end'
        }
    });
    const classes = useStyles()

    return(
        <>
            <Header/>
            <section className='countries-container' id='countries'>
                <Paper variant='outlined' elevation={3} className={classes.root}>
                    <div>
                        <Typography variant='h4' gutterBottom >Infected countries</Typography>
                        <CountriesTable headData={createHeadData} mainData={createMainData}/>
                    </div>
                    <CountriesChart countries={countries}/>
                </Paper>
            </section>
        </>
    )
}

export default Countries