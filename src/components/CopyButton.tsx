import { memo } from 'react'
import IconButton from '@mui/material/IconButton'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { toast } from 'react-toastify'
import { copyText } from '@/utils/common'

const CopyButton = ({ txt }: { txt: string | number }) => {
  const clickCopy = async () => {
    if (!txt) return
    const target = txt.toString()
    const isDone = await copyText(target)
    if (isDone) toast.success(`"${txt}" 복사 완료!`)
    else toast.error('복사 실패!')
  }

  return (
    <IconButton onClick={clickCopy} aria-label="copy" color="primary">
      <ContentCopyIcon fontSize="small" />
    </IconButton>
  )
}

export default memo(CopyButton)