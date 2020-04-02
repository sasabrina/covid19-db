import React, { useState } from 'react';
import { makeStyles, TextField, Select, MenuItem, Button, Typography} from '@material-ui/core'
import { postData } from '../../helpers/index'
import './Form.scss'

const Form = ({close}) => {
    const [newInfected, setNewInfected] = useState(initialState)
    const [errorMessage, setErrorMessage] = useState('hidden')
    const { first_name, last_name, birth_date, country, gender, alive } = newInfected
    
    const useStyles = makeStyles((theme) => ({
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 140,
        },
        selectEmpty: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            marginTop: theme.spacing(2),
            width: 140,
        },
    }));
    const classes = useStyles();

    const handleChange = event => setNewInfected({...newInfected, [event.target.name]: event.target.value });

    const handleFormData = () => {
        if(first_name.length < 3 && last_name < 3){
            setErrorMessage('')
        }else{
            postData(newInfected, setNewInfected, initialState);
            close()
        }
    }

    return(
        <form noValidate autoComplete="off">
            <Typography variant='h4' align='center' gutterBottom >Add new infected</Typography>
            <div>
                <TextField label="First name" value={first_name} name='first_name' onChange={handleChange} className={classes.textField} required/>
                <TextField label="Last name" value={last_name} name='last_name' onChange={handleChange} className={classes.textField} required/>
            </div>

            <div>
                <TextField
                    type="date"
                    label="Birth date"
                    defaultValue="2017-05-24"
                    value={birth_date}
                    name='birth_date'
                    onChange={handleChange}
                    className={classes.textField}
                    InputLabelProps={{shrink: true}}
                />

                <Select value={gender} onChange={handleChange} className={classes.selectEmpty} name='gender'>
                    <MenuItem value="Gender" disabled>Gender</MenuItem>
                    <MenuItem value={'female'}>Female</MenuItem>
                    <MenuItem value={'male'}>Male</MenuItem>
                </Select>
            </div>

            <div>
                <Select value={country} onChange={handleChange} className={classes.selectEmpty} name='country'>
                    <MenuItem value="Country" disabled>Country</MenuItem>
                    <MenuItem value={'Argentina'}>Argentina</MenuItem>
                    <MenuItem value={'Chile'}>Chile</MenuItem>
                    <MenuItem value={'Brasil'}>Brasil</MenuItem>
                    <MenuItem value={'Etc'}>Etc</MenuItem>
                </Select>
            
                <Select value={alive} onChange={handleChange} className={classes.selectEmpty} name='alive'>
                    <MenuItem value="Is alive" disabled>Is alive</MenuItem>
                    <MenuItem value={'yes'}>Yes</MenuItem>
                    <MenuItem value={'no'}>No</MenuItem>
                </Select>
            </div>
            <div className='btn-form'>
                <Button onClick={handleFormData} variant='contained' color='primary' size='small'>Add</Button>
                <p className={errorMessage}>Please complete the required fields</p>
            </div>
        </form>
    )
}

const initialState = {
    first_name: '',
    last_name: '',
    birth_date: 'Birth date',
    country: 'Country',
    alive: 'Is alive',
    gender: 'Gender'
}

export default Form