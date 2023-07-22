import { memo, type Dispatch, type SetStateAction } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { DialogTitle, Dialog, Container, Typography, IconButton, Stack } from '@mui/material'

type DialogType = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const ExRateDialog = ({ open, setOpen }: DialogType) => {
  const closeDialog = () => {
    setOpen(false)
  }

  return (
    <Dialog onClose={closeDialog} open={open} className="mui-dialog">
      <DialogTitle minWidth={340} borderBottom="1px solid #a5a5a5" sx={{ padding: '12px 16px' }}>
        <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
          <Typography component="p" fontSize={16} fontWeight="bold">
            공포 & 탐욕 지수
          </Typography>
          <IconButton onClick={closeDialog} sx={{ padding: '0' }}>
            <RiCloseCircleLine fontSize={24} />
          </IconButton>
        </Stack>
      </DialogTitle>
      <Container sx={{ padding: '16px' }}>
        <img className="fear-greed-img" src={`https://alternative.me/crypto/fear-and-greed-index.png?${new Date().getTime()}`} width="550" alt="crypto fear greed index chart" />
      </Container>
    </Dialog>
  )
}

export default memo(ExRateDialog)