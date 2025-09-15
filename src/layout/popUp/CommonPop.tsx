import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { emptyCart } from '../../Redux/CartSlice'
export default function MyModal() {
    const dispatch = useDispatch();

  let [isOpen, setIsOpen] = useState(true)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  const handleClearCart = ()=>{
    dispatch(emptyCart(""))
  }
  return (
    <>
      <Button
        onClick={open}
        className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/30"
      >
        {/* Open dialog */}
      </Button>

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-10"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-white">
              Place Order ?.
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white">
                
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                  onClick={
                    ()=>{
                     
                        handleClearCart()
                    }
       
                  }
                  
                >
                  Yes Please !!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
