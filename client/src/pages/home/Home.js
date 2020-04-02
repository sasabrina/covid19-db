import React from 'react';
import { ThemeProvider, Container, Button, makeStyles } from '@material-ui/core'
import { Header, Footer } from '../../components/index'
import theme from '../../theme'
import './Home.scss'

const Home = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': { margin: theme.spacing(1) }
        },
      }));
      const classes = useStyles();
            
    return(
        <ThemeProvider theme={theme}>
            <Container disableGutters>
                <section>
                    <Header/>
                    <div className='header-container'>
                        <h1>Covid-19 Database</h1>
                        <p>A Blockinar challenge</p>
                        <div className={classes.root}>
                            <Button variant='outlined' color='secondary' href='/infected'>Infected</Button>
                            <Button variant='outlined' color='secondary' href='/countries'>Countries</Button>
                        </div>
                    </div>
                </section>
            </Container>
        </ThemeProvider>
    )
}

export default Home