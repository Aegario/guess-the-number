import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { Button, Title } from 'components'
import { ChatIcon } from 'icons'
import { ChatWindow } from './ChatWindow'
import { Input } from 'features/Chat/Input'

const TITLE = 'Chat'
interface Props {}

export const Chat: FC<Props> = () => {
  const [messages, setMessages] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    if (val.length > 56) return
    setInputValue(val)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputValue) return
    setMessages([...messages, inputValue])
    setInputValue('')
  }

  return (
    <>
      <Title icon={<ChatIcon />} text={TITLE} />
      <div className="border-def flex h-[183.33px] flex-col justify-center overflow-hidden">
        <ChatWindow messages={messages} />

        <form onSubmit={handleSubmit} className="flex w-full bg-gray-700 p-2">
          <Input onChange={handleInputChange} value={inputValue} />

          <div className="ml-2 w-1/5">
            <Button>Send</Button>
          </div>
        </form>
      </div>
    </>
  )
}
