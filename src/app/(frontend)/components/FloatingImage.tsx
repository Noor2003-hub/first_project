// components/FloatingImage.tsx

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface FloatingImageProps {
  src: string
  alt?: string
  width?: number
  height?: number
}

const FloatingImage: React.FC<FloatingImageProps> = ({ src, alt = '', width = 300, height = 300 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0], // Move up then down
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </motion.div>
  )
}

export default FloatingImage
