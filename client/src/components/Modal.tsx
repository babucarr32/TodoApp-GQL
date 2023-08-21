import React, { useState } from "react";
import { Button } from "../../@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../@/components/ui/dialog";

interface ModalType {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalType> = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={() => {
        setIsModalOpen(!isModalOpen);
      }}
    >
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="text-white p-3 rounded-lg absolute h-auto w-64 left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] bg-slate-800 before:bg-slate-500">
        <DialogHeader>
          <DialogTitle>
            <p className="text-[1.25em] font-bold mb-3">Confirm Delete</p>
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to delete?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="w-full flex justify-between">
            <Button
              onClick={() => {
                setIsModalOpen(false);
              }}
              className="bg-red-500 h-10 w-20 rounded-lg outline-none mt-3"
              type="submit"
            >
              Yes
            </Button>
            <Button
              onClick={() => {
                setIsModalOpen(false);
              }}
              className=" h-10 w-20 rounded-lg outline-none mt-3 text-blue-500"
              type="submit"
            >
              Cancel
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
