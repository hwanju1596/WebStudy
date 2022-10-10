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
        }
    },
    palette: {
        action: {
            active: '#6B7280',
            focus: 'rgba(55, 65, 81, 0.12)',
            hover: 'rgba(55, 65, 81, 0.04)',
            selected: 'rgba(55, 65, 81, 0.08)',
            disabledBackground: 'rgba(55, 65, 81, 0.12)',
            disabled: 'rgba(55, 65, 81, 0.26)'
        }
    }
})
