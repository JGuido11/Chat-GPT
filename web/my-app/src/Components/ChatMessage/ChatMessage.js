import React from 'react'
import './ChatMessage.css'

const ChatMessage = ({message}) => {
    return(

        <div className={
            `chat-message ${message.user === 'gpt' && "chatgpt"}`
        }>
            <div className='chat-message-center'>
                
                <div className={
                    `avatar ${message.user === 'gpt' && "chatgpt"}`
                }>
                    {message.user === "gpt" &&

                        <svg
                            width={41}
                            height={41}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            strokeWidth={1.5}
                            className="h-6 w-6"
                        >

                            <path
                            
                                fill="currentColor"
                                style={{
                                    "--darkreader-inline-fill": "currentColor",
                                }}
                            />

                            
                        </svg>


                        
                    }

                </div>

                <div className='message'>
                    {message.message}
                </div>

            </div>
        </div>

    )
}