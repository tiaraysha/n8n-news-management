import React from "react";
import { Dialog } from "@headlessui/react";

export default function Modal({ isOpen, onClose, children, title, icon: Icon }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded bg-white p-6">
          <div className="flex items-center gap-4 mb-4">
            {Icon && (
              <div className="rounded-full bg-blue-100 p-2">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
            )}
            <Dialog.Title className="text-lg font-bold">{title}</Dialog.Title>
          </div>

          <div>{children}</div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
