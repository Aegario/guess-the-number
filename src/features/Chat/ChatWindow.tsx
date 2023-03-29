import { FC, useEffect, useRef } from 'react'
import { Message } from './Message'

interface Props {
  messages: string[]
}

export const ChatWindow: FC<Props> = ({ messages }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log(wrapperRef.current)
    const wrapper = wrapperRef.current!
    wrapper.scrollTo(0, wrapper.scrollHeight)
  }, [messages])

  return (
    <div ref={wrapperRef} className="h-4/5 w-full overflow-y-auto p-1.5">
      {messages.map((message, idx) => (
        <div className="m-2">
          <Message sender="Michael" isEven={idx % 2 === 0}>
            {message}
          </Message>
        </div>
      ))}
    </div>
  )
}
