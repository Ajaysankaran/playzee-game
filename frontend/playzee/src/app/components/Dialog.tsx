import React, { useEffect, useState } from 'react'

interface DialogProps {
    text?: string
    children?: React.ReactNode;
    show: boolean
    body?: React.ReactNode
    footer?: React.ReactNode
}

const Dialog = (props: DialogProps) => {
    const [content, setContent] = useState<string | React.ReactNode>("");
    const [showDialog, setShowDialog] = useState(false);

    useEffect(() => {
        if (props.body) {
            setContent(props.body)
        } else if (props.text) {
            setContent(props.text)
        } else if (props.children) {
            setContent(props.children)
        }
        console.log(content)
    }, [props.children, props.text, props.body])

    useEffect(() => {
        console.log("props", props)
        if (props.show) {
            open()
        } else {
            close()
        }
    }, [props.show])

    const open = React.useCallback(() => {
        setShowDialog(true)
    }, [])

    const close = React.useCallback(() => {
        setShowDialog(false)
    }, [])

    return (
        <>
           {showDialog && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                
                                {content}
                            </div>
                            {props.footer ? props.footer : 
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button onClick={close}>Close</button>
                            </div>}
                            
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Dialog