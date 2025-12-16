import { IconButton, Box, Typography, Alert, Snackbar, Button } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import type { Dispatch, SetStateAction } from 'react'
import type { PaletteMode } from '@mui/material'
import { useState } from 'react'

interface AppProps {
  mode: PaletteMode
  setMode: Dispatch<SetStateAction<PaletteMode>>
}

export default function App({ mode, setMode }: AppProps) {
  const toggleMode = () => setMode(prev => (prev === 'light' ? 'dark' : 'light'))

  const [open, setOpen] = useState(false)

  return (
    <Box sx={{ p: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Brahian Base dark-light</Typography>
        <IconButton onClick={toggleMode} color="inherit">
          {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Box>

      <Box mt={3}>
        <Button variant="contained" onClick={() => setOpen(true)}>
        Click me!
        </Button>

        <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
          <Alert severity="success" sx={{ width: '100%' }} onClose={() => setOpen(false)}>
            Trying snack 
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  )
}
