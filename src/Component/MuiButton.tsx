import { Button, Stack } from '@mui/material'
import React, { useState } from 'react'

function MuiButton() {
    let [toggleButtonValue, setToggleButtonValue] = useState<string[]>([])

    return (
        <>
            {/* diffrant style button */}
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 4, ml: 3 }}>
                <Button variant='contained'>Contained</Button>
                <Button variant='text'>Text</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>

            {/* text and link button */}
            <Stack direction="row" spacing={2} sx={{ mt: 4, ml: 3 }}>
                <Button>Text</Button>
                <Button variant='text'>Text</Button>
                <Button href='https://google.com'>Link</Button>
                <Button disabled variant='contained'>Disabled</Button>
            </Stack>

            {/* for remove shadow */}
            <Stack direction="row" spacing={2} sx={{ mt: 4, ml: 3 }}>
                <Button variant='contained' disableElevation>Contained</Button>
            </Stack>

            {/* for color */}
            <Stack direction="row" spacing={2} sx={{ mt: 4, ml: 3 }}>
                <Button color='primary' variant='contained'>Primary</Button>
                <Button color='secondary' variant='contained'>Secondary</Button>
                <Button color='info' variant='contained'>Info</Button>
                <Button color='error' variant='contained'>Error</Button>
                <Button color='warning' variant='contained'>Warning</Button>
                <Button color='success' variant='contained'>Success</Button>
                {/* same color property, you can apply for variant ="text/no varient" */}
            </Stack>

            {/* for size of button */}
            <Stack direction="row" spacing={2} sx={{ mt: 4, ml: 3 }}>
                <Button size='large' variant='contained'>Large</Button>
                <Button size='medium' variant='contained'>Medium</Button>
                <Button size='small' variant='contained'>Small</Button>
            </Stack>

            {/* {Buttons with icons and label} */}
            <Stack direction="row" spacing={2} sx={{ mt: 4, ml: 3 }}>
                <Button></Button>
            </Stack>

        </>
    )
}

export default MuiButton