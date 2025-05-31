export const Chatbot = () => {

    return (
        <>
            {/* <div className="w-100 h-120 rounded-sm absolute top-22 right-10 self-end bg-black drop-shadow-[3px_3px_10px_var(--darktertiaryColor)]">
                this is blank with same styling, for quick testing. <br/> real chatbot takes time to load
            </div> */}
            <iframe
                src="https://www.chatbase.co/chatbot-iframe/jUwGIP8auLSXFf1A5_g1s"
                allow="payment 'none'"
                className="w-50 sm:w-70 lg:w-100 h-120 rounded-sm self-end drop-shadow-[3px_3px_10px_var(--darktertiaryColor)]"
                title="Chat with Mr. Deepak's AI Assistant"
            ></iframe>
        </>
    )
}