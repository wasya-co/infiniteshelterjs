
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import React, { useContext } from 'react'
import styled from 'styled-components'

import {
  AppContext,
  C,
  logg,
} from '$shared'

const Maxwidth = styled.div`
  margin: auto;
  max-width: 800px;

  input[type='text'] {
    width: 100%;
  }
`;

const _TestPay = (props) => {
  // logg(props, 'TestPay')

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (<>
    <Maxwidth >
      <MuiPickersUtilsProvider
        // utils={DateFnsUtils}
      >
        <h1>TestPay</h1>


      <form noValidate autoComplete="off">
        <div>
          <TextField label="Your Name" variant="outlined" />
        </div>
        <div>
          <TextField label="Telephone" variant="outlined" />
        </div>
        <div>
          <TextField label="Email" variant="outlined" />
        </div>


    <Grid container justifyContent="space-around">
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label="Date picker inline"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
      <KeyboardTimePicker
        margin="normal"
        id="time-picker"
        label="Time picker"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change time',
        }}
      />
    </Grid>



        <div>
          <TextField label="cc" variant="outlined" />
        </div>
        <Button variant='contained' color='primary' >Submit</Button>
      </form>
      </MuiPickersUtilsProvider>
    </Maxwidth>
  </>)
}

const WrappedTestPay = ({ children, ...props }) => {
  logg(props, 'WrappedTestPay')
  const {
  } = props

  const { setLayout } = useContext(AppContext)
  if (props.layout) { setLayout(props.layout) }

  return <_TestPay {...props}>{children}</_TestPay>
}
export default WrappedTestPay
