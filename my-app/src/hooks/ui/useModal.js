// From Saturday In The Park 
// Just in case we need a modal


import { useState, useEffect } from "react"
import { isPromiseAlike } from "q"

const useModal = selector => {

    const [modalIsOpen, setIsOpen] = useState(true)

    function toggleDialog(visible) {
        setIsOpen(!visible)
    }

    useEffect(() => {
        if (modalIsOpen) {
            document.querySelector(`${selector}`).close()
        } else {
            document.querySelector(`${selector}`).show()
        }
    })

    return { toggleDialog, modalIsOpen }
}

export default useModal