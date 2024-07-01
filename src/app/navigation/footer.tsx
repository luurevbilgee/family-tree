import { Box } from '@mui/material'
import { BottomNavigation } from '@mui/material'

export default function Footer() {
    return (
        <BottomNavigation sx={{
            width: '100%',
            height: '4rem',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2E2E2E'
        }} >
            <div >
                <p>Copyright @copy, 2024. All rights reserved</p>
            </div>
        </BottomNavigation>
    )
}