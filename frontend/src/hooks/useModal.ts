import { useState } from 'react'

export function useModal<T>() {
  const [activeItem, setActiveItem] = useState<T | null>(null)

  const openModal = (item: T) => setActiveItem(item)
  const closeModal = () => setActiveItem(null)

  return { activeItem, isOpen: activeItem !== null, openModal, closeModal }
}
