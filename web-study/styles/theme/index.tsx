import { createTheme } from '@mui/material';

export const theme = createTheme({
    components: {
        MuiButton: {
          defaultProps: {
            disableElevation: true
          }
        },
        MuiButtonBase: {
          defaultProps: {
            disableRipple: true
          }
        },
      MuiCssBaseline: {
        styleOverrides: {
          '*': {
            boxSizing: 'border-box',
            margin: 0,
            padding: 0
          },
          body: {
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            minHeight: '100%',
            width: '100%'
          }
        }
      }
    },
    palette: {
        // action: {
        //     active: '#6B7280',
        //     focus: 'rgba(55, 65, 81, 0.12)',
        //     hover: 'Black',
        //     selected: 'rgba(55, 65, 81, 0.08)',
        //     disabledBackground: 'rgba(55, 65, 81, 0.12)',
        //     disabled: 'rgba(55, 65, 81, 0.26)'
        // },
        primary: {
          main: '#285943',
          light: '#D7FFF1',
          dark: '#285943',
          contrastText: '#77AF9C'
        }
    }
})
